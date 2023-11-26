import { TodoType } from "@/ui/TodoType";
import axios from "axios";

export default async function patchTodo(newTodo: TodoType) {
	try {
		const response = await axios.patch(
			`http://127.0.0.1:3001/api/v1/todo/${newTodo._id}`,
			newTodo,
		);
		return console.log(response);
	} catch (error) {
		return console.log(`Some error occured: ${error}`);
	}
}
