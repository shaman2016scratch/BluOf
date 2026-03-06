const getData = async () => {
    try {
        let out = await fetch('https://api-shaman2016.vercel.app/BluOf/getData/')
        out = await out.json()
        return out
    } catch (error) {
        console.error(error.message)
    }
}
export { getData }