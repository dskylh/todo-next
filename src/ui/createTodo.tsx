import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { TodoType } from "./todo";
import postTodo from "@/api/postTodo";

export default function CreateTodo() {
	const [todoName, setTodoName] = useState("");
	const [todoDescription, setTodoDescription] = useState("");
	const [todoDueDate, setTodoDueDate] = useState("");

	const mutation = useMutation({
		mutationFn: postTodo,
	});

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const todo: TodoType = {
			name: todoName,
			description: todoDescription,
			dueDate: todoDueDate,
			completed: false,
		};
		mutation.mutate(todo);
	}

	return (
		<div>
			{mutation.isPending ? (
				"Adding todo..."
			) : (
				<>
					{mutation.isError ? (
						<div>An error occured {mutation.error.stack}</div>
					) : null}
					{mutation.isSuccess ? <div>Todo Added!</div> : null}
					<form onSubmit={handleSubmit}>
						<label htmlFor="name">Name</label>
						<input
							required
							id="name"
							name="name"
							type="text"
							onChange={(e) => setTodoName(e.target.value)}
						/>
						<label htmlFor="description">Description</label>
						<input
							required
							id="description"
							name="description"
							type="text"
							onChange={(e) => setTodoDescription(e.target.value)}
						/>
						<label htmlFor="dueDate">Due Date</label>
						<input
							required
							id="dueDate"
							name="dueDate"
							type="date"
							onChange={(e) => setTodoDueDate(e.target.value)}
						/>
						<button type="submit">Submit</button>
					</form>
				</>
			)}
		</div>
	);
}
