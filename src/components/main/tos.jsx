import { useState } from "react";
import "./main.css";

const TOS = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
    return (
        <div class='main'>
            <p>By using BluOf, you agree to the terms of use. Please read them carefully</p>
            <h2>1. Acceptance</h2>
            <p>You must accept the privacy policy and rules</p>
            <h2>2. Basic</h2>
            <p>2.1. The BluOf service and similar products are provided by the BluOf Foundation as is and in full.</p>
            <p>2.2. The BluOf Foundation has the right to change any feature or service without prior notice</p>
            <h2>3. Usage rules</h2>
            <p>users are prohibited from</p>
            <p>3.1. Use the service to distribute malware and code</p>
            <p>3.2. Creation, use, and distribution of content that violates the law, copyrights, or terms of use/rules of any service provided by the BluOf Foundation.</p>
		</div>
    );
};

export default TOS;
