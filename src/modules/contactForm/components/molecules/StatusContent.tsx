import { Button } from "@/globals/components/ui/button";
import { Check, LoaderIcon, X } from "lucide-react";

interface StatusContentProps {
  setSendStatus?: React.Dispatch<
    React.SetStateAction<"pendiente" | "enviando" | "enviado" | "error">
  >;
  status: string;
}

//hacer que cuando se cambie el status vaya hacia arriba.

const StatusWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-96 bg-card ro w-full xl:w-4xl flex-col justify-center items-center text-center">
      {children}
    </div>
  );
};

export const StatusContent = ({
  setSendStatus,
  status,
}: StatusContentProps) => {
  if (status === "enviando") {
    return (
      <StatusWrapper>
        <LoaderIcon className="size-10 mb-4 animate-spin" />
        <p>Estamos enviando el mail</p>
      </StatusWrapper>
    );
  }

  if (status === "error") {
    if (setSendStatus === undefined) return null;

    return (
      <StatusWrapper>
        <X className="size-10 mb-4 text-red-400" />
        <h2 className="text-xl mb-1">Sucedio un error</h2>
        <p className="w-3/4">
          No pudimos enviar tu mensaje. Por favor, intenta nuevamente o pruebe
          mas tarde.
        </p>
        <Button className="mt-3" onClick={() => setSendStatus("pendiente")}>
          Intentar nuevamente
        </Button>
      </StatusWrapper>
    );
  }

  if (status === "enviado") {
    return (
      <StatusWrapper>
        <Check className="size-10 mb-4 text-green-400" />
        <h2 className="text-xl mb-1">Gracias por contactarte</h2>
        <p className="w-3/4">
          Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
        </p>
      </StatusWrapper>
    );
  }
};

export default StatusContent;
