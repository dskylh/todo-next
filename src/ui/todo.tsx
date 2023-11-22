import { useState } from "react";
import styles from "./styling/todo.module.scss";

export type Todo = {
	name: string;
	description: string;
	completed: boolean;
	createdAt: Date;
	completedAt: Date | null;
	dueDate: Date | null;
};

export default function TodoComponent(props: { todo: Todo }) {
	const { todo } = props;
	const [todoState, setTodoState] = useState(todo);

	function handleToggle(): void {
		const updatedTodo = { ...todoState, completed: !todoState.completed };
		setTodoState(updatedTodo);
	}

	return (
		<div>
			<span className={styles.date}>
				{todo.createdAt.toLocaleDateString()}{" "}
			</span>
			<label className={styles.todo}>
				<input
					name="check"
					type="checkbox"
					checked={todoState.completed}
					onChange={handleToggle}
					className={styles.checkbox}
				/>
				<span
					style={{
						textDecoration: todoState.completed ? "line-through" : "none",
					}}
				>
					{todo.name}
				</span>
			</label>
			<span className={styles.description}> ({todo.description})</span>
		</div>
	);
}
