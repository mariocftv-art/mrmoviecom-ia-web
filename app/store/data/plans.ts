export type Plan = "starter" | "pro" | "ultra";

export const plans = {
  starter: {
    name: "Starter",
    modules: ["vision"],
  },
  pro: {
    name: "Pro",
    modules: ["vision", "command"],
  },
  ultra: {
    name: "Ultra",
    modules: ["vision", "command", "viral"],
  },
};
