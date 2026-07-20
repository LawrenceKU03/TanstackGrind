import { createServerFn } from "@tanstack/react-start";

export const getPokemonFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
		console.log("Getting Pokemon");
		const data = await res.json();
		return data;
	},
);

export const postPokemonFn = createServerFn({ method: "POST" })
	.inputValidator((name: string) => name)
	.handler(async ({ data }) => {
		console.log("HELLO WORLD POSTING ON THE SERVER", data);
		await new Promise((resolve) => setTimeout(resolve, 3000));
		return { success: true, saved: data };
	});
