type TaskStatus = "pending" | "processing" | "done";

export type Task = {
  id: string;
  type: string;
  status: TaskStatus;
  payload?: any;
  createdAt: number;
  finishedAt?: number;
};

const queue: Task[] = [];
let isProcessing = false;

export function enqueueTask(task: Task) {
  queue.push(task);
}

export function getNextTask() {
  return queue.find((t) => t.status === "pending");
}

export function startProcessing(taskId: string) {
  const task = queue.find((t) => t.id === taskId);
  if (task) {
    task.status = "processing";
    isProcessing = true;
  }
}

export function finishTask(taskId: string) {
  const task = queue.find((t) => t.id === taskId);
  if (task) {
    task.status = "done";
    task.finishedAt = Date.now();
    isProcessing = false;
  }
}

export function getQueueSnapshot() {
  return {
    total: queue.length,
    pending: queue.filter((t) => t.status === "pending").length,
    processing: queue.filter((t) => t.status === "processing").length,
    done: queue.filter((t) => t.status === "done").length,
    lastTasks: queue.slice(-5).reverse(),
  };
}
