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
	if (page === "/" || page === "/index.html" || page === "/index.html") {
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
	} else if (page === "/credits.html" || page === "/credits") {
		return (
		    <div className="app-viewport">
			    <Credits />
			</div>
	    );
	} else if (page === "/about.html" || page === "/about") {
		return (
		    <div className="app-viewport">
			    <h1>About BluOf</h1>
			</div>
	    );
	}
};

export default App;
