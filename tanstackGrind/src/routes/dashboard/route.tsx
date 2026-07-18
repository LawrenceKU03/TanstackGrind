import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<aside>Testing</aside>
			<div>
				<Outlet />
			</div>
		</div>
	);
}
