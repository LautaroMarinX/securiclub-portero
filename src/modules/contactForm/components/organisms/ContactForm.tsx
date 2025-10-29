import { FieldGroup } from '@/globals/components/ui/field';
import PersonalInfo from '../molecules/PersonalInfo';
import Message from '../molecules/Message';
import DetailInfo from '../molecules/DetailInfo';
import SendForm from '../atoms/SendForm';
import { getFormInfo } from '../../context/formStore';
import React from 'react';
import StatusContent from '../molecules/StatusContent';


const ContactForm = () => {

    const [sendStatus, setSendStatus] = React.useState<
      "pendiente" | "enviando" | "enviado" | "error"
    >("pendiente");

  const handleSubmit = async (e: React.FormEvent) => {
   
    const payload = getFormInfo();

    setSendStatus("enviando");

    if (!payload) return;

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSendStatus("enviado");
    } else {
      console.log(res)
      setSendStatus("error");
    }
  };

  if (sendStatus === "pendiente") {
    return (
      <form
        className="p-4 shadow-2xl rounded-2xl bg-card"
        onSubmit={handleSubmit}
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

  return <StatusContent status={sendStatus} setSendStatus={setSendStatus} />
  
}

export default ContactForm