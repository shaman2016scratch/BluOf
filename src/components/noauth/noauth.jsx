import { useState } from "react";
import "./noauth.css";

const Noauth = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
        <div class='noauth' id='noauth'>
			<h1><img src='https://shaman2016scratch.github.io/BluOf/bluof-logo.svg' width='45' height='45' />BluOf</h1>
			<p>Hello! Welcome to BluOf! Here, we welcome both regular users and developers and teachers. Unlike many social networks, this social network is aimed at people of all ages, starting from the age of 9</p>
			<p>BluOf was created by the BluOf Foundation on February 6, 2026</p>
		</div>
    );
};

export default Noauth;
