import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = 'https://eqhhamjuqackrhtjtjgm.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxaGhhbWp1cWFja3JodGp0amdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NDQ5ODAsImV4cCI6MjA2MzMyMDk4MH0.mRufM4dOC1a_OJWzfvpjcW3arrlr3eoy7GczG13bcOI';

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase URL and Anon Key must be defined in environment variables.');
    }
    
    export const supabase = createClient(supabaseUrl, supabaseAnonKey);