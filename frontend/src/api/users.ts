import { client } from './axiosClient';
import { IRegister } from '../types/IRegister';
import { IToken } from '../types/IToken';

export const signup = (post: IRegister) => {
  console.log(post);
  return client.post<IToken>('/user/signup', post);
};

