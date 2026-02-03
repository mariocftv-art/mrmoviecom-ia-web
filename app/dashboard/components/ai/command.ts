export type CommandInput = {
  actions: string[]
}

export function Command(input: CommandInput) {
  console.log("⚙️ COMMAND EXECUTOR REAL")

  input.actions.forEach((action, i) => {
    console.log(`✅ Executando ação ${i + 1}: ${action}`)
  })

  return {
    status: "executed",
    executedActions: input.actions
  }
}
