import { canUseCredits, consumeCredits, getCredits } from './credits'

export async function checkCredits(cost: number) {
  return canUseCredits(cost)
}

export async function spendCredits(cost: number, reason: string) {
  return consumeCredits(cost, reason)
}

export async function fetchCredits() {
  return getCredits()
}
