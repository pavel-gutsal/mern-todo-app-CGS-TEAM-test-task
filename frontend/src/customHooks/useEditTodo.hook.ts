import { useAppDispatch, useAppSelector } from "../app/hooks";
import { editTodoThunk  } from '../features/todos/todosReducer';
import { IUpdates } from "../types/IUpdates";

export const useEditTodo = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);

  const editTodo = (id: string, updates: IUpdates) => {
    if (user) {
      dispatch(editTodoThunk ({ token: user.token, id , updates}));
    }
  }
  return { editTodo };
};
