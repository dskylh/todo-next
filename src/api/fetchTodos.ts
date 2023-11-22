import { Todo } from "@/ui/todo";
import axios from "axios";
export default async function fetchTodos() {
  const result = await axios.get("http://127.0.0.1:3001/api/v1/todo");
  const data = result.data.data.todo;
  const todos: Todo[] = [];
  data.map(
    (todo: {
      id: string;
      name: string;
      description: string;
      completed: boolean;
      createdAt: string;
      completedAt: string;
      dueDate: string;
    }) => {
      todos.push({
        id: todo.id,
        name: todo.name,
        description: todo.description,
        completed: todo.completed,
        createdAt: new Date(todo.createdAt),
        completedAt: new Date(todo.completedAt),
        dueDate: new Date(todo.dueDate),
      });
    },
  );

  return todos;
}
