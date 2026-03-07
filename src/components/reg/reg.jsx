import { useState } from "react";
import "./reg.css";

async function AUTH() {}

const Regestrate = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
		<div class='noauth'>
			<p>Your Username: </p><input id="username"/>
			<p>Your Nickname: </p><input id="nickname"/>
			<p>Your Password: </p><input id="password"/>
			<button onclick='AUTH()'>AUTH</button>
		</div>
	);
};

export default Regestrate;