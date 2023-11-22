import fetchTodos from "@/api/fetchTodos";
import { useQuery } from "@tanstack/react-query";
import TodoComponent, { Todo } from "./todo";

export default function TodoContainer() {
  const { data, isPending, error, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (error) {
    return `An error has occured${error.message}`;
  }

  return (
    <div id="todo-container">
      {data.map((todo) => (
        <TodoComponent todo={todo} />
      ))}
    </div>
  );
}
