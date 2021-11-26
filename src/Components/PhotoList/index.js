import React from 'react'
import { PhotoContainer, PhotoBox, Button } from "./Styled";
import { useState, useEffect } from "react";
import Image from 'next/image'


export default function PhotoList() {

    const API_KEY = '563492ad6f9170000100000192c395ea547f40fca590667bf91e8441'

    // Fetch da api de fotos
    const [photoData, setPhotoData] = useState([])

    useEffect(() => {
        getPhotoData()
    }, [])

    const getPhotoData = async () => {

        const data = await fetch('https://api.pexels.com/v1/search?query=golden_retriever&page=1&per_page=12', {
            headers: {
                Authorization: API_KEY
            }
        })
        const convert = await data.json()
        setPhotoData(convert.photos)
    }

    return (
        <>
            <PhotoContainer>
                {
                photoData.map((pic) => (
                    <PhotoBox key={pic.id}>
                        <Image 
                            src={pic.src.portrait} 
                            width={400}
                            height={600}
                            layout='responsive'
                            alt={pic.url}/>
                        <h3>{pic.photographer}</h3>
                    </PhotoBox>
                ))
                }
            </PhotoContainer>
            <Button>mostrar mais</Button>
        </>
    )
}