import fs from "fs";
import path from "path";
import AgendaManager, { AgendaData } from "@/components/AgendaManager";

export const metadata = { title: "Agenda de Funciones y Entrenamientos" };

function getInitialAgendaData(): AgendaData {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "agenda.json");
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf8");
      return JSON.parse(raw);
    }
  } catch (error) {
    console.error("Error reading agenda data server side:", error);
  }
  return { funciones: [], entrenamientos: [] };
}

export default function AgendaPage() {
  const initialData = getInitialAgendaData();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <header className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-wider text-[#1e293b] uppercase leading-tight">
          AGENDA DE FUNCIONES Y ENTRENAMIENTOS
        </h1>
      </header>

      {/* COMPONENTE INTERACTIVO DE AGENDA Y EDICIÓN EN VIVO */}
      <AgendaManager initialData={initialData} />
    </div>
  );
}
