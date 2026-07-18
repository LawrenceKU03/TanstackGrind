import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$user")({
	component: RouteComponent,
});

function RouteComponent() {
	const { user } = Route.useParams();
	return <div>Hello "/users/$user"! {user}</div>;
}
