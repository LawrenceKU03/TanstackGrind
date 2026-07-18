import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components/Skill")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Skills Component</div>;
}
