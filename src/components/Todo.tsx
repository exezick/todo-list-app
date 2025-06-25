import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import type { Todo } from "../types/types";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="bg-fuchsia-100 w-full max-w-lg mx-auto py-6 px-5 shadow-lg">
      <h3 className="text-lg pb-3 font-medium">TODO's</h3>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
