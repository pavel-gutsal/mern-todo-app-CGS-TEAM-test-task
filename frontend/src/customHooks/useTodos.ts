import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { downloadTodoThunk } from '../features/todos/todosReducer';

export const useTodos = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);
  const { todos, status, error } = useAppSelector(state => state.todos);

  useEffect(() => {
    downloadTodos();
  }, [user, dispatch]);

  const downloadTodos = () => {
    if (user && user.token) {
      dispatch(downloadTodoThunk(user.token))
    }
  }

  return {downloadTodos, todos, status, error }
}