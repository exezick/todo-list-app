import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { TodoFormProps } from "../types/types";

export default function TodoForm({ todos, setTodos }: TodoFormProps) {
  const [todo, setTodo] = useState("");

  //form submission
  const submitTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        text: todo.trim(),
        done: false, // track completion status
        favorite: false, // track favorite status
      };
      setTodos([...todos, newTodo]); // Create a new array
      setTodo(""); // reset input
    }
  };

  return (
    <div>
      <form onSubmit={submitTodoHandler}>
        <div className="bg-purple-700 width-100% flex items-center justify-between p-1 mb-3 active:bg-purple-600 focus-within:bg-purple-600 transition duration-300 ease-in-out">
          <input
            type="text"
            placeholder="Add a new todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            className="w-full text-white p-2 border-0 active:border-none focus:border-none focus:outline-none"
          />
          <button
            type="submit"
            className="text-fuchsia-200 hover:text-white active:bg-purple-400 text-3xl ml-1 pb-1 font-bold transition duration-300 ease-in-out"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}
