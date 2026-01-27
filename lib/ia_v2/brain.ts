export type IAState =
  | "idle"
  | "thinking"
  | "acting"
  | "learning";

export class Brain {
  state: IAState = "idle";

  set(state: IAState) {
    this.state = state;
  }

  get(): IAState {
    return this.state;
  }
}
