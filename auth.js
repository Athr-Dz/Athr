/* =========================================================
   Authentication Helper - Supabase
   ========================================================= */

const Auth = {
  // Current user session
  currentUser: null,

  // Initialize auth (check if user is logged in)
  async init() {
    if (!window.supabaseClient) {
      console.error('Supabase client not initialized');
      return null;
    }

    const { data: { session } } = await window.supabaseClient.auth.getSession();
    if (session) {
      // Try users table first (principal/teacher/parent)
      const { data: userProfile } = await window.supabaseClient
        .from('users')
        .select('*')
        .eq('auth_id', session.user.id)
        .single();
      
      if (userProfile) {
        this.currentUser = userProfile;
        return userProfile;
      }

      // Try students table using admin client (bypass RLS)
      const { data: studentProfile } = await window.supabaseAdmin
        .from('students')
        .select('*')
        .eq('auth_id', session.user.id)
        .single();
      
      if (studentProfile) {
        const profile = {
          ...studentProfile,
          role: 'student',
        };
        this.currentUser = profile;
        return profile;
      }
    }
    return null;
  },

  // Login with email and password (Principal, Teachers & Students)
  async loginWithEmail(email, password) {
    // Wait for Supabase client to be ready
    let attempts = 0;
    while (!window.supabaseClient && attempts < 50) {
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }
    
    if (!window.supabaseClient) {
      throw new Error('Supabase client not initialized. Please refresh the page.');
    }

    const { data, error } = await window.supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Try to get user profile from users table (principal/teacher/parent)
    const { data: userProfile } = await window.supabaseClient
      .from('users')
      .select('*')
      .eq('auth_id', data.user.id)
      .single();

    if (userProfile) {
      this.currentUser = userProfile;
      return userProfile;
    }

    // If not found in users, try students table using admin client (bypass RLS)
    const { data: studentProfile } = await window.supabaseAdmin
      .from('students')
      .select('*')
      .eq('auth_id', data.user.id)
      .single();

    if (studentProfile) {
      // Add role to student profile
      const profile = {
        ...studentProfile,
        role: 'student',
      };
      this.currentUser = profile;
      return profile;
    }

    // Profile doesn't exist in either table
    throw new Error(`تم تسجيل الدخول بنجاح لكن لم يتم العثور على ملف المستخدم في قاعدة البيانات.

يرجى التأكد من:
1. تشغيل ملف SETUP-COMPLETE.sql في Supabase SQL Editor
2. إنشاء ملف المستخدم بشكل صحيح

البريد الإلكتروني: ${email}
معرف المستخدم: ${data.user.id}`);
  },

  // Login with phone OTP (Parents)
  async loginWithPhone(phone) {
    if (!window.supabaseClient) {
      throw new Error('Supabase not configured');
    }

    const { data, error } = await window.supabaseClient.auth.signInWithOtp({
      phone,
    });

    if (error) throw error;
    return data;
  },

  // Verify OTP code
  async verifyOTP(phone, token) {
    if (!window.supabaseClient) {
      throw new Error('Supabase not configured');
    }

    const { data, error } = await window.supabaseClient.auth.verifyOtp({
      phone,
      token,
      type: 'sms',
    });

    if (error) throw error;

    // Get user profile
    const { data: profile } = await window.supabaseClient
      .from('users')
      .select('*')
      .eq('auth_id', data.user.id)
      .single();

    this.currentUser = profile;
    return profile;
  },

  // Logout
  async logout() {
    if (!window.supabaseClient) {
      this.currentUser = null;
      return;
    }

    await window.supabaseClient.auth.signOut();
    this.currentUser = null;
  },

  // Create teacher account (Principal only)
  async createTeacher(teacherData, password) {
    if (!window.supabaseAdmin) {
      throw new Error('Admin client not configured');
    }

    // Check if current user is principal
    if (this.currentUser?.role !== 'principal') {
      throw new Error('Only principal can create teacher accounts');
    }

    // Create auth user using admin client (auto-confirmed)
    const { data: authData, error: authError } = await window.supabaseAdmin.auth.admin.createUser({
      email: teacherData.email,
      password: password,
      email_confirm: true, // Auto-confirm email
      user_metadata: {
        role: 'teacher',
        name: teacherData.name,
        teacher_type: teacherData.teacher_type || 'speech_therapy',
      }
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error('Failed to create auth user');

    // Create user profile using ADMIN client (bypass RLS)
    const { data: profile, error: profileError} = await window.supabaseAdmin
      .from('users')
      .insert({
        auth_id: authData.user.id,
        school_id: this.currentUser.school_id,
        role: 'teacher',
        teacher_type: teacherData.teacher_type || 'speech_therapy', // 'speech_therapy', 'special_education', or 'vice_principal'
        name: teacherData.name,
        email: teacherData.email,
        phone: teacherData.phone,
        title: teacherData.title,
        color: teacherData.color || 'c-purple',
        initials: teacherData.initials,
        permissions: teacherData.permissions || {
          can_add_students: false,
          can_edit_students: false,
          can_delete_students: false,
        },
      })
      .select()
      .single();

    if (profileError) {
      // If profile creation failed, delete the auth user to avoid orphaned accounts
      await window.supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      throw profileError;
    }
    
    return profile;
  },

  // Update teacher permissions (Principal only)
  async updateTeacherPermissions(teacherId, permissions) {
    if (!window.supabaseClient) {
      throw new Error('Supabase not configured');
    }

    if (this.currentUser?.role !== 'principal') {
      throw new Error('Only principal can update permissions');
    }

    const { data, error } = await window.supabaseClient
      .from('users')
      .update({ permissions })
      .eq('id', teacherId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Check if user has permission
  hasPermission(permission) {
    if (!this.currentUser) return false;
    if (this.currentUser.role === 'principal') return true; // Principal has all permissions
    if (this.currentUser.role === 'teacher') {
      return this.currentUser.permissions?.[permission] === true;
    }
    return false;
  },
};

// Export
window.Auth = Auth;
