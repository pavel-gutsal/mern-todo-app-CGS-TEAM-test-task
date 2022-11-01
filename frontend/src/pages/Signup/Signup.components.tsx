import React from 'react';

import { StyledSignup, Title, Text, SLink } from './Signup.styles';
import { SignupForm } from '../../components/Formic/SignupForm'

export const Signup = () => {

  return (
    <StyledSignup>
      <Title>Create Account</Title>
      <SignupForm />
      <Text>
        Already have an account?
          <SLink to="/login">Log in</SLink>
      </Text>
    </ StyledSignup>
  )
};
