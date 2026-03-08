import { useState } from "react";
import { creators, developers, helpers } from "../../lib/credits.js"
import "./main.css";

const Credits = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
    return (
        <div class='main'>
			<div class="top-panel">
                <a href="https://shaman2016scratch.github.io/BluOf/"><img src='https://shaman2016scratch.github.io/BluOf/bluof-logo.svg' width='25' height='25' /></a>
            </div>
            <h1>Credits</h1>
            <h2>Creators</h2>
            <p><b>{creators[0].name}</b> {creators[0].role}</p>
            <h2>Developers</h2>
            <p><b>{developers[0].name}</b> {developers[0].role}</p>
            <p><b>{developers[1].name}</b> {developers[1].role}</p>
            <p><b>{developers[2].name}</b> {developers[2].role}</p>
            <h2>Helpers</h2>
            <p><b>{helpers[0].name}</b> {helpers[0].role}</p>
            <p><b>{helpers[1].name}</b> {helpers[1].role}</p>
		</div>
    );
};

export default Credits;
