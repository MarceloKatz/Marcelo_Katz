import { NextRequest, NextResponse } from "next/server";

/**
 * Endpoint de contacto.
 *
 * TODO: conectar a un proveedor de email (recomiendo Resend).
 *   1. npm i resend
 *   2. RESEND_API_KEY en .env.local
 *   3. Reemplazar el bloque de abajo por:
 *
 *      import { Resend } from "resend";
 *      const resend = new Resend(process.env.RESEND_API_KEY);
 *      await resend.emails.send({
 *        from: "web@marcelokatz.com.ar",
 *        to: process.env.CONTACT_EMAIL_TO!,
 *        subject: `[Web] ${subject || "Mensaje de contacto"}`,
 *        replyTo: email,
 *        text: `De: ${name} <${email}>\n\n${message}`,
 *      });
 */
export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    // Por ahora solo logueamos. Cuando se conecte Resend, esto sale.
    console.log("[contacto]", { name, email, subject, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
