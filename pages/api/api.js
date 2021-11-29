
const API_KEY = '563492ad6f9170000100000192c395ea547f40fca590667bf91e8441'

export const getPhotoID = async (id) => {

    const baseURL = `https://api.pexels.com/v1/photos/${id}`
    
    const data = await fetch(baseURL, {
        headers: {
            Authorization: API_KEY
        }
    })
    const convertJSON = await data.json()
    return convertJSON
}