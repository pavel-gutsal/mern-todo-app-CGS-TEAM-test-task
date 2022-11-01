/* eslint-disable arrow-body-style */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { StyledHeader } from './Header.styles';
import { logOutUser } from '../../features/user/userReducer';
import { logOut } from '../../features/todos/todosReducer';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);

  const signout = () => {
    dispatch(logOutUser());
    dispatch(logOut());
  };

  return (
    <StyledHeader>
      {
        user && (
          <button
            type="button"
            onClick={signout}
          >
            Log out
          </button>
        )
      }
    </StyledHeader>
  );
};
