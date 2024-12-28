import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoState } from '../recoil/todoState';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { todos, loading } = useRecoilValue(todoState);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-violet-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto my-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
