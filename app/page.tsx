import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-black text-white">
      <div className="max-w-2xl w-full p-6">
        <h1 className="text-3xl font-bold">
          O que você quer fazer agora?
        </h1>

        <p className="mt-3 text-zinc-400">
          Escolha como deseja continuar seu projeto na MRMoviecomIA Platform.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <button className="w-full rounded-lg bg-zinc-900 p-4 text-left hover:bg-zinc-800">
            Continuar um projeto de outra plataforma
          </button>

          <button className="w-full rounded-lg bg-zinc-900 p-4 text-left hover:bg-zinc-800">
            Iniciar um novo projeto do zero
          </button>

          <button className="w-full rounded-lg bg-zinc-900 p-4 text-left hover:bg-zinc-800">
            Explorar módulos disponíveis
          </button>
        </div>

        <p className="mt-10 text-xs text-zinc-500">
          Seu projeto é sempre seu. Nada é feito sem sua autorização.
        </p>
      </div>
    </main>
  )
}
