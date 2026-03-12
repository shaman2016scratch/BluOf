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
            <p>Users are prohibited from</p>
            <p>3.1. Use the service to distribute malware and code</p>
            <p>3.2. Creation, use, and distribution of content that violates the law, copyrights, or terms of use/rules of any service provided by the BluOf Foundation.</p>
			<p>3.3. Host: viruses, malware, or mining code</p>
			<p>3.4. Attempts to bypass the security policies of the BluOf Foundation or other companies, or to destabilize their operations</p>
			<p>3.5. Automated data collection (scraping) without official permission</p>
			<h2>4. Responsibility of the parties</h2>
			<p>4.1. The user is fully responsible for the content of their posts.</p>
			<p>4.2. The BluOf Foundation has the right to remove any post or profile that threatens the service</p>
			<h2>5. Termination of access</h2>
			<p>For violating the rules or terms of use, we may restrict access to the service/services without prior notice.</p>
			<h2>6. Intellectual property </h2>
			<p>All algorithms, code, designs, and mechanisms are the property of the BluOf Foundation</p>
		</div>
    );
};

export default TOS;
