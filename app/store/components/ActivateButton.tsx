"use client";

type Props = {
  active?: boolean;
  locked?: boolean;
  onClick: () => void;
};

export default function ActivateButton({
  active,
  locked,
  onClick,
}: Props) {
  if (locked) {
    return (
      <a
        href="/checkout"
        className="mt-4 block text-center px-4 py-2 rounded-lg text-sm
                   bg-yellow-600 hover:bg-yellow-700 transition"
      >
        Fazer Upgrade
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          active
            ? "bg-green-600 hover:bg-green-700"
            : "bg-cyan-600 hover:bg-cyan-700"
        }`}
    >
      {active ? "Desativar" : "Ativar"}
    </button>
  );
}
