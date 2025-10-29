import { Field, FieldError, FieldLabel } from '@/globals/components/ui/field';
import { Input } from '@/globals/components/ui/input';
import { $formInfo, setFormField } from "../../context/formStore";
import { isValidUnits } from "../../utils/validateInputs";
import React, { useMemo } from "react";
import { useStore } from "@nanostores/react";

const UnitsField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);

  const validation = useMemo(() => {
    const units = formInfo?.units;
    const isValid = units ? isValidUnits(units) : false;
    const shouldShowError = touched && !isValid && units !== undefined;

    return { isValid, shouldShowError };
  }, [formInfo?.units, touched]);

  return (
    <Field data-invalid={validation.shouldShowError}>
      <FieldLabel htmlFor="units">Unidades del edificio *</FieldLabel>
      <Input 
        type="number" 
        required 
        id="units" 
        min={0} 
        placeholder="Ingrese las unidades del edificio."
        value={formInfo?.units || ""}
        onChange={(e) => setFormField("units", Number(e.target.value))}
        onBlur={() => setTouched(true)} // ✅ Mostrar error solo después de tocar el campo
      />
      {validation.shouldShowError && (
        <FieldError>
          Por favor, ingresa un número válido de unidades (mayor a 0).
        </FieldError>
      )}
    </Field>
  );
}

export default UnitsField