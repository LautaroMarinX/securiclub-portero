import { Button } from "../ui/button";

interface RequestDemoProps {
    label?: string;
}

const RequestDemo = ({ label }: RequestDemoProps) => {
  return (
    <a href="/#contacto">
      <Button size={'lg'} className="w-fit cursor-pointer">{label ? label : "Solicitar demo"}</Button>
    </a>
  );
};

export default RequestDemo