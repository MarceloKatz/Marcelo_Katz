"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export type AgendaSection = {
  mes: string;
  eventos: string[];
};

export type AgendaData = {
  funciones: AgendaSection[];
  entrenamientos: AgendaSection[];
};

interface AgendaManagerProps {
  initialData: AgendaData;
  isAdminPage?: boolean;
}

function renderEventText(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#9B88ED] hover:underline font-medium ml-1"
      >
        {match[1]}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function AgendaManager({ initialData, isAdminPage = false }: AgendaManagerProps) {
  const [data, setData] = useState<AgendaData>(initialData);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    fetch("/api/agenda")
      .then((res) => res.json())
      .then((json) => {
        if (json.funciones && json.entrenamientos) {
          setData(json);
        }
      })
      .catch(() => {});
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setAuthError("Por favor ingrese la contraseña.");
      return;
    }
    setIsAuthenticated(true);
    setAuthError(null);
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage(null);
    try {
      const res = await fetch("/api/agenda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          funciones: data.funciones,
          entrenamientos: data.entrenamientos,
          password: password,
        }),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSaveMessage({ text: "¡Cambios guardados con éxito!", type: "success" });
        setTimeout(() => setSaveMessage(null), 4000);
      } else {
        setSaveMessage({ text: result.error || "Error al guardar los cambios.", type: "error" });
      }
    } catch {
      setSaveMessage({ text: "Error de conexión al guardar.", type: "error" });
    } finally {
      setIsSaving(false);
    }
  };

  // Handlers for Funciones
  const handleUpdateFuncionesMes = (index: number, newMes: string) => {
    const updated = [...data.funciones];
    updated[index].mes = newMes.toUpperCase();
    setData({ ...data, funciones: updated });
  };

  const handleUpdateFuncionesEvento = (secIdx: number, evIdx: number, value: string) => {
    const updated = [...data.funciones];
    updated[secIdx].eventos[evIdx] = value;
    setData({ ...data, funciones: updated });
  };

  const handleAddFuncionesEvento = (secIdx: number) => {
    const updated = [...data.funciones];
    updated[secIdx].eventos.push("Nueva fecha o función...");
    setData({ ...data, funciones: updated });
  };

  const handleDeleteFuncionesEvento = (secIdx: number, evIdx: number) => {
    const updated = [...data.funciones];
    updated[secIdx].eventos.splice(evIdx, 1);
    setData({ ...data, funciones: updated });
  };

  const handleAddFuncionesMes = () => {
    const updated = [
      ...data.funciones,
      { mes: "NUEVO MES", eventos: ["Sábado 1 a las 19h — Nombre del Espectáculo"] },
    ];
    setData({ ...data, funciones: updated });
  };

  const handleDeleteFuncionesMes = (index: number) => {
    const updated = [...data.funciones];
    updated.splice(index, 1);
    setData({ ...data, funciones: updated });
  };

  // Handlers for Entrenamientos
  const handleUpdateEntrenamientosMes = (index: number, newMes: string) => {
    const updated = [...data.entrenamientos];
    updated[index].mes = newMes.toUpperCase();
    setData({ ...data, entrenamientos: updated });
  };

  const handleUpdateEntrenamientosEvento = (secIdx: number, evIdx: number, value: string) => {
    const updated = [...data.entrenamientos];
    updated[secIdx].eventos[evIdx] = value;
    setData({ ...data, entrenamientos: updated });
  };

  const handleAddEntrenamientosEvento = (secIdx: number) => {
    const updated = [...data.entrenamientos];
    updated[secIdx].eventos.push("Nuevo entrenamiento...");
    setData({ ...data, entrenamientos: updated });
  };

  const handleDeleteEntrenamientosEvento = (secIdx: number, evIdx: number) => {
    const updated = [...data.entrenamientos];
    updated[secIdx].eventos.splice(evIdx, 1);
    setData({ ...data, entrenamientos: updated });
  };

  const handleAddEntrenamientosMes = () => {
    const updated = [
      ...data.entrenamientos,
      { mes: "NUEVO MES", eventos: ["Viernes 1 al domingo 3 — Curso de Clown"] },
    ];
    setData({ ...data, entrenamientos: updated });
  };

  const handleDeleteEntrenamientosMes = (index: number) => {
    const updated = [...data.entrenamientos];
    updated.splice(index, 1);
    setData({ ...data, entrenamientos: updated });
  };

  // VISTA PÚBLICA (Para visitantes comunes en /agenda)
  if (!isAdminPage) {
    return (
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          {/* COLUMNA 1: FUNCIONES */}
          <section className="space-y-8">
            <h2 className="text-center font-serif text-base sm:text-lg font-bold tracking-widest uppercase text-[#1e293b] pb-2 border-b border-gray-200">
              FUNCIONES
            </h2>
            <div className="space-y-6">
              {data.funciones.map((s, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="w-24 sm:w-28 flex-shrink-0 text-[#9B88ED] font-bold tracking-wider text-xs uppercase pt-0.5 select-none">
                    {s.mes}
                  </span>
                  <ul className="flex-1 space-y-2 text-[#475569] text-xs sm:text-sm leading-relaxed">
                    {s.eventos.map((e, i) => (
                      <li key={i}>
                        {renderEventText(e)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* COLUMNA 2: ENTRENAMIENTOS */}
          <section className="space-y-8">
            <h2 className="text-center font-serif text-base sm:text-lg font-bold tracking-widest uppercase text-[#1e293b] pb-2 border-b border-gray-200">
              ENTRENAMIENTOS
            </h2>
            <div className="space-y-6">
              {data.entrenamientos.map((s, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="w-24 sm:w-28 flex-shrink-0 text-[#9B88ED] font-bold tracking-wider text-xs uppercase pt-0.5 select-none">
                    {s.mes}
                  </span>
                  <ul className="flex-1 space-y-2 text-[#475569] text-xs sm:text-sm leading-relaxed">
                    {s.eventos.map((e, i) => (
                      <li key={i}>
                        {renderEventText(e)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Enlace sutil al panel de administración en el pie */}
        <div className="text-center pt-12 border-t border-gray-100">
          <Link
            href="/admin/agenda"
            className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors inline-flex items-center gap-1"
          >
            🔒 Acceso Administrador
          </Link>
        </div>
      </div>
    );
  }

  // PANTALLA DE LOGUEO (En la ruta oculta /admin/agenda si no se ha autenticado)
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-2xl border border-gray-200 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <span className="text-3xl">🔒</span>
          <h2 className="text-xl font-bold text-gray-900">Panel de Administración de Agenda</h2>
          <p className="text-xs text-gray-500">Ingrese la clave de acceso para editar el sitio</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full text-sm border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#9B88ED]"
              autoFocus
            />
          </div>

          {authError && (
            <p className="text-xs text-red-600 font-medium text-center">{authError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#9B88ED] hover:bg-[#8570e8] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg transition-all shadow-md"
          >
            Ingresar al Editor
          </button>
        </form>

        <div className="text-center pt-2">
          <Link href="/agenda" className="text-xs text-gray-400 hover:text-gray-600">
            ← Volver a la Agenda Pública
          </Link>
        </div>
      </div>
    );
  }

  // MODO EDITOR ADMINISTRADOR (Una vez autenticado)
  return (
    <div className="space-y-10">
      {/* BARRA SUPERIOR DE ADMINISTRADOR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-900 text-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
            Panel Administrador — Agenda
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-[#9B88ED] hover:bg-[#8570e8] text-white text-xs font-bold tracking-wider px-5 py-2.5 rounded-lg transition-all shadow-md flex items-center gap-2"
          >
            {isSaving ? "Guardando..." : "💾 Guardar Cambios"}
          </button>

          <Link
            href="/agenda"
            target="_blank"
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all border border-white/20"
          >
            ↗ Ver Sitio Público
          </Link>
        </div>
      </div>

      {saveMessage && (
        <div
          className={`p-4 rounded-xl text-center text-sm font-medium border animate-in fade-in ${
            saveMessage.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-red-50 text-red-800 border-red-200"
          }`}
        >
          {saveMessage.text}
        </div>
      )}

      {/* FORMULARIO COMPLETO DE EDICIÓN */}
      <div className="space-y-12 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
        {/* EDICIÓN DE FUNCIONES */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
              Edición de Funciones
            </h2>
            <button
              onClick={handleAddFuncionesMes}
              className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-3.5 py-2 rounded-md transition-all"
            >
              + Agregar Mes
            </button>
          </div>

          <div className="space-y-8">
            {data.funciones.map((sec, secIdx) => (
              <div key={secIdx} className="bg-gray-50 p-5 rounded-xl border border-gray-200 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <input
                    type="text"
                    value={sec.mes}
                    onChange={(e) => handleUpdateFuncionesMes(secIdx, e.target.value)}
                    placeholder="MES (ej: OCTUBRE)"
                    className="font-bold text-sm text-[#9B88ED] tracking-widest bg-white border border-gray-300 rounded px-3 py-1.5 w-48 uppercase"
                  />
                  <button
                    onClick={() => handleDeleteFuncionesMes(secIdx)}
                    className="text-xs text-red-600 hover:text-red-800 font-semibold"
                  >
                    Eliminar Mes
                  </button>
                </div>

                <div className="space-y-3 pl-2">
                  {sec.eventos.map((ev, evIdx) => (
                    <div key={evIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={ev}
                        onChange={(e) => handleUpdateFuncionesEvento(secIdx, evIdx, e.target.value)}
                        className="flex-1 text-sm text-gray-800 bg-white border border-gray-300 rounded px-3 py-2"
                      />
                      <button
                        onClick={() => handleDeleteFuncionesEvento(secIdx, evIdx)}
                        className="text-xs text-red-500 hover:text-red-700 px-2 py-1"
                        title="Eliminar evento"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => handleAddFuncionesEvento(secIdx)}
                    className="text-xs font-semibold text-[#9B88ED] hover:underline pt-1 block"
                  >
                    + Agregar fecha / función en {sec.mes}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDICIÓN DE ENTRENAMIENTOS */}
        <section className="space-y-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
              Edición de Entrenamientos
            </h2>
            <button
              onClick={handleAddEntrenamientosMes}
              className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-3.5 py-2 rounded-md transition-all"
            >
              + Agregar Mes
            </button>
          </div>

          <div className="space-y-8">
            {data.entrenamientos.map((sec, secIdx) => (
              <div key={secIdx} className="bg-gray-50 p-5 rounded-xl border border-gray-200 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <input
                    type="text"
                    value={sec.mes}
                    onChange={(e) => handleUpdateEntrenamientosMes(secIdx, e.target.value)}
                    placeholder="MES (ej: NOVIEMBRE)"
                    className="font-bold text-sm text-[#9B88ED] tracking-widest bg-white border border-gray-300 rounded px-3 py-1.5 w-48 uppercase"
                  />
                  <button
                    onClick={() => handleDeleteEntrenamientosMes(secIdx)}
                    className="text-xs text-red-600 hover:text-red-800 font-semibold"
                  >
                    Eliminar Mes
                  </button>
                </div>

                <div className="space-y-3 pl-2">
                  {sec.eventos.map((ev, evIdx) => (
                    <div key={evIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={ev}
                        onChange={(e) => handleUpdateEntrenamientosEvento(secIdx, evIdx, e.target.value)}
                        className="flex-1 text-sm text-gray-800 bg-white border border-gray-300 rounded px-3 py-2"
                      />
                      <button
                        onClick={() => handleDeleteEntrenamientosEvento(secIdx, evIdx)}
                        className="text-xs text-red-500 hover:text-red-700 px-2 py-1"
                        title="Eliminar evento"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => handleAddEntrenamientosEvento(secIdx)}
                    className="text-xs font-semibold text-[#9B88ED] hover:underline pt-1 block"
                  >
                    + Agregar entrenamiento en {sec.mes}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-4 flex justify-end">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-[#9B88ED] hover:bg-[#8570e8] text-white text-sm font-bold tracking-wider px-8 py-3 rounded-xl transition-all shadow-lg"
          >
            {isSaving ? "Guardando..." : "💾 Guardar Todos los Cambios"}
          </button>
        </div>
      </div>
    </div>
  );
}
