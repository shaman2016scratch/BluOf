import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<footer>
            <div class="container">
                <p class="footer-text">© 2026, BluOf. A modern social network with extensive functionality and open source code</p>
				<p class="footer-text">By BluOf Foundation</p>
				<p class='footer-text'>
				    <a href='/BluOf/credits.html'>CREDITS</a>|
					<a href='/BluOf/about.html'>ABOUT</a>|
					<a href='/BluOf/ToS.html'>Terms Of Servise and Use</a>
				</p>
				<p class="footer-text">Version: 0.0.1 Alpha</p>
            </div>
        </footer>
	</StrictMode>,
);
