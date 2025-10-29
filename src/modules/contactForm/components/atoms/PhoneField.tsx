import { Field, FieldError, FieldLabel } from "@/globals/components/ui/field";
import { Input } from "@/globals/components/ui/input";
import { $formInfo, setFormField } from "../../context/formStore";
import { isValidPhone } from "../../utils/validateInputs";
import React, { useMemo } from "react";
import { useStore } from "@nanostores/react";

const PhoneField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);

  // ✅ Usar useMemo para validación con función existente
  const validation = useMemo(() => {
    const phone = formInfo?.phone;
    const isValid = phone ? isValidPhone(phone) : false;
    const shouldShowError = touched && !isValid && phone !== undefined;

    return { isValid, shouldShowError };
  }, [formInfo?.phone, touched]);

  return (
    <Field data-invalid={validation.shouldShowError}>
      <FieldLabel htmlFor="phone">Teléfono *</FieldLabel>
      <Input 
        type="tel" 
        required 
        id="phone" 
        autoComplete="tel"
        placeholder="+54 11 1234-5678"
        value={formInfo?.phone || ""}
        onChange={(e) => setFormField("phone", Number(e.target.value))}
        onBlur={() => setTouched(true)} // ✅ Mostrar error solo después de tocar el campo
      />
      {validation.shouldShowError && (
        <FieldError>
          Por favor, ingresa un número de teléfono válido.
        </FieldError>
      )}
    </Field>
  );
};

export default PhoneField;
