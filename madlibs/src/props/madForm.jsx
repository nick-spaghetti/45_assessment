import React, { useState } from "react";
import MadStory from "./madStory";

const MadForm = () => {
	const initialState = {
		color: "",
		noun1: "",
		adj: "",
		noun2: "",
	};
	const [formData, setFormData] = useState(initialState);
	const [showStory, setShowStory] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setShowStory(true);
	};
	const reset = (e) => {
		setFormData(initialState);
		setShowStory(false);
	};
	const isFinished =
		formData.color && formData.noun1 && formData.adj && formData.noun2;
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="color"
					name="color"
					placeholder="color"
					value={formData.color}
					onChange={handleChange}
				/>
				<input
					type="text"
					id="noun1"
					name="noun1"
					placeholder="noun1"
					value={formData.noun1}
					onChange={handleChange}
				/>
				<input
					type="text"
					id="adj"
					name="adj"
					placeholder="adj"
					value={formData.adj}
					onChange={handleChange}
				/>
				<input
					type="text"
					id="noun2"
					name="noun2"
					placeholder="noun2"
					value={formData.noun2}
					onChange={handleChange}
				/>
				<button
					type="submit"
					disabled={!isFinished}>
					generate story
				</button>
				<button
					type="button"
					onClick={reset}>
					reset story
				</button>
			</form>
			{showStory && isFinished && (
				<MadStory
					color={formData.color}
					noun1={formData.noun1}
					adj={formData.adj}
					noun2={formData.noun2}
				/>
			)}
		</>
	);
};

export default MadForm;
