import { TrashIcon, StarIcon, CheckIcon } from "@heroicons/react/24/solid";
import type { TodoItemProps } from "../types/types";

export default function TodoItem({ todo, todos, setTodos }: TodoItemProps) {
  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
  };

  const toggleDone = (id: string) => {
    const newArray = todos.map(
      (todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo) // toggle done status
    );
    setTodos(newArray);
  };

  const toggleFavorite = (id: string) => {
    const newArray = todos.map(
      (todo) => (todo.id === id ? { ...todo, favorite: !todo.favorite } : todo) // toggle favorite status
    );
    setTodos(newArray);
  };

  const isDone = todo.done ? `line-through` : ""; // set line-through style if done
  const isFavoriteClass = todo.favorite ? "text-yellow-500" : "text-gray-500"; // set favorite icon
  const isBorderClass = todo.done ? "border-green-500" : "border-purple-700"; // set border color based on favorite status

  return (
    <div
      className={`w-full flex justify-between items-center bg-white shadow py-3 px-3 border-l-4 mt-2 ${isBorderClass}`}
    >
      {/* Left: Checkbox and label */}
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          id={`todo-checkbox-${todo.id}`}
          checked={todo.done}
          onChange={() => toggleDone(todo.id)}
          className="peer hidden"
          onClick={() => toggleDone(todo.id)}
        />
        <div className="w-5 h-5 rounded-full border-2 border-purple-700 flex items-center justify-center transition-colors duration-200 peer-checked:border-green-500 peer-checked:bg-green-500">
          {todo.done && <CheckIcon className="w-4 h-4 text-white font-bold" />}
        </div>
        <span className={`text-gray-900 decoration-line ${isDone}`}>
          {todo.text}
        </span>
      </label>

      {/* Right: Trash icon */}
      <div className="flex items-center space-x-3">
        <button
          type="button"
          className={`${isFavoriteClass} hover:text-yellow-300 cursor-pointer`}
          onClick={() => toggleFavorite(todo.id)}
          title="Mark as favorite"
        >
          <StarIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          className="text-gray-500 hover:text-red-600 cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
          title="Delete"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
