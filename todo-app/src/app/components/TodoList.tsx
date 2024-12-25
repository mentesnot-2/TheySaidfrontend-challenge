import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoState } from '../recoil/todoState';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useRecoilValue(todoState);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
