/* =========================================================
   Supabase Configuration
   ========================================================= */

// Supabase credentials
// Note: SUPABASE_ANON_KEY is safe to expose in frontend code
const SUPABASE_URL = 'https://rnsmafkkpenvyxyicnlq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuc21hZmtrcGVudnl4eWljbmxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzMzE3MzMsImV4cCI6MjEwNTkwNzczM30.dfuFrddkejuUP_yn-a9ElZ5aig5F8Hmk4TuSsf6Zte8';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuc21hZmtrcGVudnl4eWljbmxxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MDMzMTczMywiZXhwIjoyMTA1OTA3NzMzfQ.aOe7QxGOhj50l3SD-v2WACEQfVn38fsNjc_j3z8pftM';

// Initialize Supabase clients with options to handle storage issues
const supabaseOptions = {
  auth: {
    storage: window.localStorage || {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {}
    },
    storageKey: 'athr-auth',
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
};

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, supabaseOptions);
window.supabaseAdmin = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, supabaseOptions);

console.log('✅ Supabase clients initialized');
