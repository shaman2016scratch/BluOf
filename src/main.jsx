import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import yourInTopPanel from "./components/yourInTopPanel/yourInTopPanel.jsx";
import "./index.css";
import App from "./App.jsx";

const [token, setTokenState] = useState(
	localStorage.getItem('bluof-session-token'),
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
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
		<App />
		<footer>
            <div class="container">
                <p class="footer-text">© 2026, BluOf. A modern social network with extensive functionality and open source code</p>
				<p class="footer-text">By BluOf</p>
				<p class='footer-text'>
				    <a href='/BluOf/credits.html'>CREDITS</a>|
					<a href='/BluOf/about.html'>ABOUT</a>
				</p>
            </div>
        </footer>
	</StrictMode>,
);
