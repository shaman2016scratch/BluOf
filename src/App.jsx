import { useEffect, useState } from "react";
import Main from "./components/main/main.jsx";
import Noauth from "./components/noauth/noauth.jsx"; 
import Credits from "./components/main/credits.jsx"; 
import { isLogin, getMyUser } from "./lib/user.js";
import "./App.css";

const App = () => {
	const page = window.location.pathname.split("/BluOf")[1]
	const [token, setTokenState] = useState(
	    localStorage.getItem('bluof-session-token'),
	);
	if (page === "/") {
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
	} else if (page === "/credits.html") {
		return (
		    <div className="app-viewport">
			    <Credits />
			</div>
	    );
	}
};

export default App;
