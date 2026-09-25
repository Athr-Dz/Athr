# 🚀 أثر Platform - Setup Guide

## 📋 **What You Need:**

1. **Supabase Account** (free tier works for testing)
2. **Node.js** installed (for local dev server)

---

## ⚡ **Quick Start (5 Minutes)**

### **Step 1: Create Supabase Project**

1. Go to https://supabase.com
2. Click "New Project"
3. Fill in:
   - **Name:** `athr-platform`
   - **Database Password:** (save this!)
   - **Region:** Singapore or Frankfurt (closest to Saudi Arabia)
4. Wait 2 minutes for project to be ready

### **Step 2: Run Database Schema**

1. In Supabase dashboard, click **SQL Editor** (left sidebar)
2. Open the file `supabase-schema.sql` from this project
3. Copy ALL the content
4. Paste into SQL Editor
5. Click **Run** (bottom right)
6. Wait for "Success" message

### **Step 3: Create First Principal Account**

In SQL Editor, run this:

```sql
-- Create principal auth user
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'principal@athr.sa',  -- Change this email
  crypt('password123', gen_salt('bf')),  -- Change this password
  NOW(),
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  FALSE,
  '',
  '',
  '',
  ''
) RETURNING id;

-- Copy the ID from above result, then run:
-- Replace YOUR_AUTH_ID with the ID you just got
INSERT INTO users (auth_id, school_id, role, name, email, title, color, initials)
VALUES (
  'YOUR_AUTH_ID',  -- Paste the ID here
  (SELECT id FROM schools LIMIT 1),
  'principal',
  'أ. منى السعيد',
  'principal@athr.sa',  -- Same email as above
  'مديرة المدرسة',
  'c-purple',
  'مس'
);
```

### **Step 4: Configure App**

1. In Supabase dashboard, go to **Settings → API**
2. Copy:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (long string starting with `eyJ...`)

3. Open `supabase-config.js` in this project
4. Replace:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   const USE_MOCK_MODE = false;  // Set to false for real mode
   ```

### **Step 5: Run App**

```bash
npm run dev
```

Open browser to: `http://localhost:3000`

Login with:
- **Email:** `principal@athr.sa` (or what you set)
- **Password:** `password123` (or what you set)

---

## 🎯 **What Principal Can Do:**

1. ✅ **Add Teachers**
   - Go to "المعلمات" tab
   - Click "إضافة معلمة"
   - Set permissions (can add students, etc.)
   - System creates login account for teacher

2. ✅ **Add Students**
   - Go to "الطالبات" tab
   - Click "إضافة طالبة"
   - Assign to teacher
   - System generates invite code for parent

3. ✅ **View Reports**
   - See all activities
   - Teacher performance
   - Student progress

4. ✅ **Manage Everything**
   - Full access to all data
   - Edit/delete teachers and students
   - Configure school settings

---

## 🔐 **Teacher Permissions:**

Principal can give teachers different permissions:

- **can_add_students:** Teacher can add new students
- **can_edit_students:** Teacher can edit student info
- **can_delete_students:** Teacher can archive students

By default, teachers have NO permissions (principal must enable them).

---

## 📱 **Parent Access:**

1. Teacher/Principal creates student
2. System generates invite code (e.g., `ATHR-1234`)
3. Share invite link with parent via WhatsApp
4. Parent registers with phone number
5. Parent gets OTP code via SMS
6. Parent logs in and sees their child's data

---

## 💰 **Costs:**

| Item | Cost | Notes |
|------|------|-------|
| **Supabase Free Tier** | $0/month | Good for testing, up to 500MB database |
| **Supabase Pro** | $25/month (~94 SAR) | Recommended for production |
| **SMS for Parent OTP** | ~$0.01/SMS | Only when parents log in |
| **Cloudflare Pages** | Free | Hosting |

**Total for production:** ~94 SAR/month + SMS costs

---

## 🐛 **Troubleshooting:**

### **"Supabase not configured" error:**
- Make sure you updated `supabase-config.js` with your credentials
- Set `USE_MOCK_MODE = false`

### **"Login failed" error:**
- Check email/password are correct
- Make sure you created the principal account in Step 3
- Check browser console for detailed error

### **"Permission denied" error:**
- Make sure Row Level Security policies are created (they're in the schema)
- Check user role is correct in `users` table

### **Can't add teachers:**
- Only principal can add teachers
- Make sure you're logged in as principal (not teacher)

---

## 📞 **Need Help?**

Check the browser console (F12) for detailed error messages.

Most common issues:
1. Forgot to run the SQL schema
2. Didn't create principal account
3. Wrong Supabase credentials in config file
4. Mock mode still enabled (`USE_MOCK_MODE = true`)

---

## 🎉 **You're Ready!**

The app is now connected to real Supabase backend with:
- ✅ Real authentication
- ✅ Real database
- ✅ Real file storage
- ✅ Real-time updates
- ✅ Secure permissions

Start by logging in as principal and adding your first teacher!
