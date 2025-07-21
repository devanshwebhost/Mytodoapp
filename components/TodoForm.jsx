"use client";
import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    onAdd(task.trim());
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
