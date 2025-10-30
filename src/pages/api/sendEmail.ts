import { Resend } from "resend";
import type { APIRoute } from "astro";
import EmailTemplate from "@/modules/contactForm/components/organisms/EmailTemplate";

//sin esto no anda.
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const { email, message, name, phone, rol, units } = body;

  const { data, error } = await resend.emails.send({
    from: `Contacto <${import.meta.env.RESEND_EMAIL_FROM}>`,
    to: [`${email}`],
    subject: `Gracias por solicitar tu demo | Securi Club`,
    replyTo: `${import.meta.env.RESEND_EMAIL_REPLY_TO}`,
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
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ data }), { status: 200 });
};
