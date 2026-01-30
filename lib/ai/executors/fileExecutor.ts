import fs from "fs";
import path from "path";
import { AIAction } from "../types";

export async function executeActions(actions: AIAction[]) {
  for (const action of actions) {
    if (action.type === "create_file") {
      const fullPath = path.join(process.cwd(), action.path);
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, action.content, "utf8");
    }
  }
}
