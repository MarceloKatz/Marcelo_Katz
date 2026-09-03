import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    const recipient = process.env.CONTACT_EMAIL_TO || "marcelokatz@marcelokatz.com.ar";

    // Enviar directamente a mkatz6951@gmail.com vía FormSubmit service
    try {
      await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Web Marcelo Katz] Consulta de: ${name} (${subject || "General"})`,
          Nombre: name,
          Email: email,
          Asunto: subject || "Consulta desde el sitio web",
          Mensaje: message,
          _replyto: email,
          _template: "table",
        }),
      });
    } catch (err) {
      console.error("Error al enviar email via FormSubmit:", err);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
