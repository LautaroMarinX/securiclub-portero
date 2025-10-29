import type { FormInfo } from "../utils/FormInfoInterface";

export const isValidName = (name: string): boolean => {
    return name.length > 2;
}

export const isValidEmail = (email: string): boolean => {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export const isValidPhone = (phone: number): boolean => {
    let regex =
      /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;;
    return regex.test(phone.toString());
}

export const isValidUnits = (units: number): boolean => {
    return units > 0;
}

export const isValidRol = (rol: string): boolean => {
    return rol != '';
}

export const isValidForm = (formInfo: FormInfo) => {
  return (
    isValidName(formInfo.name) &&
    isValidEmail(formInfo.email) &&
    isValidPhone(formInfo.phone) &&
    isValidUnits(formInfo.units) &&
    isValidRol(formInfo.rol)
  );
};