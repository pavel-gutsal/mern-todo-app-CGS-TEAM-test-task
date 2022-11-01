import * as yup from 'yup';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export const SignupFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('not valid email')
    .required('enter title'),
  password: yup
    .string()
    .min(6, 'text too short')
    .required('enter password')
    .matches(passwordRegex, 'should contain lower, Upper case and numbers with special cherecters'),
  confPassword: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.')
});

export const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('not valid email')
    .required('enter title'),
  password: yup
    .string()
    .min(6, 'text too short')
    .required('enter password')
    .matches(passwordRegex, 'should contain lower, Upper case and numbers with special cherecters'),
});

export const EditFormSchema = yup.object().shape({
  title: yup
    .string()
    .min(6, 'title too short')
    .required('enter title'),
  text: yup
    .string()
    .min(6, 'text too short')
    .required('enter text'),
});