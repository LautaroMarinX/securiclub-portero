import { Field, FieldError, FieldLabel } from '@/globals/components/ui/field'
import { Input } from '@/globals/components/ui/input'
import { $formInfo, setFormField } from "../../context/formStore";
import { isValidName } from "../../utils/validateInputs";
import React, { useMemo } from "react";
import { useStore } from "@nanostores/react";

const NameField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);

  const validation = useMemo(() => {
    const name = formInfo?.name;
    const isValid = name ? isValidName(name.trim()) : false;
    const shouldShowError = touched && !isValid && name !== undefined;

    return { isValid, shouldShowError };
  }, [formInfo?.name, touched]);

  return (
    <Field data-invalid={validation.shouldShowError}>
      <FieldLabel htmlFor='name'>Nombre completo *</FieldLabel>
      <Input 
        type="text" 
        required 
        id='name' 
        autoComplete="name"
        placeholder='Ingrese su nombre y apellido'
        value={formInfo?.name || ""}
        onChange={(e) => setFormField("name", e.target.value)}
        onBlur={() => setTouched(true)} // ✅ Mostrar error solo después de tocar el campo
      />
      {validation.shouldShowError && (
        <FieldError>
          El nombre debe tener más de 2 caracteres.
        </FieldError>
      )}
    </Field>
  )
}

export default NameField