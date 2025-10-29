import {atom} from "nanostores";
import type { FormInfo } from "../utils/FormInfoInterface";

export const $formInfo = atom<FormInfo | null>(null);

export function setFormInfo(info: FormInfo) {
  $formInfo.set(info);
}

export function getFormInfo() {
  return $formInfo.get();
}

export function setFormField<K extends keyof FormInfo>(
  field: K,
  value: FormInfo[K]
) {
  const currentInfo = $formInfo.get() || {
    name: "",
    email: "",
    phone: 0,
    rol: "",
    units: 0,
    message: "",
  };

  $formInfo.set({
    ...currentInfo,
    [field]: value,
  });

}

export function isFormValid(): boolean {
  const info = $formInfo.get();

  if (!info) return false;
  
  const { name, email, phone, rol, units, message } = info;

  return ( name.length > 2 && email.length > 2 && phone > 5 && rol != '' && units >= 0 && message ) ? true : false;
}