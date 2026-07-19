import { createFileRoute } from "@tanstack/react-router";
import SkillCard from "./components/SkillCard";
import { getPokemonFn } from "#/server/getPokemon";

export const Route = createFileRoute("/")({
	component: Home,
	loader: async () => {
		const res = await getPokemonFn();
		return res;
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
