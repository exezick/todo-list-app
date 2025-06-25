import TodoItem from "./TodoItem";
import type { TodoFormProps } from "../types/types";
import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function TodoList({ todos, setTodos }: TodoFormProps) {
  const [showCompleted, setShowCompleted] = useState(true);

  // Sort todos by favorite first, then reverse for recent on top
  const favoritePending = todos
    .filter((todo) => todo.favorite && !todo.done)
    .reverse();

  const regularPending = todos
    .filter((todo) => !todo.favorite && !todo.done)
    .reverse();

  const favoriteCompleted = todos
    .filter((todo) => todo.favorite && todo.done)
    .reverse();

  const regularCompleted = todos
    .filter((todo) => !todo.favorite && todo.done)
    .reverse();

  return (
    <div>
      <hr className="border-purple-300 mb-3" />

      {/* Pending Todos: Favorite First */}
      {[...favoritePending, ...regularPending].map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}

      {/* Divider */}
      {[...favoritePending, ...regularPending].length > 0 && (
        <hr className="border-purple-300 mt-4" />
      )}

      {/* Completed Section */}
      {[...favoriteCompleted, ...regularCompleted].length > 0 && (
        <div className="mt-4 mb-2">
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            className="flex text-sm text-purple-600 font-medium mb-3 cursor-pointer"
          >
            {showCompleted ? (
              <ChevronDownIcon className="w-4 h-4" />
            ) : (
              <ChevronRightIcon className="w-4 h-4" />
            )}
            <span className="pl-2">COMPLETED</span>
          </button>

          {showCompleted && (
            <div className="space-y-2">
              {[...favoriteCompleted, ...regularCompleted].map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
