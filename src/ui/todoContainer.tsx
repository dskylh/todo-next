import fetchTodos from "@/api/fetchTodos";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useQuery } from "@tanstack/react-query";
import styles from "./styling/todoContainer.module.scss";
import TodoComponent from "./todo";

export default function TodoContainer() {
	const { data, isPending, error } = useQuery({
		queryKey: ["todos"],
		queryFn: fetchTodos,
	});
	const [parent, enableAnimations] = useAutoAnimate();
	if (isPending) {
		return <p>Loading...</p>;
	}
	if (error) {
		return `An error has occured${error.message}`;
	}

	return (
		<>
			<button type="button" className={styles.button}>
				Show Completed Todos
			</button>
			<div className={styles.todo_container} ref={parent}>
				{data.map((todo) => (
					<TodoComponent key={todo._id} todo={todo} />
				))}
			</div>
		</>
	);
}
