import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/api/hello")({
	server: {
		handlers: {
			GET: async ({ request }) => {
				console.log("SOMEONE HIT OUR PUBLIC API");
				return Response.json({
					message: "Hiii",
				});
			},
		},
	},
	component: Comp,
});

const Comp = () => {
	const [btnData, setBtnData] = useState<string>("Nothing here! click me");

	const clickAction = async () => {
		const data = await fetch("/api/hello");
		console.log(data);
		setBtnData(data.message);
	};

	return (
		<div>
			<button onClick={clickAction}>{btnData}</button>
		</div>
	);
};
