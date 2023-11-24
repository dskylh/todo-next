import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { TodoType } from "./todo";

export default function CreateTodo() {
  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post("https://127.0.0.1:3001/todo", formData);
    },
  });
  const handleSubmit = (formData: FormData) => {
    const newTodo = {
      name: formData.get("name"),
      description: formData.get("description"),
      dueDate: formData.get("dueDate"),
    };

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
          <form onSubmit={mutation.mutate}>
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
