import { AGENDA } from "@/lib/content";

export const metadata = { title: "Agenda" };

type Section = { mes: string; eventos: string[] };

function AgendaList({ title, items }: { title: string; items: Section[] }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl text-center pb-3 border-b border-ink/20">{title}</h2>
      <div className="space-y-8">
        {items.map((s) => (
          <div key={s.mes} className="grid md:grid-cols-[120px_1fr] gap-4">
            <h3 className="text-accent font-medium tracking-widest text-sm">{s.mes}</h3>
            <ul className="space-y-2 text-ink/85">
              {s.eventos.map((e, i) => (
                <li key={i} className="leading-relaxed">{e}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AgendaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="text-center">
        <h1 className="text-4xl">AGENDA</h1>
      </header>
      <AgendaList title="FUNCIONES" items={AGENDA.funciones} />
      <AgendaList title="ENTRENAMIENTOS" items={AGENDA.entrenamientos} />
    </div>
  );
}
