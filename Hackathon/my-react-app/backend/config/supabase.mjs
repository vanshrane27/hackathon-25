import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dobysvotelnvydqxojex.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvYnlzdm90ZWxudnlkcXhvamV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTc4MjcsImV4cCI6MjA1MzM5MzgyN30.XKutltOjM3SUauRtoXqnIwqfec9hkIa6zKd0r_0cNhI';

console.log('supabaseUrl:', supabaseUrl);
console.log('supabaseKey:', supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error('supabaseUrl and supabaseKey are required.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };