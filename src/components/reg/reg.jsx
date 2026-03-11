import { useState } from "react";
import "./reg.css";

async function AUTH() {
	const dataReg = {
		'username': document.getElementById('username'),
		'nickname': document.getElementById('nickname'),
		'password': document.getElementById('password'),
		'email': document.getElementById('email')
	}
}

const Regestrate = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
		<div class='noauth'>
			<p>Your Username: <input id="username" type='text' /></p>
			<p>Your Nickname: <input id="nickname" type='text' /></p>
			<p>Your Password: <input id="password" type='password' /></p>
			<p>Your Email: <input id="email" type='email' /></p>
			<button onclick='AUTH()'>AUTH</button>
		</div>
	);
};

export default Regestrate;