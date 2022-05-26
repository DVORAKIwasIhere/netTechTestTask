import * as yup from "yup";

const phoneRegExp = /^((\+7)?)?(\(?\d{3}\)?)?[\d\- ]{7,10}$/;

export const schema = yup
  .object({
    name: yup.string().required(),
    cities: yup.string().required(),
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: yup.string().email().required(),
    question: yup.string().required(),
    preferenceConnection: yup.string().required(),
    checkBox: yup.boolean().oneOf([true], "Message"),
  })
  .required();
