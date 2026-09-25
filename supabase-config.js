/* =========================================================
   Supabase Configuration
   ========================================================= */

// ⚠️ These will be replaced by Render build script with environment variables
// Do NOT hardcode keys here - add them as Environment Variables in Render dashboard

const SUPABASE_URL = 'PLACEHOLDER_URL';
const SUPABASE_ANON_KEY = 'PLACEHOLDER_ANON_KEY';
const SUPABASE_SERVICE_KEY = 'PLACEHOLDER_SERVICE_KEY';

// Initialize Supabase clients
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabaseAdmin = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

console.log('✅ Supabase clients initialized');
