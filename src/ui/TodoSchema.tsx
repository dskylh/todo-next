import { z } from "zod";

export const TodoSchema = z.object({
	_id: z.optional(z.string()),
	name: z.string(),
	description: z.string(),
	completed: z.boolean(),
	completedAt: z.optional(z.string().or(z.null())),
	createdAt: z.optional(z.string().nullable()),
	dueDate: z.string().or(z.null()),
});
