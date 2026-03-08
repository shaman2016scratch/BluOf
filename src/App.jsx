import { useEffect, useState } from "react";
import Main from "./components/main/main.jsx";
import Noauth from "./components/noauth/noauth.jsx"; 
import { isLogin, getMyUser } from "./lib/user.js";
import "./App.css";

const App = () => {
	const [token, setTokenState] = useState(
	    localStorage.getItem('bluof-session-token'),
	);
	if (page === "main") {
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
	} else if (page === "credits") {
		return (
		    <div className="app-viewport"></div>
	    );
	}
};

export default App;
