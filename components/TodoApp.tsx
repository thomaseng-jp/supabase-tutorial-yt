import React, { useEffect, useState } from "react";
import { addTodo, getAllTodos } from "../utils/supabaseFunctions";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState<any>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
    };
    getTodos();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (title === "") {
      return;
    }

    await addTodo(title);
    let todos = await getAllTodos();
    setTodos(todos);

    setTitle("");
  };

  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3>Supabase Todo App</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          className="mr-2 shadow-lg p-1 outline-none"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <button className="shadow-md border-2 px-1 py-1 rounderd-lg bg-green-200">
          Add
        </button>
        <TodoList todos={todos} setTodos={setTodos} />
      </form>
    </section>
  );
};

export default TodoApp;
