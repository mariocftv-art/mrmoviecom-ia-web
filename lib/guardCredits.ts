import { getCredits } from './credits'

export async function guardCredits(cost = 1) {
  const credits = await getCredits()

  if (!credits) {
    throw new Error('Créditos não encontrados')
  }

  if (credits.remaining < cost) {
    throw new Error('Créditos insuficientes')
  }

  return true
}
