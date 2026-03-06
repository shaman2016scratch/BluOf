const installFB = async () => {
    try {
        const loadScript = src => new Promise((resolve, reject) => { 
            if (document.querySelector(`script[src="${src}"]`)) return resolve(); 
            const s = document.createElement('script'); 
            s.src = src; 
            s.onload = resolve; 
            s.onerror = () => reject(`ERROR LOAD SCRIPT: ${src}`); 
            document.head.appendChild(s); 
        }); 
        
        await Promise.all([ 
            loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"), 
            loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"), 
            loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"), 
            loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"), 
            loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js"), 
            loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-functions.js"),
            loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-analytics.js"), 
            loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-remote-config.js"),
            loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-performance.js")
        ]);
    } catch (error) {
        console.error(error.message)
    }
}

const settingProjectFB = async () => {}

const isInstallFB = async () => {}

const getErrFB = async () => {}

export { installFB, settingProjectFB, isInstallFB, getErrFB }