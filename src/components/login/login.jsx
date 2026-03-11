import { useState } from "react";
import "./login.css";

async function login() {
	let data = await fetch('https://api-shaman2016.vercel.app/BluOf/login', {
		body: {
			email: document.getElementById('email'),
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
			<p>Your Email: <input type='emai,' id="email"/></p>
			<p>Your Password: <input type='password' id="password"/></p>
			<button onClick={() => login()}>LOGIN</button>
		</div>
	);
};

export default Login;