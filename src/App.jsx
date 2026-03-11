import { useEffect, useState } from "react";
import Main from "./components/main/main.jsx";
import Noauth from "./components/noauth/noauth.jsx";
import Credits from "./components/main/credits.jsx";
import Login from "./components/login/login.jsx";
import Regestrate from "./components/reg/reg.jsx";
import TP from "./components/tp/tp.jsx";
import TOS from "./components/main/tos.jsx";
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
			    <TP />
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
				<TP />
			    <Credits />
			</div>
	    );
	} else if (page === "/about.html" || page === "/about") {
		return (
		    <div className="app-viewport">
				<TP />
			    <h1>About BluOf</h1>
			</div>
	    );
	} else if (page === "/login.html" || page === "/login") {
		return (
		    <div className="app-viewport">
				<TP />
				{ token ? (
				    <>
						<h1>ERROR 403</h1>
				        <p>You are logged in</p>
					</>
				) : (
				    <>
					    <Login />
					</>
				) }
			</div>
	    );
	} else if (page === "/reg.html" || page === "/reg") {
		return (
		    <div className="app-viewport">
				<TP />
				{ token ? (
				    <>
					    <h1>ERROR 403</h1>
				        <p>You are logged in</p>
					</>
				) : (
				    <>
						<Regestrate />
					</>
				) }
			</div>
	    );
	} else if (page === "/ToS.html" || page === "/ToS") {
		return (
		    <div className="app-viewport">
				<TP />
				<h1>Terms of Service</h1>
				<TOS />
			</div>
	    );
	}
};

export default App;
