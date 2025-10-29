import { Field, FieldLabel } from "@/globals/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/globals/components/ui/select";
import { setFormField } from "../context/formStore";

const StatusField = () => {
  return (
    <Field>
      <FieldLabel>Rol personal *</FieldLabel>
      <Select required onValueChange={(e) => setFormField("rol", e)}>
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
    </Field>
  );
}

export default StatusField