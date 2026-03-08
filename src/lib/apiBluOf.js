import { installFB, settingFB, isInstallFB, getErrFB, clearErrFB, singUpFB, singInFB } from './firebaseApi.js'

const getData = async () => {
    try {
        if (!isInstallFB) {
            await installFB()
        }
        let out = await fetch('https://api-shaman2016.vercel.app/BluOf/dbApi/getData/')
        out = await out.json()
        return out
    } catch (error) {
        console.error(error.message)
    }
}
export { getData }