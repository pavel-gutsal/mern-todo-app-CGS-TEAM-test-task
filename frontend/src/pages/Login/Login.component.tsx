import React from 'react';
import { SLogin } from '../Login/Login.styles';
import { Title, Text, SLink } from '../Signup/Signup.styles';
import { LoginForm } from '../../components/Formic/LoginForm';

export const Login = () => {
  return (
    <SLogin>
      <Title>Welcome Back!</Title>
      <LoginForm />
      <Text>
        Don't have an Account?
          <SLink to="/Signup">Sign up</SLink>
      </Text>
    </SLogin>
  )
};
