import React, { useState, useEffect } from "react";

export default function GetPhotos() {

    const [photoData, setPhotoData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const data = await fetch('https://api.pexels.com/v1/curated?per_page=12', {
            headers: {
                'Authorization': '563492ad6f9170000100000192c395ea547f40fca590667bf91e8441'
            }
        })
        const convert = await data.json()
        setPhotoData(convert)
    }

    const fotos = photoData.photos
    console.log(fotos)
}