import { FieldGroup, FieldLegend, FieldSet } from '@/globals/components/ui/field';
import StatusField from '../atoms/StatusField';
import UnitsField from '../atoms/UnitsField';
import { Building } from 'lucide-react';

const DetailInfo = () => {
  return (
    <FieldSet>
      <FieldLegend className='flex items-center gap-2'>
        <div className="p-2 bg-secondary rounded-md items-center flex">
          <Building className="size-4" />
        </div>
        Detalle del condominio
      </FieldLegend>
      <FieldGroup>
        <StatusField />
        <UnitsField />
      </FieldGroup>
    </FieldSet>
  );
}

export default DetailInfo