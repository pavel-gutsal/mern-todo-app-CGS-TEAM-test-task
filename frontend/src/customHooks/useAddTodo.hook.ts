import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createTodoThunk } from '../features/todos/todosReducer';
import { IPost } from "../types";

export const useAddTodo = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);

  const addTodo = (post: IPost) => {
    if (user) {
      dispatch(createTodoThunk({ token: user.token, post}));
    }
  }
  return { addTodo };
};
