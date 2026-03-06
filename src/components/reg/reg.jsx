import { useState } from "react";
import "./reg.css";

async function AUTH() {}

const Regestrate = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
		<div class='noauth'>
			<input id="name"/>
			<input id="password"/>
			<button onclick='AUTH()'>AUTH</button>
		</div>
	);
};

export default Regestrate;