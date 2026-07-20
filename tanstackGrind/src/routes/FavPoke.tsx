import { postPokemonFn } from "#/server/getPokemon";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

export const Route = createFileRoute("/FavPoke")({
	component: RouteComponent,
});

function RouteComponent() {
	const postPokemon = useServerFn(postPokemonFn);
	const [name, setName] = useState<string>("");
	const [isSending, setIsSending] = useState<boolean>(false);

	return (
		<div>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					setIsSending(true);
					await postPokemon({ data: name });
					setIsSending(false);
				}}
			>
				<input type="text" onChange={(e) => setName(e.target.value)} />
				<button type="submit">{isSending ? "Sending" : "Save"}</button>
			</form>
		</div>
	);
}
