import {Container, Font, Head, Heading, Html, Img, pixelBasedPreset, Row, Section, Tailwind, Text} from "@react-email/components";
import type { FormInfo } from "../../utils/FormInfoInterface";


const EmailInfoDetail = ({heading, value}: {heading: string, value: any}) => {

    if(!value) return null;
    
    return (
      <Row>
        <Heading as="h4" mb={0}>
          {heading}
        </Heading>
        <Text className="mt-1">{value}</Text>
      </Row>
    );
}

const EmailTemplate = (props: FormInfo) => {

    const {email, message, name, phone, rol, units} = props;

  return (
    <Tailwind
      config={{
        presets: [pixelBasedPreset],
        theme: {
          extend: {
            colors: {
              brand: "#007a6f",
            },
          },
        },
      }}
    >
      <Html lang="es" dir="ltr">
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily={"sans-serif"}
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Container>
          <Img src={`${import.meta.env.WEB_DOMAIN}/logo.png`} alt="Logo de Securi Club" width={70} height={70} />
        </Container>
        <Container>
          <Heading as="h1" mb={0}>
            Gracias por solicitar tu Demo
          </Heading>
          <Text>
            Estimado/a {name}, hemos recibido correctamente tu solicitud de
            demo. Nuestro equipo se pondrá en contacto con usted en las próximas
            24 horas hábiles utilizando los datos de contacto que nos ha
            proporcionado.
          </Text>
        </Container>
        <Container>
          <Heading as="h2">Resumen de su solicitud</Heading>
          <Section className="p-8 bg-gray-50 rounded-2xl">
            <EmailInfoDetail
              heading="Nombre completo"
              value={name}
            />
            <EmailInfoDetail
              heading="Correo electronico"
              value={email}
            />
            <EmailInfoDetail heading="Teléfono" value={phone} />
            <EmailInfoDetail heading="Rol personal" value={rol} />
            <EmailInfoDetail
              heading="Unidades del edificio"
              value={`${units} unidades`}
            />
            <EmailInfoDetail
              heading="Mensajes"
              value={
                message
              }
            />
          </Section>
        </Container>
      </Html>
    </Tailwind>
  );
}

export { EmailTemplate };
export default EmailTemplate;