import React, { useState, useEffect, useRef } from 'react';
import { ThreeCircles } from  'react-loader-spinner'
import { Formik } from 'formik';
import { SignupFormSchema } from '../../../schemas/form.schemas';
import { Form, FormElement, Label, Input, Error, FormButton, InputBorder,
  Img, ButtonEye, ImgEye, SButton } from './SignupForm.styles';
import { colors } from '../../../Theme';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { registerUser } from '../../../features/user/userReducer';
import { IMGS } from '../../../assets';

export const SignupForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const formicRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { user, status, error } = useAppSelector(state => state.user);
  const initState = {
    email: '',
    password: '',
    confPassword: '',
  };

  const toggleVisiblePassword = () => {
    setVisiblePassword(prev => !prev);
  }

  console.log(user, status, error);

  useEffect(() => {
    if (error === "email already in use") {
      formicRef.current.setFieldError('email', error);
    }
  },[error])

  return (
    <Formik
      innerRef={formicRef}
      initialValues={initState}
      validationSchema={SignupFormSchema}
      onSubmit={async (values, actions) => {
        const { email, password } = values;
        dispatch(registerUser({ email, password, method:'signup'}))
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <FormElement>
            <Label htmlFor="email">Email</Label>
            <InputBorder
              err={!!(formik.touched.email && formik.errors.email)}
            >
              <Img src={IMGS.email} alt="icon" />
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
              <Img src={IMGS.password} alt="icon" />
              <ButtonEye type ="button" onClick={toggleVisiblePassword} >
                <ImgEye
                  src={visiblePassword ? IMGS.visible : IMGS.invisible}
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
          <FormElement>
            <Label htmlFor="confPassword">Confirm Password</Label>
            <InputBorder
              err={!!(formik.touched.confPassword && formik.errors.confPassword)}
            >
              <Img src={IMGS.password} alt="icon" />
              <ButtonEye type ="button" onClick={toggleVisiblePassword} >
                <ImgEye
                  src={visiblePassword ? IMGS.visible : IMGS.invisible}
                  alt="icon"
                />
              </ButtonEye>
              <Input
                id="confPassword"
                type={visiblePassword ? "text" : "password"}
                placeholder="retype password"
                {...formik.getFieldProps('confPassword')}
              />
            </InputBorder>
            {formik.touched.confPassword && formik.errors.confPassword ? (
              <Error>{formik.errors.confPassword}</Error>
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
                />) : ('Signup')
              }
            </SButton>
          </FormButton>
        </Form>
      )}
    </Formik>
  )
};
