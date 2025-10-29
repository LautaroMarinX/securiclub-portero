import { FieldGroup, FieldSet } from '@/globals/components/ui/field';
import MessageField from '../atoms/MessageField';

const Message = () => {
  return (
    <FieldSet>
      <FieldGroup>
        <MessageField />
      </FieldGroup>
    </FieldSet>
  );
}

export default Message