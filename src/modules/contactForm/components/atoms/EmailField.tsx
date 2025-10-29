import { Field, FieldLabel } from "@/globals/components/ui/field";
import { Input } from "@/globals/components/ui/input";
import { setFormField } from "../context/formStore";

const EmailField = () => {
  return (
    <Field>
      <FieldLabel htmlFor="email">Correo electronico *</FieldLabel>
      <Input type="email" required id="email" placeholder="tu@email.com" onChange={(e) => setFormField("email", e.target.value)}/>
    </Field>
  );
};

export default EmailField;
