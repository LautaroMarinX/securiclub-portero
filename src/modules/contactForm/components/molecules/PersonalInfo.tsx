import { FieldGroup, FieldLegend, FieldSet } from '@/globals/components/ui/field'
import NameField from '../atoms/NameField'
import EmailField from '../atoms/EmailField'
import PhoneField from '../atoms/PhoneField'
import { User } from 'lucide-react'

const PersonalInfo = () => {
  return (
    <FieldSet>
      <FieldLegend className="flex gap-2 items-center">
        <div className='p-2 bg-secondary rounded-md items-center flex'>
          <User className='size-4' />
        </div>
        Información personal
      </FieldLegend>
      <FieldGroup className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <NameField />
        <EmailField />
        <PhoneField />
      </FieldGroup>
    </FieldSet>
  );
}

export default PersonalInfo