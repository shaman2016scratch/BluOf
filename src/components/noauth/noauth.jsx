import { useState } from "react";
import "./noauth.css";

const Noauth = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
        <div class='noauth' id='noauth'>
			<div class="top-panel">
                <a href="https://shaman2016scratch.github.io/BluOf/"><img src='https://shaman2016scratch.github.io/BluOf/bluof-logo.svg' /></a>
				<p onclick=''>LOG IN</p>
				<p onclick=''>AUTH</p>
            </div>
		</div>
    );
};

export default Noauth;