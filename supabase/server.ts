import { createClient } from "@supabase/supabase-js";

export function getSupabaseServer() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // ⚠️ IMPORTANTE: NÃO lançar erro no build
  if (!supabaseUrl || !serviceRoleKey) {
    console.warn("Supabase envs não disponíveis no build");
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
  });
}
