import { createServerSupabase } from "@/lib/supabase/server"

export async function getUserCredits() {
  const supabase = await createServerSupabase()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    return null
  }

  const { data, error } = await supabase
    .from("user_credits")
    .select("total, used, remaining")
    .eq("user_id", user.id)
    .single()

  if (error) {
    console.error("Erro ao buscar créditos:", error)
    return null
  }

  return data
}
