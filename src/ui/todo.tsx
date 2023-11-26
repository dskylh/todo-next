import patchTodo from "@/api/patchTodo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { TodoType } from "./TodoType";
import styles from "./styling/todo.module.scss";

const useMutateTodo = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: patchTodo,
		onSuccess: (data, variables) => {
			queryClient.setQueryData(["todos", { id: variables._id }], data);
		},
	});
};

export default function TodoComponent(props: { todo: TodoType }) {
	const { todo } = props;
	const [todoState, setTodoState] = useState(todo);

	const mutation = useMutateTodo();
	function handleToggle() {
		const newTodo = {
			...todoState,
			completed: !todoState.completed,
		};
		setTodoState(newTodo);
		mutation.mutate(newTodo);
	}

	return (
		<div className={styles.todo}>
			<span className={todoState.completed ? styles.completed : ""}>
				{todo.createdAt
					? new Date(todo.createdAt).toLocaleDateString()
					: "N/A"}{" "}
			</span>

			<label className={styles.todo_label}>
				<input
					name="check"
					type="checkbox"
					checked={todoState.completed}
					onChange={handleToggle}
					className={styles.checkbox}
				/>
				<span className={`${todoState.completed ? styles.completed : ""}`}>
					{todo.name}
				</span>
			</label>
			<span className={styles.description}> ({todo.description})</span>
		</div>
	);
}
