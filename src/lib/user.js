import { getData } from './apiBluOf.js'

const isLogin = async () => {
    try {
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
        let token = localStorage.getItem('bluof-session-token')
        let data = await fetch('https://api-shaman2016.vercel.app/BluOf/session', {
            headers: {
                sessionToken: token
            }
        })
        data = await data.json()
        return data
    } catch (error) {
        console.error(error.message)
    }
}
const getUser = async (name) => {
    try {
        let data = await fetch(`https://api-shaman2016.vercel.app/BluOf/users/${name}`)
        data = await data.json()
        return data
    } catch (error) {
        console.error(error.message)
    }
}
export { isLogin, getMyUser, getUser }
