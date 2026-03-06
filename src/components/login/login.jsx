import { useState } from "react";
import "./login.css";

async function login() {
	let data = await fetch('https://api-shaman2016.vercel.app/BluOf/login', {
		body: {
			username: document.getElementById('name'),
			password: document.getElementById('password')
		}
	})
	data = await data.json()
	if (data.ok === false) {
		document.getElementById('login').innerHTML += `
		    <p>ERROR</p>
		`
	} else {
		localStorage.setItem('bluof-session-token', data.result.token)
	}
}

const Login = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
		<div class='login' id='login'>
			<input id="name"/>
			<input id="password"/>
			<button onClick={() => login()}>LOGIN</button>
		</div>
	);
};

export default Login;