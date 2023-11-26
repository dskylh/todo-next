import { TodoType } from "@/ui/TodoType";
import { TodoSchema } from "@/ui/TodoSchema";
import axios from "axios";
export default async function fetchTodos() {
	const result = await axios.get("http://127.0.0.1:3001/api/v1/todo");
	const data = result.data.data.todo;
	const todos: TodoType[] = [];
	data.map((todo: TodoType) => {
		console.log(todo);
		TodoSchema.parse(todo);
		todos.push(todo);
	});
	return todos;
}

export async function fetchTodoFilter(query: URLSearchParams) {
	return axios.get("http://127.0.0.1:3001/api/v1/todo", {
		params: {
			query,
		},
	});
}
