import { createClient } from '@/lib/supabase/supabaseClient'
import { getCreditsOrCreate } from '@/lib/supabase/credits'

export default async function HeaderCredits() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const credits = await getCreditsOrCreate(supabase, user.id)

  if (!credits) return null

  return (
    <div>
      Créditos: {credits.remaining}
    </div>
  )
}
