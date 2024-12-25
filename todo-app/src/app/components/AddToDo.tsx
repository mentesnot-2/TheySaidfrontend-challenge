import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../recoil/todoState';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const setTodos = useSetRecoilState(todoState);

  const addTodo = () => {
    if (text.trim()) {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text, completed: false },
      ]);
      setText('');
    }
  };

  return (
    <div className="flex items-center gap-2 mt-4 border-t border-b">
         <svg
        onClick={addTodo}
        xmlns="http://www.w3.org/2000/svg"
        className="bg-purple-900 text-white rounded-full w-5 h-5 cursor-pointer hover:bg-purple-700"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12h14"></path>
      </svg>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Memorize the dictionary"
        className="flex-1 focus:outline-none"
      />
      <button
        onClick={addTodo}
        className="bg-purple-900 text-white my-1 rounded-md hover:bg-purple-700 px-4"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddTodo;
