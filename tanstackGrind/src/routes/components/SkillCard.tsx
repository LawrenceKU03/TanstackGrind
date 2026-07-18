import { Heart } from "lucide-react";
import { useState } from "react";

type SKillCardProps = {
	name: string;
};

const index = ({ name }: SKillCardProps) => {
	const [liked, setLiked] = useState(false);
	const likes = liked ? 1 : 0;

	return (
		<div>
			Skills <h2>{name}</h2>
			<p>{likes === 1 ? "likes" : "like"}</p>
			<button type="button" onClick={() => setLiked(!liked)}>
				<Heart fill={liked ? "currentColor" : "none"} />
			</button>
		</div>
	);
};

export default index;
