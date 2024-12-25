import { atom } from 'recoil';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const todoState = atom<Todo[]>({
  key: 'todoState',
  default: [],
});
