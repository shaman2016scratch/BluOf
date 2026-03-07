import { useEffect, useState } from "react";
import Main from "./components/main/main.jsx";
import Noauth from "./components/noauth/noauth.jsx"; 
import { isLogin, getMyUser } from "./lib/user.js";
import "./App.css";

const App = () => {
	const [token, setTokenState] = useState(
	    localStorage.getItem('bluof-session-token'),
	);
	return (
		<div className="app-viewport">
			{ token ? (
			    <>
				    <Main></Main>
				</>
				
			) : (
				<Noauth></Noauth>
			) }
		</div>
	);
};

export default App;
