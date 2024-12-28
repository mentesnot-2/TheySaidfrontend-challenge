import { atom } from 'recoil';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
}

export const todoState = atom<TodoState>({
  key: 'todoState',
  default: {
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
    loading: true,
  },
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('todos', JSON.stringify(newValue.todos));
      });

      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        setSelf({
          todos: JSON.parse(savedTodos),
          loading: false,
        });
      } else {
        setSelf({
          todos: [],
          loading: false,
        });
      }
    },
  ],
});
