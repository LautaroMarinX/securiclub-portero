import { Field, FieldLabel } from '@/globals/components/ui/field'
import { Input } from '@/globals/components/ui/input'
import { setFormField } from '../context/formStore'

const NameField = () => {

  return (
    <Field>
        <FieldLabel htmlFor='name'>Nombre completo *</FieldLabel>
        <Input type="text" required id='name' placeholder='Ingrese su nombre y apellido' onChange={(e) => { setFormField("name", e.target.value)}}/>
    </Field>
  )
}

export default NameField