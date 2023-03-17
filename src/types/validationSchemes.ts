import * as yup from 'yup';

const formErrorTexts = {
  password: {
    min: 'The password is too short',
    matches: 'The password must consist of numbers and latin characters',
    required: 'Enter your password',
  },
  login: {
    required: 'Enter your login',
  },
  email: {
    email: 'Invalid email',
    required: 'Enter your email',
  },
  repeatPassword: {
    oneOf: 'Both password need to be the same',
    required: 'Repeat your password without errors',
  },
};

export const loginSchema = yup.object().shape({
  password: yup
    .string()
    .required(formErrorTexts.password.required)
    .matches(/[a-zA-Z]/, formErrorTexts.password.matches)
    .matches(/[0-9]/, formErrorTexts.password.matches)
    .matches(/^[a-zA-Z0-9-_]{8,}$/, formErrorTexts.password.matches)
    .min(8, formErrorTexts.password.min),
  login: yup.string().required(formErrorTexts.login.required),
});

export const signupSchema = yup.object().shape({
  password: yup
    .string()
    .required(formErrorTexts.password.required)
    .matches(/[a-zA-Z]/, formErrorTexts.password.matches)
    .matches(/[0-9]/, formErrorTexts.password.matches)
    .matches(/^[a-zA-Z0-9-_]{8,}$/, formErrorTexts.password.matches)
    .min(8, formErrorTexts.password.min),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], formErrorTexts.repeatPassword.oneOf)
    .required(formErrorTexts.repeatPassword.required),
  login: yup.string().required(formErrorTexts.login.required),
});

export const userSchema = yup.object().shape({
  name: yup.string(),
  lastName: yup.string(),
  email: yup.string().email(formErrorTexts.email.email),
  dob: yup.date().max(new Date()),
});
