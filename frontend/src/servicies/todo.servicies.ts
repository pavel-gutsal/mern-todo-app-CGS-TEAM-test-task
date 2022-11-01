import { HttpSerivce } from './http.servicies';
import { IUpdates, IPost } from '../types';

class TodoService extends HttpSerivce {
  download = async (token: string) => {
    const obj = {
      url: 'todos',
      headers: {
        Authorization: token
      }
    }
    return this.get(obj);
  };

  postTodo = async (token: string, post: IPost) => {
    const obj = {
      url: 'todos',
      headers: {
        Authorization: token
      }
    }
    return this.create(obj, post);
  }

  deleteTodo = async (id: string, token: string) => {
    const obj = {
      url: 'todos',
      id,
      headers: {
        Authorization: token
      }
    }
    return this.delete(obj);
  };

  updateTodo = async (id: string, token: string, post: IUpdates ) => {
    const obj = {
      url: 'todos',
      id,
      headers: {
        Authorization: token
      }
    }
    return this.update(obj, post);
  }
}

export const todoService = new TodoService();
