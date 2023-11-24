import { useState } from "react";
import styles from "./styling/todo.module.scss";
import { z } from "zod";

export const TodoSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  completed: z.boolean(),
  createdAt: z.string(),
  completedAt: z.string().or(z.null()),
  dueDate: z.string().or(z.null()),
});

export type TodoType = z.infer<typeof TodoSchema>

export default function TodoComponent(props: { todo: TodoType }) {
  const { todo } = props;
  const [todoState, setTodoState] = useState(todo);

  function handleToggle(): void {
    const updatedTodo = { ...todoState, completed: !todoState.completed };
    setTodoState(updatedTodo);
  }

  return (
    <div>
      <span className={styles.date}>
        {new Date(todo.createdAt).toLocaleDateString()}{" "}
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
