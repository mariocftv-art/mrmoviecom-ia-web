export class Logger {
  private logs: string[] = []

  log(message: string) {
    this.logs.push(`[LOG] ${message}`)
  }

  error(message: string) {
    this.logs.push(`[ERROR] ${message}`)
  }

  getLogs(): string[] {
    return [...this.logs]
  }

  clear() {
    this.logs = []
  }
}
