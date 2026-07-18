import { createFileRoute } from "@tanstack/react-router";
import SkillCard from "./components/SkillCard";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="p-8 bg-neutral-400 text-white">
			<SkillCard name={"OpenClaw"} />
		</div>
	);
}
