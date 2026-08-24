import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "agenda.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "katz2026";

function getAgendaData() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error("Error reading agenda.json:", error);
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
    
    // Guardar en archivo JSON local
    fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2), "utf8");
    
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    console.error("Error writing agenda.json:", error);
    return NextResponse.json({ error: "Error interno al guardar" }, { status: 500 });
  }
}

