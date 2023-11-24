"use client";
import CreateTodo from "@/ui/createTodo";
import TodoContainer from "@/ui/todoContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function Page() {
	return (
		<QueryClientProvider client={queryClient}>
			<CreateTodo />
			<TodoContainer />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
