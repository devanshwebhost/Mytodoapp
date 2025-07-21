"use client";
import { useEffect, useState } from "react";
import Greeting from "@/components/Greeting";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import FilterBar from "@/components/FilterBar";
import { saveTodos, getTodos } from "@/utils/localStorage";
import { v4 as uuid } from "uuid";
import ThemeToggle from "@/components/DarkModeToggle";

const Page = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: uuid(),
      text,
      createdAt: new Date(),
      done: false
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "done") return todo.done;
    if (filter === "pending") return !todo.done;
    return true;
  });

  return (
    <main className="min-h-screen p-6 max-w-xl mx-auto">
      <Greeting />
      <ThemeToggle/>
      <TodoForm onAdd={addTodo} />
      <FilterBar filter={filter} setFilter={setFilter} />
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggle={toggleDone} />
      ))}
    </main>
  );
};

export default Page;
