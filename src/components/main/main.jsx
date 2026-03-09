import { useState } from "react";
import "./main.css";

const Main = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
        <div class='main'>
			<h1><img src='https://shaman2016scratch.github.io/BluOf/bluof-logo.svg' width='45' height='45' />BluOf</h1>
		</div>
    );
};

export default Main;
