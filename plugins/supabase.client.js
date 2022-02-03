import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTY2MTUxLCJleHAiOjE5NTg1NDIxNTF9.XMflz4POQ9tq8LzE401PBibycp5BXwKxxhx-coCNZyA'
export default ({ app }, inject) => {
  const supabaseUrl = 'https://bkvxongofgxinytaamao.supabase.co'
  const supabaseKey = SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  inject('supabase', supabase)
}
