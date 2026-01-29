export default function CreatePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Criar Projeto
      </h1>

      <p className="text-white/60">
        Inicie um novo projeto com IA.
      </p>

      <form className="space-y-4 max-w-xl">
        <div>
          <label className="block mb-1 text-sm">
            Nome do Projeto
          </label>
          <input
            placeholder="Ex: Vídeo viral TikTok"
            className="w-full rounded-md bg-zinc-900 border border-white/10 px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">
            Objetivo
          </label>
          <textarea
            placeholder="Descreva o que a IA deve fazer"
            className="w-full rounded-md bg-zinc-900 border border-white/10 px-3 py-2 h-28"
          />
        </div>

        <button
          type="button"
          className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90"
        >
          Criar Projeto
        </button>
      </form>
    </div>
  );
}
