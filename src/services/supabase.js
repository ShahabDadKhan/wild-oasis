import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fymoetdlqhzjmpvjcdqe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5bW9ldGRscWh6am1wdmpjZHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwNjE2ODMsImV4cCI6MjA1MDYzNzY4M30.eoRR-b8AZeXTtULJpXdJHP_LZQYHPIPPN6leQMKmUm8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
