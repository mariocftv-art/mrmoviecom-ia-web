type TaskStatus = "pending" | "processing" | "done";

type Task = {
  id: string;
  type: string;
  status: TaskStatus;
};

type ActivityFeedProps = {
  tasks: Task[];
};

export default function ActivityFeed({ tasks }: ActivityFeedProps) {
  if (!tasks || tasks.length === 0) {
    return (
      <div style={{ opacity: 0.6, fontSize: 14 }}>
        Nenhuma atividade recente
      </div>
    );
  }

  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Atividade recente</h3>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              fontSize: 14,
            }}
          >
            <StatusDot status={task.status} />

            <div>
              <strong>{task.type}</strong>
              <div style={{ opacity: 0.7 }}>
                {labelStatus(task.status)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ===== Helpers ===== */

function StatusDot({ status }: { status: TaskStatus }) {
  const color =
    status === "done"
      ? "#00ff99"
      : status === "processing"
      ? "#00aaff"
      : "#ffaa00";

  return (
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: `0 0 8px ${color}`,
        flexShrink: 0,
      }}
    />
  );
}

function labelStatus(status: TaskStatus) {
  switch (status) {
    case "pending":
      return "Aguardando";
    case "processing":
      return "Processando";
    case "done":
      return "Concluído";
  }
}
