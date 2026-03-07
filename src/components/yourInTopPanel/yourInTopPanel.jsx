import { useState } from "react";

const yourInTopPanel = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
		<div class='profile'></div>
	);
};

export default yourInTopPanel;