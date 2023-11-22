import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./todo";

export default function CreateTodo() {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post("https://127.0.0.1:3001/todo", newTodo);
    },
  });
  const handleSubmit = (event) => {
    event?.preventDefault;
    const newTodo = {
      name: event.target.name,
      description: event.target.description,
      dueDate: new Date(event.target.dueDate),
      completed: false,
    };
    // FIX: This is where we stand
    mutation.mutate();
  };

  return (
    <div>
      {mutation.isPending ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occured {mutation.error.message}</div>
          ) : null}
          {mutation.isSuccess ? <div>Todo Added!</div> : null}
          <form>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
            <label htmlFor="description">Description</label>
            <input id="description" name="description" type="text" />
            <label htmlFor="dueDate">Due Date</label>
            <input id="dueDate" name="dueDate" type="date" />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}
