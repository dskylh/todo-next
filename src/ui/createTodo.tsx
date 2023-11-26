import postTodo from "@/api/postTodo";
import styles from "@/ui/styling/createTodo.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TodoType } from "./TodoType";
import autoAnimate from "@formkit/auto-animate";

export default function CreateTodo() {
	const queryClient = useQueryClient();
	const [todoName, setTodoName] = useState("");
	const [todoDescription, setTodoDescription] = useState("");
	const [todoDueDate, setTodoDueDate] = useState("");
	const [show, setShow] = useState(false);
	const parent = useRef(null);

	const reveal = () => setShow(!show);
	// useEffect(() => {
	// 	parent.current && autoAnimate(parent.current);
	// });

	const mutation = useMutation({
		mutationFn: postTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
	});

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const todo: TodoType = {
			name: todoName,
			description: todoDescription,
			dueDate: todoDueDate,
			completed: false,
		};
		const mutationPromise = mutation.mutateAsync(todo);
		toast.promise(mutationPromise, {
			pending: "Adding todo...",
			success: "Todo Added!",
			error: "An error occured",
		});
	}

	return (
		<div ref={parent} className="flex flex-col items-center justify-center">
			<button onClick={reveal} type="button">
				Create Todo
			</button>
			{show && (
				<form onSubmit={handleSubmit} className={styles.form_container}>
					<label htmlFor="name">Name</label>
					<input
						required
						id="name"
						name="name"
						type="text"
						onChange={(e) => setTodoName(e.target.value)}
						className={`${styles.item} ${styles.input}`}
					/>
					<label htmlFor="description">Description</label>
					<input
						required
						id="description"
						name="description"
						type="text"
						onChange={(e) => setTodoDescription(e.target.value)}
						className={styles.item}
					/>
					<label htmlFor="dueDate">Due Date</label>
					<input
						required
						id="dueDate"
						name="dueDate"
						type="date"
						onChange={(e) => setTodoDueDate(e.target.value)}
						className={styles.item}
					/>
					<button type="submit" className={styles.submit_button}>
						Submit
					</button>
				</form>
			)}

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				theme="dark"
			/>
		</div>
	);
}
