import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

const dataFilePath = path.join(process.cwd(), "src", "data", "agenda.json");
const tmpFilePath = path.join(os.tmpdir(), "agenda.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "katz2026";

function getAgendaData() {
  try {
    if (fs.existsSync(tmpFilePath)) {
      const fileData = fs.readFileSync(tmpFilePath, "utf8");
      return JSON.parse(fileData);
    }
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error("Error reading agenda data:", error);
  }
  return { funciones: [], entrenamientos: [] };
}

export async function GET() {
  const data = getAgendaData();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
    }

    const { funciones, entrenamientos, password } = body;
    
    // Verificación de contraseña de administrador
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
    }

    if (!Array.isArray(funciones) || !Array.isArray(entrenamientos)) {
      return NextResponse.json({ error: "Estructura inválida" }, { status: 400 });
    }

    const newData = { funciones, entrenamientos };
    
    // Intentar guardar en archivo local; si es entorno de solo lectura (Vercel Serverless), guardar en /tmp
    let savedLocally = false;
    try {
      fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2), "utf8");
      savedLocally = true;
    } catch {
      // Entorno de solo lectura en Vercel
    }

    try {
      fs.writeFileSync(tmpFilePath, JSON.stringify(newData, null, 2), "utf8");
    } catch (tmpErr) {
      if (!savedLocally) {
        console.error("Error writing to tmp agenda:", tmpErr);
        return NextResponse.json({ error: "Error al guardar en servidor" }, { status: 500 });
      }
    }
    
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    console.error("Error in POST /api/agenda:", error);
    return NextResponse.json({ error: "Error interno al guardar" }, { status: 500 });
  }
}
