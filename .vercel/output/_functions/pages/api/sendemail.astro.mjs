import { Resend } from 'resend';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Tailwind, pixelBasedPreset, Html, Head, Font, Container, Img, Heading, Text, Section, Row } from '@react-email/components';
export { renderers } from '../../renderers.mjs';

const EmailInfoDetail = ({ heading, value }) => {
  if (!value) return null;
  return /* @__PURE__ */ jsxs(Row, { children: [
    /* @__PURE__ */ jsx(Heading, { as: "h4", mb: 0, children: heading }),
    /* @__PURE__ */ jsx(Text, { className: "mt-1", children: value })
  ] });
};
const EmailTemplate = (props) => {
  const { email, message, name, phone, rol, units } = props;
  return /* @__PURE__ */ jsx(
    Tailwind,
    {
      config: {
        presets: [pixelBasedPreset],
        theme: {
          extend: {
            colors: {
              brand: "#007a6f"
            }
          }
        }
      },
      children: /* @__PURE__ */ jsxs(Html, { lang: "es", dir: "ltr", children: [
        /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx(
          Font,
          {
            fontFamily: "Inter",
            fallbackFontFamily: "sans-serif",
            webFont: {
              url: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
              format: "woff2"
            },
            fontWeight: 400,
            fontStyle: "normal"
          }
        ) }),
        /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Img, { src: `${"https://www.securiclub.com.ar"}/logo.png`, alt: "Logo de Securi Club", width: 70, height: 70 }) }),
        /* @__PURE__ */ jsxs(Container, { children: [
          /* @__PURE__ */ jsx(Heading, { as: "h1", mb: 0, children: "Gracias por solicitar tu Demo" }),
          /* @__PURE__ */ jsxs(Text, { children: [
            "Estimado/a ",
            name,
            ", hemos recibido correctamente tu solicitud de demo. Nuestro equipo se pondrá en contacto con usted en las próximas 24 horas hábiles utilizando los datos de contacto que nos ha proporcionado."
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Container, { children: [
          /* @__PURE__ */ jsx(Heading, { as: "h2", children: "Resumen de su solicitud" }),
          /* @__PURE__ */ jsxs(Section, { className: "p-8 bg-gray-50 rounded-2xl", children: [
            /* @__PURE__ */ jsx(
              EmailInfoDetail,
              {
                heading: "Nombre completo",
                value: name
              }
            ),
            /* @__PURE__ */ jsx(
              EmailInfoDetail,
              {
                heading: "Correo electronico",
                value: email
              }
            ),
            /* @__PURE__ */ jsx(EmailInfoDetail, { heading: "Teléfono", value: phone }),
            /* @__PURE__ */ jsx(EmailInfoDetail, { heading: "Rol personal", value: rol }),
            /* @__PURE__ */ jsx(
              EmailInfoDetail,
              {
                heading: "Unidades del edificio",
                value: `${units} unidades`
              }
            ),
            /* @__PURE__ */ jsx(
              EmailInfoDetail,
              {
                heading: "Mensajes",
                value: message
              }
            )
          ] })
        ] })
      ] })
    }
  );
};

const prerender = false;
const POST = async ({ request }) => {
  try {
    console.log("Iniciando proceso de envío de email...");
    const apiKey = "re_geRt1wSW_NFdyY6sbXkQqFmTQiVVFEfEy";
    const emailFrom = "contacto@securiclub.com.ar";
    const replyTo = "rafael@securiclub.com.ar";
    console.log("Variables de entorno:", {
      hasApiKey: !!apiKey,
      hasEmailFrom: !!emailFrom,
      hasReplyTo: !!replyTo
    });
    if (!apiKey) ;
    if (!emailFrom) ;
    const resend = new Resend(apiKey);
    const body = await request.json();
    console.log("Body recibido:", body);
    const { email, message, name, phone, rol, units } = body;
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
        phone,
        rol: `${rol}`,
        units,
        message: `${message}`
      })
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
