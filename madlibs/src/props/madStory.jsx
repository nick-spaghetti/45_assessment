import React, { useEffect, useState } from "react";

const MadStory = ({ color, noun1, adj, noun2 }) => {
	const story = [
		`there was a ${color} ${noun2} who loved a ${adj} ${noun1}`,
		// `going to the ${adj} ${noun2} and I see a  ${color} ${noun1}`,
		// `the ${adj} ${noun1} went and caught a ${color} ${noun2}`,
		// `I went to the ${adj} ${noun1} but they were all out of the ${color} ${noun2}`,
	];
	// const randIdx = Math.floor(Math.random() * stories.length);
	// const [story, setStory] = useState("");
	// useEffect(() => {
	// 	const story = stories[randIdx];
	// 	setStory(story);
	// }, []);
	return (
		<>
			<p>{story}</p>
		</>
	);
};

export default MadStory;
