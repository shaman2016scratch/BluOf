import { useEffect, useState } from "react";
import Regestrate from "./components/reg/reg.jsx";
import Login from "./components/login/login.jsx"; 
import { isLogin, getMyUser } from "./lib/user.js";
import "./App.css";

const App = () => {
	let token
	if (isLogin()) {
		token = getMyUser().session
	} else {
		token = undefined
	}
	return (
		<div className="app-viewport">
			{ token ? (
				<main></main>
			) : (
				<noauth></noauth>
			) }
		</div>
	);
};

export default App;