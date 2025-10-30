import { Resend } from "resend";
import type { APIRoute } from "astro";
import EmailTemplate from "@/modules/contactForm/components/organisms/EmailTemplate";

//sin esto no anda.
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log("Iniciando proceso de envío de email...");
    
    // Verificar variables de entorno
    const apiKey = import.meta.env.RESEND_API_KEY;
    const emailFrom = import.meta.env.RESEND_EMAIL_FROM;
    const replyTo = import.meta.env.RESEND_EMAIL_REPLY_TO;
    
    console.log("Variables de entorno:", {
      hasApiKey: !!apiKey,
      hasEmailFrom: !!emailFrom,
      hasReplyTo: !!replyTo
    });

    if (!apiKey) {
      console.error("RESEND_API_KEY no está configurada");
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY no configurada" }),
        { 
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    if (!emailFrom) {
      console.error("RESEND_EMAIL_FROM no está configurada");
      return new Response(
        JSON.stringify({ error: "RESEND_EMAIL_FROM no configurada" }),
        { 
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const resend = new Resend(apiKey);
    
    const body = await request.json();
    console.log("Body recibido:", body);

    const { email, message, name, phone, rol, units } = body;

    // Validar campos requeridos
    if (!email || !name) {
      console.error("Faltan campos requeridos");
      return new Response(
        JSON.stringify({ error: "Email y nombre son requeridos" }),
        { 
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    console.log("Enviando email...");
    const { data, error } = await resend.emails.send({
      from: `Contacto <${emailFrom}>`,
      to: [`${email}`],
      subject: `Gracias por solicitar tu demo | Securi Club`,
      replyTo: replyTo || emailFrom,
      react: EmailTemplate({
        name: `${name}`,
        email: `${email}`,
        phone: phone,
        rol: `${rol}`,
        units: units,
        message: `${message}`,
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    console.log("Email enviado exitosamente:", data);
    return new Response(JSON.stringify({ data }), { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error general en sendEmail:", error);
    return new Response(
      JSON.stringify({ 
        error: "Error interno del servidor",
        details: error instanceof Error ? error.message : String(error)
      }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
