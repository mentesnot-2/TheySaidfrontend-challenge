import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../recoil/todoState';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const setTodos = useSetRecoilState(todoState);

  const addTodo = () => {
    if (text.trim()) {
      const newTodo = { id: Date.now(), text, completed: false };
      setTodos((prev) => ({
        ...prev,
        todos: [...prev.todos, newTodo],
      }));
      setText(''); 
    }
  };

  return (
    <div className="flex items-center gap-2 mt-4 p-4 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700">
      <svg
        onClick={addTodo}
        xmlns="http://www.w3.org/2000/svg"
        className="bg-violet-600 text-white rounded-full w-6 h-6 cursor-pointer hover:bg-purple-700"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12h14"></path>
      </svg>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 focus:outline-none bg-transparent dark:text-white dark:placeholder-gray-400"
      />
      <button
        onClick={addTodo}
        className="bg-violet-600 text-white my-1 rounded-md hover:bg-purple-700 px-4"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddTodo;
