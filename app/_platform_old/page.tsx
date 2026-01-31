import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-400 mb-2">
        MRMoviecom IA Platform
      </h1>

      <p className="text-white/60 mb-10">
        Dashboard principal de controle da IA
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-sm text-cyan-300">
              Usuários Totais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-cyan-400">2.5M+</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-sm text-cyan-300">
              Receita Mensal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-cyan-400">US$ 680K</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-sm text-cyan-300">
              Tarefas Ativas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-cyan-400">325</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-sm text-cyan-300">
              Visualizações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-cyan-400">48.9K</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
