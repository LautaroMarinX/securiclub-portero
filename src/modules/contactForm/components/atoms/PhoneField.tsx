import { Field, FieldLabel } from "@/globals/components/ui/field";
import { Input } from "@/globals/components/ui/input";
import { setFormField } from "../context/formStore";

const PhoneField = () => {
  return (
    <Field>
      <FieldLabel htmlFor="phone">Teléfono *</FieldLabel>
      <Input type="number" required id="phone" placeholder="+54" onChange={(e) => setFormField("phone", Number(e.target.value))} />
    </Field>
  );
};

export default PhoneField;
