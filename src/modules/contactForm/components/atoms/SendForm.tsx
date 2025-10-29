import { Button } from '@/globals/components/ui/button'
import {useStore} from "@nanostores/react";
import { $formInfo } from '../../context/formStore';
import { useMemo } from 'react';
import { isValidForm } from '../../utils/validateInputs';


const SendForm = () => {

    const formInfo = useStore($formInfo);

    const isFormValid = useMemo(() => {
      if (!formInfo) return false;

      return isValidForm(formInfo);

    }, [formInfo])



  return (
    <Button type="submit" size={"lg"} disabled={!isFormValid}>
      Solicitar demo
    </Button>
  );
}

export default SendForm