import { useState } from "react";
import { creators, developers, helpers } from "../../lib/credits.js"
import "./main.css";

function githubUser(item) {
    if (!item.linkOnGithub) {
        return ('Github');
    } else {
        let link = `https://github.com/${item.linkOnGithub}`
        return (
            <a href={ link }>Github</a>
        );
    }
}

const Credits = (props) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
    return (
        <div class='main'>
            <h1>Credits</h1>
            <h2>Creators</h2>
            <p><b>{creators[0].name}</b> {creators[0].role} | { githubUser(creators[0]) }</p>
            <h2>Developers</h2>
            <p><b>{developers[0].name}</b> {developers[0].role} | { githubUser(developers[0]) }</p>
            <p><b>{developers[1].name}</b> {developers[1].role} | { githubUser(developers[1]) }</p>
            <p><b>{developers[2].name}</b> {developers[2].role} | { githubUser(developers[2]) }</p>
            <h2>Helpers</h2>
            <p><b>{helpers[0].name}</b> {helpers[0].role} | { githubUser(helpers[0]) }</p>
            <p><b>{helpers[1].name}</b> {helpers[1].role} | { githubUser(helpers[1]) }</p>
		</div>
    );
};

export default Credits;
