import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://qeeundgfwrhtssanilnc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZXVuZGdmd3JodHNzYW5pbG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MzM5NTAsImV4cCI6MTk5OTQwOTk1MH0.4jjg4-cHgeBhm9l-KSz1H-PaOc8tYftKnketmmsm1Sg'
)
