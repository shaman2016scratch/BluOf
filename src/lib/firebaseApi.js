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
        window.fbData = {
            'firebase': null,
            'db': null,
            'auth': null,
            'lastErrorMessage': null,
            'firestore': null,
            'storage': null,
            'functions': null,
            'analytics': null,
            'remoteConfig': null,
            'performance': null
        }
        window.fbInst = true
    } catch (error) {
        console.error(error.message)
    }
}

const settingFB = async (config) => {
    if (window.fbInst) {
        try {
            if (window.firebase.apps.length) { 
               fbData.firebase = window.firebase.app(); 
            } else { 
               fbData.firebase = window.firebase.initializeApp(config); 
            } 
            fbData.auth = firebase.auth(); 
            fbData.db = firebase.database(); 
            fbData.firestore = firebase.firestore(); 
            fbData.storage = firebase.storage(); 
            fbData.functions = firebase.functions(); 
            fbData.analytics = firebase.analytics();
            fbData.remoteConfig = firebase.remoteConfig();
            fbData.performance = firebase.performance();
        } catch (error) {
            console.error(error.message)
        }
    } else {
        console.error('FireBasr SDK is not installed')
    }
}

const isInstallFB = async () => {
    if (window.fbInst) {
        return true
    } else {
        return false
    }
}

const getErrFB = async () => {
    return fbData.lastErrorMessage
}

const clearErrFB = async () => {
    fbData.lastErrorMessage = ''
}

const singUpFB = async (email, password) => {}

const singInFB = async (email, password) => {}

const settingsProjectFB = async (ak, id, dbUrl) => {}

export { installFB, settingFB, isInstallFB, getErrFB, clearErrFB, singUpFB, singInFB, settingsProjectFB }