import { installFB, settingProjectFB, isInstallFB, getErrFB } from './firebaseApi.js'

const getData = async () => {
    try {
        let out = await fetch('https://api-shaman2016.vercel.app/BluOf/dbApi/getData/')
        out = await out.json()
        return out
    } catch (error) {
        console.error(error.message)
    }
}
export { getData }