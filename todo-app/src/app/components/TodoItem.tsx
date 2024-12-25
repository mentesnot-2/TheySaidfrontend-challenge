import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoState, Todo } from '../recoil/todoState';

type Props = {
    todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
    const setTodos = useSetRecoilState(todoState);

    const toggleComplete = () => {
        setTodos((prev) =>
            prev.map((item) =>
                item.id === todo.id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    return (
        <div
            className={`flex items-center gap-2 py-2 border-b ${todo.completed ? 'line-through ' : ''
                }`}
        >
            <label className="relative inline-block">
                <input 
                    type="checkbox" 
                    className="opacity-0 absolute w-0 h-0" 
                    onChange={toggleComplete}
                    checked={todo.completed}
                />
                <span className="w-4 h-4 border-2 border-violet-600 rounded-full inline-block transition-all duration-200">
                    <span className="w-2 h-2 bg-purple-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-200"></span>
                </span>
            </label>

            <span className='text-lg'>{todo.text}</span>
        </div>
    );
};

export default TodoItem;
