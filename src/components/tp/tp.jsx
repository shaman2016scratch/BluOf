import { useState } from "react";
import yourInTopPanel from "../yourInTopPanel/yourInTopPanel.jsx";

const Main = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [token, setTokenState] = useState(
	    localStorage.getItem('bluof-session-token'),
	);
	return (
		{ token ? (
            <>
                <a href="https://shaman2016scratch.github.io/BluOf/"><img src='https://shaman2016scratch.github.io/BluOf/bluof-logo.svg' width='25' height='25' /></a>
                <yourInTopPanel />
            </>
        ) : (
            <>
                <div class="top-panel">
				    <a href="https://shaman2016scratch.github.io/BluOf/"><img src='https://shaman2016scratch.github.io/BluOf/bluof-logo.svg' width='25' height='25' /></a>
				    <a href='/BluOf/login.html'>LOG IN</a>
			        <a href='/BluOf/reg.html'>REGESTRATION</a>
                </div>
            </>
        )}
	);
};

export default Main;
