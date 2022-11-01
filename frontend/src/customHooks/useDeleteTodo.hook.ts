import { useAppDispatch, useAppSelector } from "../app/hooks";
import { deleteTodoThunk } from '../features/todos/todosReducer';

export const useDeleteTodo = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);

  const deleteTodo = (id: string) => {
    if (user) {
      dispatch(deleteTodoThunk({ token: user.token, id }));
    }
  }
  return { deleteTodo }
};
