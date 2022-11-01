import { HttpSerivce } from './http.servicies';
import { IRegister } from '../types';

class UserService extends HttpSerivce {
  signup = async (post: IRegister) => {
    return this.create({ url: 'user/signup' }, post);
  };

  login = async (post: IRegister) => {
    return this.create({ url: 'user/login' }, post);
  };
}

export const userService = new UserService();
