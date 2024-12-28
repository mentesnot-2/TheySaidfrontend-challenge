import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoState, Todo } from '../recoil/todoState';

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const setTodos = useSetRecoilState(todoState);

  const toggleComplete = () => {
    setTodos((prevState) => ({
      ...prevState,
      todos: prevState.todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      ),
    }));
  };

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 mt-4
        ${todo.completed ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' : 'bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700'}
        shadow-md hover:shadow-xl hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700`}
    >
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className="peer hidden"
          onChange={toggleComplete}
          checked={todo.completed}
        />
        <div
          className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-300
            ${todo.completed ? 'bg-white border-transparent' : 'border-violet-600'}
            peer-checked:bg-violet-600 peer-checked:border-violet-600`}
        >
          {todo.completed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </label>

      <span
        className={`text-lg font-medium transition-all duration-300
          ${todo.completed ? 'line-through opacity-70' : 'text-gray-800 dark:text-white'}`}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
