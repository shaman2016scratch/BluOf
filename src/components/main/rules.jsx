import { useState } from "react";
import "./main.css";

const Rules = (props) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    return (
        <div class='main'>
            <h1>Rules of service</h1>
        </div>
    );
};

export default Rules;