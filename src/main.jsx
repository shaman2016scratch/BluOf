import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import metadata from "./lib/metadata.js";

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
                </select>
				<p class="footer-text"><i>The website is written in JavaScript React and JavaScript by the BluOf Foundation</i></p>
            </div>
        </footer>
	</StrictMode>
);

if (!localStorage.getItem('bluof-language')) {
	localStorage.setItem('bluof-language', 'en')
}

if (localStorage.getItem('bluof-language') == 'en') {
	document.getElementById('langEn').selected === 'true'
	document.getElementById('langRu').selected === 'false'
} else if (localStorage.getItem('bluof-language') == 'ru') {
	document.getElementById('langRu').selected === 'true'
	document.getElementById('langEn').selected === 'false'
}

document.getElementById('languageUser').addEventListener('change', function(event) {
	localStorage.setItem('bluof-language', document.getElementById('languageUser').value)
})