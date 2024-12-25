import React from 'react';
import { RecoilRoot } from 'recoil';
import AddTodo from './components/AddToDo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <TodoList />
        <AddTodo />
      </div>
    </RecoilRoot>
  );
};

export default App;
