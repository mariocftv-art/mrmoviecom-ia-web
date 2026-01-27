import { Brain } from "./brain";
import { Memory } from "./memory";
import { Learner } from "./learner";

export class IAV2 {
  private brain: Brain;
  private memory: Memory;
  private learner: Learner;

  constructor() {
    this.brain = new Brain();
    this.memory = new Memory();
    this.learner = new Learner();
  }

  async run(goal: string): Promise<string> {
    this.brain.set("thinking");

    const known = this.memory.recall(goal);
    if (known) {
      this.brain.set("acting");
      return known;
    }

    this.brain.set("acting");
    const { webSearch } = await import("./tools/webSearch");
    const result = await webSearch(goal);

    this.brain.set("learning");
    this.memory.store(goal, result);
    this.learner.learn(goal, result);

    this.brain.set("idle");
    return result;
  }
}
