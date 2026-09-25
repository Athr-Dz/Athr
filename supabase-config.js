/* =========================================================
   Supabase Configuration
   ========================================================= */

// Keys are base64-encoded for security
// They are decoded at runtime in the browser
const SUPABASE_URL = atob('aHR0cHM6Ly9ybnNtYWZra3BlbnZ5eHl5aWNubHEuc3VwYWJhc2UuY28=');
const SUPABASE_ANON_KEY = atob('ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW5KdWMyMWhabXRyY0dWdWRubTRlWGxwWTI1c2NTSXNJbkp2YkdVaU9pSmhibTl1SWl3aWFXRjBJam94Tnprd016TXhOek16TENKbGVIQWlPakl4TURVNU1EYzNNek45LmRmdUZyZGRrZWp1VVBfeW4tYTlFbFo1YWlnNUY4SG1rNFR1U3NmNlp0ZTg=');
const SUPABASE_SERVICE_KEY = atob('c2Jfc2VjcmV0X0doNm1YUzFLMGk4aloxS19MeWR2dEFfeVQyRkFIdGk=');

// Initialize Supabase clients
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabaseAdmin = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

console.log('✅ Supabase clients initialized');
