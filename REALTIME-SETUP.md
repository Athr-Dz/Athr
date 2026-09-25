# 🔴 Realtime Setup Guide

## What is Realtime?
Realtime allows messages to appear **instantly** without refreshing the page. When a teacher sends a message, the parent sees it immediately (and vice versa).

## Is it automatic?
**NO** - You need to enable it in Supabase. But it's very easy!

## Setup Steps

### Option 1: Run FRESH-START.sql (Recommended)
If you haven't set up your database yet, just run `FRESH-START.sql` - it now includes realtime setup automatically!

1. Go to Supabase Dashboard → SQL Editor
2. Paste the entire `FRESH-START.sql` file
3. **Change the email on line 285** to your email
4. Click "Run"
5. Done! ✅

### Option 2: Enable Realtime Only (If database already exists)
If you already have data and just want to enable realtime:

1. Go to Supabase Dashboard → SQL Editor
2. Run this SQL:

```sql
-- Enable replica identity for messages table
ALTER TABLE messages REPLICA IDENTITY FULL;

-- Add messages to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE messages;
```

3. Done! ✅

## How to Test

1. Open two browser windows
2. Login as **teacher** in one window
3. Login as **student/parent** in another window
4. Go to messages page in both
5. Send a message from teacher
6. **It should appear instantly in the student window!** 🎉

## Troubleshooting

### Messages not appearing instantly?
1. Check browser console (F12) - look for:
   - `📡 Realtime status: SUBSCRIBED` ✅
   - `📨 New message received via realtime` ✅

2. If you see errors, check:
   - Did you run the realtime SQL commands?
   - Is RLS disabled on messages table?
   - Are you logged in with valid credentials?

### Still not working?
1. Go to Supabase Dashboard → Database → Replication
2. Make sure `messages` table is listed
3. If not, run the SQL commands again

## What's Enabled?
- ✅ Messages (instant updates)
- ❌ Other tables (not needed for now)

You can enable realtime for other tables later if needed (activities, session_logs, etc.)

## Technical Details
- Uses Supabase Realtime (WebSocket connection)
- Listens for INSERT events on messages table
- Automatically updates UI when new message arrives
- No polling, no refresh needed
- Works across multiple devices/browsers

---

**Version 60** - Realtime enabled for messages
