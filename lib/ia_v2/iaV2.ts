import { webSearch } from "./tools/webSearch";
import { Memory } from "./memory";
import { Learner } from "./learner";

export type IAState = "idle" | "thinking" | "acting" | "learning";

export class IAV2 {
  state: IAState = "idle";
  memory: Memory;
  learner: Learner;

  constructor() {
    this.memory = new Memory();
    this.learner = new Learner();
  }

  async run(goal: string): Promise<string> {
    this.state = "thinking";

    const known = this.memory.recall(goal);
    if (known) {
      this.state = "acting";
      return known;
    }

    this.state = "acting";
    const result = await webSearch(goal);

    this.state = "learning";
    this.memory.store(goal, result);
    this.learner.learn(goal, result);

    this.state = "idle";
    return result;
  }
}
