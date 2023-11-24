import { TodoType } from "@/ui/todo";
import axios from "axios";

export default async function postTodo(newTodo: TodoType) {
	try {
		const response = await axios.post(
			"http://127.0.0.1:3001/api/v1/todo",
			newTodo,
		);
		return console.log(response);
	} catch (error) {
		return console.log(`Some error occured: ${error}`);
	}
}
