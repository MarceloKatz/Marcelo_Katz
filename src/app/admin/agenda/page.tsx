import fs from "fs";
import path from "path";
import AgendaManager, { AgendaData } from "@/components/AgendaManager";

export const metadata = { title: "Panel Administrador — Agenda" };

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

export default function HiddenAgendaAdminPage() {
  const initialData = getInitialAgendaData();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <header className="text-center space-y-2">
        <span className="text-xs font-bold tracking-[0.2em] text-[#7B61FF] uppercase">
          Área Privada de Gestión
        </span>
        <h1 className="text-3xl font-bold tracking-wider text-gray-900 uppercase">
          ADMINISTRADOR DE AGENDA
        </h1>
      </header>

      {/* COMPONENTE INTERACTIVO EN MODO ADMINISTRADOR PROTEGIDO */}
      <AgendaManager initialData={initialData} isAdminPage={true} />
    </div>
  );
}
