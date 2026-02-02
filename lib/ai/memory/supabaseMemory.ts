// lib/ai/memory/supabaseMemory.ts
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function saveTask(task: {
  id: string;
  type: string;
  payload: any;
  status: "pending" | "processing" | "done";
}) {
  await supabase.from("ai_tasks").upsert({
    id: task.id,
    type: task.type,
    payload: task.payload,
    status: task.status,
  });
}

export async function saveOutput(taskId: string, output: string) {
  await supabase.from("ai_outputs").insert({
    task_id: taskId,
    output,
  });
}
