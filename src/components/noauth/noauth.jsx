import { useState } from "react";
import "./noauth.css";

const Noauth = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
        <div class='noauth'></div>
    );
};

export default Noauth;