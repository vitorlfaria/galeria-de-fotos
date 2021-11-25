const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API;

export const GetPhotos = async () => {
    const res = await fetch(
        'https://api.pexels.com/v1/curated?per_page=12', {
            headers: {
                Athorization: '563492ad6f9170000100000192c395ea547f40fca590667bf91e8441',
            },
        }
    )
    const responseJson = await res.json()
    console.log(responseJson)

    return responseJson.photos;
}