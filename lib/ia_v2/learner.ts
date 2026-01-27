export class Learner {
  learn(goal: string, result: string) {
    console.log("[IA V2][LEARN]", {
      goal,
      size: result.length,
      timestamp: Date.now(),
    });
  }
}
