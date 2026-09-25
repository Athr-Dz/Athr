#!/bin/bash
# Build script for Render - injects environment variables into supabase-config.js

echo "🔧 Injecting Supabase credentials from environment variables..."

# Replace placeholders with actual environment variables
sed -i "s|const SUPABASE_URL = '.*';|const SUPABASE_URL = '${SUPABASE_URL}';|g" supabase-config.js
sed -i "s|const SUPABASE_ANON_KEY = '.*';|const SUPABASE_ANON_KEY = '${SUPABASE_ANON_KEY}';|g" supabase-config.js
sed -i "s|const SUPABASE_SERVICE_KEY = '.*';|const SUPABASE_SERVICE_KEY = '${SUPABASE_SERVICE_KEY}';|g" supabase-config.js

echo "✅ Build complete! Credentials injected."
