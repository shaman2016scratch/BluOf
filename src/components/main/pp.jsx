import { useState } from "react";
import "./main.css";

const PP = (props) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    return (
        <div class='main'>
            <h1>Privacy Policy</h1>
        </div>
    );
};

export default PP;