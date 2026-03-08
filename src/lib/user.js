import { installFB, settingFB, isInstallFB, getErrFB, clearErrFB, singUpFB, singInFB } from './firebaseApi.js'
import { getData } from './apiBluOf.js'

const isLogin = async () => {
    try {
        if (!isInstallFB) {
            await installFB()
        }
        let token = localStorage.getItem('bluof-session-token')
        if (token) {
            return true
        }
    } catch (error) {
        console.error(error.message)
    }
    return false
}
const getMyUser = async () => {
    try {
        // prototype
        if (!isInstallFB) {
            await installFB()
        }
        let token = localStorage.getItem('bluof-session-token')
        let data = {
            'token': 'BluOf123456789098:qwertyuiopasdfghjklzxcvbnmqwer',
            'name': 'User1234567890'
        }
        return data
    } catch (error) {
        console.error(error.message)
    }
}
const getUser = async (name) => {
    try {
        if (!isInstallFB) {
            await installFB()
        }
        let data = await fetch(`https://api-shaman2016.vercel.app/BluOf/users/${name}`)
        data = await data.json()
        return data
    } catch (error) {
        console.error(error.message)
    }
}
export { isLogin, getMyUser, getUser }
