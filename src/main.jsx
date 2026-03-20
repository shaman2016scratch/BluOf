import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import metadata from "./lib/metadata.js";

if (!localStorage.getItem('bluof-language')) {
	localStorage.setItem('bluof-language', 'en')
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<footer>
            <div class="container">
                <p class="footer-text">© 2026, BluOf. A modern social network with extensive functionality and open source code</p>
				<p class="footer-text">By BluOf Foundation</p>
				<p class='footer-text'>© MIT LICENSE</p>
				<p class='footer-text'>
				    <a href='/BluOf/credits.html'>CREDITS</a>|
					<a href='/BluOf/about.html'>ABOUT</a>|
					<a href='/BluOf/ToS.html'>Terms Of Service and Use</a>|
					<a href='/BluOf/ToS.html'>Privacy Policy</a>|
					<a href='/BluOf/ToS.html'>Rules</a>
				</p>
				<p class="footer-text">Version: {metadata.version}</p>
				<label for="languageUser">Your Language: </label>
				<select id='languageUser'>
                    <option value="en" id='langEn'>English</option>
                    <option value="ru" id='langRu'>Русский</option>
                </select><button onclick="localStorage.setItem('bluof-language', document.getElementById('languageUser').value)">SET LANG</button>
				<p class="footer-text"><i>The website is written in JavaScript React and JavaScript by the BluOf Foundation</i></p>
            </div>
        </footer>
	</StrictMode>
);