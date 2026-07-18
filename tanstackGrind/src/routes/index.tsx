import { createFileRoute } from "@tanstack/react-router";
import SkillCard from "./components/SkillCard";

export const Route = createFileRoute("/")({
	component: Home,
	loader: async () => {
		const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
		const data = await res.json();
		return data;
	},
	errorComponent: ({ error }) => {
		return <p>Oops {error.message}</p>;
	},
	pendingMs: 500,
});

function Home() {
	const data = Route.useLoaderData();

	console.log(data, "HELLL");
	return (
		<div className="p-8 bg-neutral-400 text-white">
			<SkillCard name={"OpenClaw"} />
		</div>
	);
}
