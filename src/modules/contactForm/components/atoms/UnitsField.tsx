import { Field, FieldLabel } from '@/globals/components/ui/field';
import { Input } from '@/globals/components/ui/input';
import { setFormField } from '../context/formStore';

const UnitsField = () => {
  return (
    <Field>
      <FieldLabel htmlFor="units" >Unidades del edificio *</FieldLabel>
      <Input type="number" required id="units" min={0} placeholder="Ingrese las unidades del edificio." onChange={(e) => setFormField("units", Number(e.target.value))} />
    </Field>
  );
}

export default UnitsField