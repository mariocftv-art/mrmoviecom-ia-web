type Props = {
  title: string;
  value: string;
  highlight?: boolean;
};

export default function StatCard({ title, value, highlight }: Props) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? "border-green-500 bg-green-500/10 text-green-400"
          : "border-zinc-800 bg-zinc-900 text-white"
      }`}
    >
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  );
}
