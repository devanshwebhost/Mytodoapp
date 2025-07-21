"use client";
import { format } from "date-fns";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded mb-2">
      <div>
        <p className={`${todo.done ? 'line-through' : ''}`}>{todo.text}</p>
        <small className="text-xs text-gray-500">Created: {format(new Date(todo.createdAt), 'dd MMM yyyy, HH:mm')}</small>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onToggle(todo.id)} className="text-green-600">{todo.done ? 'Undo' : 'Done'}</button>
        <button onClick={() => onDelete(todo.id)} className="text-red-600">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
