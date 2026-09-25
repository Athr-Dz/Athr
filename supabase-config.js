/* =========================================================
   Supabase Configuration
   ========================================================= */

// ⚠️ IMPORTANT: Replace these placeholders with your actual Supabase credentials
// Get them from: https://supabase.com/dashboard/project/YOUR_PROJECT_ID/settings/api

const SUPABASE_URL = 'YOUR_SUPABASE_URL';  // Example: https://rnsmafkkpenvyxyicnlq.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY'; // Your anon/public key
const SUPABASE_SERVICE_KEY = 'YOUR_SERVICE_KEY'; // Your service_role key (keep secret!)

// Initialize Supabase clients
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabaseAdmin = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

console.log('✅ Supabase clients initialized');
