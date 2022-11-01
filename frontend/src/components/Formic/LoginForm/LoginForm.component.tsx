import React, { useState, useEffect, useRef } from 'react';
import { ThreeCircles } from  'react-loader-spinner'
import { Formik } from 'formik';
import { LoginFormSchema } from '../../../schemas/form.schemas';
import { Form, FormElement, Label, Input, Error, FormButton, InputBorder,
  Img, ButtonEye, ImgEye, SButton } from '../SignupForm/SignupForm.styles';
import { colors } from '../../../Theme';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { registerUser } from '../../../features/user/userReducer';

export const LoginForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const formicRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { user, status, error } = useAppSelector(state => state.user);
  const initState = {
    email: '',
    password: '',
  };

  const toggleVisiblePassword = () => {
    setVisiblePassword(prev => !prev);
  }

  console.log(user, status, error);

  useEffect(() => {
    if (error === 'wrong email') {
      formicRef.current.setFieldError('email', error);
    }
    if (error === 'wrong password or email' ) {
      formicRef.current.setFieldError('email', error);
      formicRef.current.setFieldError('password', error);
    }
  },[error])

  return (
    <Formik
      innerRef={formicRef}
      initialValues={initState}
      validationSchema={LoginFormSchema}
      onSubmit={async (values, actions) => {
        const { email, password } = values;
        dispatch(registerUser({ email, password, method: 'login' }))
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <FormElement>
            <Label htmlFor="email">Email</Label>
            <InputBorder
              err={!!(formik.touched.email && formik.errors.email)}
            >
              <Img src="./assets/email.svg" alt="icon" />
              <Input
                id="email"
                type="text"
                placeholder="type some email"
                {...formik.getFieldProps('email')}
              />
            </InputBorder >
            {formik.touched.email && formik.errors.email ? (
              <Error>{formik.errors.email}</Error>
            ) : null}
          </FormElement>
          <FormElement>
            <Label htmlFor="password">Password</Label>
            <InputBorder
              err={!!(formik.touched.password && formik.errors.password)}
            >
              <Img src="./assets/password.svg" alt="icon" />
              <ButtonEye type ="button" onClick={toggleVisiblePassword} >
                <ImgEye
                  src={visiblePassword ? "./assets/visible.svg" :"./assets/invisible.svg"}
                  alt="icon"
                />
              </ButtonEye>
              <Input
                id="password"
                type={visiblePassword ? "text" : "password"}
                placeholder="type some password"
                {...formik.getFieldProps('password')}
              />
            </InputBorder>
            {formik.touched.password && formik.errors.password ? (
              <Error>{formik.errors.password}</Error>
            ) : null}
          </FormElement>
          <FormButton>
            <SButton
              type="submit"
              bgColor={colors.greenish}
              disabled={status === 'pending'}
            >
              {
                status === 'pending'
                ? (<ThreeCircles
                    height="30"
                    width="30"
                    color="white"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                />) : ('Log in')
              }
            </SButton>
          </FormButton>
        </Form>
      )}
    </Formik>
  )
};
