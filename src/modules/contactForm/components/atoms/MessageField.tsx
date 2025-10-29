import { Field, FieldLabel } from '@/globals/components/ui/field';
import { Textarea } from '@/globals/components/ui/textarea';

const MessageField = () => {
  return (
    <Field>
      <FieldLabel htmlFor="message">Mensaje</FieldLabel>
      <Textarea rows={4} id="message" placeholder="Contanos brevemente tu necesidad." />
    </Field>
  );
}

export default MessageField