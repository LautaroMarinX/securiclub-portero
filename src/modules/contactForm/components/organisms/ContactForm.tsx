import { FieldGroup } from '@/globals/components/ui/field';
import PersonalInfo from '../molecules/PersonalInfo';
import Message from '../molecules/Message';
import DetailInfo from '../molecules/DetailInfo';
import SendForm from '../atoms/SendForm';

const ContactForm = () => {
  return (
    <form
      className="p-4 shadow rounded-2xl bg-card"
      onSubmit={(e) => e.preventDefault()}
    >
      <FieldGroup>
        <PersonalInfo />
        <DetailInfo />
        <Message />
        <SendForm />
      </FieldGroup>
    </form>
  );
}

export default ContactForm