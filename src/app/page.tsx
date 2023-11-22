"use client";
import TodoComponent, { Todo } from "@/ui/todo";
export default function Page() {
	const todo1: Todo = {
		name: "The Fourth One",
		description: "The third whaa updated second time",
		completed: true,
		createdAt: new Date("2023-10-31T12:55:03.762Z"),
		completedAt: new Date("2023-10-31T14:06:13.611Z"),
		dueDate: new Date("2023-10-30T15:39:30.543Z"),
	};
	const todo2: Todo = {
		name: "The Fifth One",
		description: "Five",
		completed: false,
		createdAt: new Date("2023-10-31T12:56:18.674Z"),
		completedAt: null,
		dueDate: new Date("2023-10-30T15:39:30.543Z"),
	};
	return (
		<div id="todo-container">
			<TodoComponent todo={todo1} />
			<TodoComponent todo={todo2} />
		</div>
	);
}
