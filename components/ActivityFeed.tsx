"use client";

type Task = {
  id: string;
  type: string;
  status: "pending" | "processing" | "done";
  createdAt: number;
};

type ActivityFeedProps = {
  tasks: Task[];
};

export default function ActivityFeed({ tasks }: ActivityFeedProps) {
  if (!tasks || tasks.length === 0) {
    return <div style={{ marginTop: 24, opacity: 0.6 }}>Nenhuma atividade recente</div>;
  }

  return (
    <div style={{ marginTop: 24 }}>
      <h3>Atividade recente</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.type}</strong> — {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
