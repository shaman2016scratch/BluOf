import { useState } from "react";
import { creators, developers, helpers } from "../../lib/credits.js"
import "./main.css";

function githubUser(item) {
    if (!item.linkInGithub) {
        return ('Github');
    } else {
        let link = `https://github.com/${item.githubName}`
        return (
            <a href={ link }>Github</a>
        );
    }
}

function siteUser(item) {
    if (!item.linkSite) {
        return ('Web site');
    } else {
        if (item.linkSite === 'github') {
            let link = `https://${item.githubName}.github.io/`
            return (
                <a href={ link }>Web site</a>
            );
        } else if (link.linkSite === 'vercel') {
            let link = `https://${item.vercelSite}.vercel.app/`
            return (
                <a href={ link }>Web site</a>
            );
        } else {
            let link = `https://${item.linkSite}/`
            return (
                <a href={ link }>Web site</a>
            );
        }
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
            <p><b>{creators[0].name}</b> {creators[0].role} | { githubUser(creators[0]) } | { siteUser(creators[0]) }</p>
            <h2>Developers</h2>
            <p><b>{developers[0].name}</b> {developers[0].role} | { githubUser(developers[0]) } | { siteUser(developers[0]) }</p>
            <p><b>{developers[1].name}</b> {developers[1].role} | { githubUser(developers[1]) } | { siteUser(developers[1]) }</p>
            <p><b>{developers[2].name}</b> {developers[2].role} | { githubUser(developers[2]) } | { siteUser(developers[2]) }</p>
            <h2>Helpers</h2>
            <p><b>{helpers[0].name}</b> {helpers[0].role} | { githubUser(helpers[0]) } | { siteUser(helpers[0]) }</p>
            <p><b>{helpers[1].name}</b> {helpers[1].role} | { githubUser(helpers[1]) } | { siteUser(helpers[1]) }</p>
		</div>
    );
};

export default Credits;
