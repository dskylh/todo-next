import { z } from "zod";
import { TodoSchema } from "./TodoSchema";

export type TodoType = z.infer<typeof TodoSchema>;
