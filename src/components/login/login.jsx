import { useState } from "react";
import "./login.css";

const Login = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
		<div class='login'>
			<input id="name"/>
			<input id="password"/>
			<button onclick='login()'>LOGIN</button>
		</div>
	);
};

export default Login;