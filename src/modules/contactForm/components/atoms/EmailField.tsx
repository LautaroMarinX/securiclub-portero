import { Field, FieldError, FieldLabel } from "@/globals/components/ui/field";
import { Input } from "@/globals/components/ui/input";
import { $formInfo, setFormField } from '../../context/formStore';
import { isValidEmail } from '../../utils/validateInputs';
import React, { useMemo } from "react";
import { useStore } from "@nanostores/react";

const EmailField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);

  const validation = useMemo(() => {
    const email = formInfo?.email;
    const isValid = email ? isValidEmail(email) : false;
    const shouldShowError = touched && !isValid && email !== undefined;

    return { isValid, shouldShowError };
  }, [formInfo?.email, touched]);

  return (
    <Field data-invalid={validation.shouldShowError}>
      <FieldLabel htmlFor="email">Correo electronico *</FieldLabel>
      <Input 
        type="email" 
        required 
        id="email" 
        autoComplete="email"
        placeholder="tu@email.com"
        value={formInfo?.email || ""}
        onChange={(e) => setFormField("email", e.target.value)}
        onBlur={() => setTouched(true)} // ✅ Mostrar error solo después de tocar el campo
      />
      {validation.shouldShowError && (
        <FieldError>
          Por favor, ingresa un correo electrónico válido.
        </FieldError>
      )}
    </Field>
  );
};

export default EmailField;
