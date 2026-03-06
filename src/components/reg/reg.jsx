import { useState } from "react";
import "./reg.css";

const Regestrate = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
		<div class='noauth'></div>
	);
};

export default Regestrate;