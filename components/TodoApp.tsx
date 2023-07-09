import React, { useEffect, useState } from "react";
import { getAllTodos } from "../utils/supabaseFunctions";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
    };
    getTodos();
  }, []);

  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3>Supabase Todo App</h3>
      <form>
        <input type="text" className="mr-2 shadow-lg p-1 outline-none" />
        <button className="shadow-md border-2 px-1 py-1 rounderd-lg bg-green-200">
          Add
        </button>
        <TodoList todos={todos} />
      </form>
    </section>
  );
};

export default TodoApp;
