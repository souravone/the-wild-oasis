import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dqfgblnmxkcbllksjkmz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxZmdibG5teGtjYmxsa3Nqa216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxMjk3NDgsImV4cCI6MjAzNDcwNTc0OH0.RIbW1K8qV9TEoAiHsZgW8phXnul31keOSijU2c0MDbw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
