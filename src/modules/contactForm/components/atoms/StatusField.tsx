import { Field, FieldError, FieldLabel } from "@/globals/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/globals/components/ui/select";
import { $formInfo, setFormField } from "../../context/formStore";
import { isValidRol } from "../../utils/validateInputs";
import React, { useMemo } from "react";
import { useStore } from "@nanostores/react";

const StatusField = () => {
  const [touched, setTouched] = React.useState(false);
  const formInfo = useStore($formInfo);

  // ✅ Usar useMemo para validación con función existente
  const validation = useMemo(() => {
    const rol = formInfo?.rol;
    const isValid = rol ? isValidRol(rol) : false;
    const shouldShowError = touched && !isValid && rol !== undefined;

    return { isValid, shouldShowError };
  }, [formInfo?.rol, touched]);

  return (
    <Field data-invalid={validation.shouldShowError}>
      <FieldLabel>Rol personal *</FieldLabel>
      <Select 
        required 
        value={formInfo?.rol || ""}
        onValueChange={(value) => {
          setFormField("rol", value);
          setTouched(true);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Elija una opción" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Administrador">Administrador de Consorcio</SelectItem>
          <SelectItem value="Desarrollador">
            Desarrollador inmobiliario
          </SelectItem>
          <SelectItem value="Propietario">Propietario o Residente</SelectItem>
          <SelectItem value="Instalador">Instalador o Empresa de Seguridad</SelectItem>
        </SelectContent>
      </Select>
      {validation.shouldShowError && (
        <FieldError>
          Por favor, selecciona tu rol personal.
        </FieldError>
      )}
    </Field>
  );
}

export default StatusField