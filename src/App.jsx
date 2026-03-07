import { useEffect, useState } from "react";
import Main from "./components/main/main.jsx";
import Noauth from "./components/noauth/noauth.jsx"; 
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