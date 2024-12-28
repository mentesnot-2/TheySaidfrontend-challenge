import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddToDo';
import TodoList from './components/TodoList';
import LightDarkToggleButton from './components/LightDarkToggleButton';

const App: React.FC = () => {
  const savedMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(savedMode ? JSON.parse(savedMode) : false);


  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300`}>
      <div className="max-w-lg mx-auto p-4 justify-end">
        <div className="flex justify-between items-center mb-4 ju">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Todo List</h1>

          <LightDarkToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <TodoList />
        <AddTodo />
      </div>
    </div>
  );
};

export default App;
