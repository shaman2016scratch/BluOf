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
				<p class="footer-text">By BluOf</p>
            </div>
        </footer>
	</StrictMode>,
);
