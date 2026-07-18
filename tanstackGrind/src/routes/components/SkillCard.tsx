import { Heart } from "lucide-react";
import { useState } from "react";

type SKillCardProps = {
	name: string;
};

const index = ({ name }: SKillCardProps) => {
	const [liked, setLiked] = useState(false);
	const likes = liked ? 1 : 0;

	return (
		<div className="w-[300px] h-max bg-green-800 text-white rounded-md p-2">
			<p className="mb-3 uppercase flex flex-row items-center ">
				Skills <h2 className="ml-2 font-bold">{name}</h2>
			</p>
			<button
				type="button"
				onClick={() => setLiked(!liked)}
				className="flex flex-row items-center"
			>
				<Heart fill={liked ? "currentColor" : "none"} />
				<p className="ml-2">{likes === 1 ? "likes" : "like"}</p>
			</button>
		</div>
	);
};

export default index;
