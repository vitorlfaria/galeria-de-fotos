import React, { useState, useEffect } from 'react'
import { PhotoContainer, PhotoBox, Button, BtnWrapper } from "./Styled";
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';



export default function PhotoList() {

    const API_KEY = '563492ad6f9170000100000192c395ea547f40fca590667bf91e8441'

    const [photoData, setPhotoData] = useState([])
    const [pageIndex, setPageIndex] = useState(1)

    useEffect(() => {        
        getPhotoData()
    }, []) 
    
    const getPhotoData = async () => {

        const baseURL = `https://api.pexels.com/v1/search?query=golden_retriever&page=${pageIndex}&per_page=24`
        
        const data = await fetch(baseURL, {
            headers: {
                Authorization: API_KEY
            }
        })
        const convert = await data.json()
        setPhotoData(convert.photos)
    }

    //____________________________________________________________________________________________


    const handleLoadNext = () => {
        setPageIndex(pageIndex + 1)
        console.log(pageIndex)
        getPhotoData()
    }

    const handleLoadPrev = () => {
        setPageIndex(pageIndex - 1)
        console.log(pageIndex)
        getPhotoData()
    }

    //____________________________________________________________________________________________

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
            <BtnWrapper>
                <Button onClick={handleLoadPrev}>Página Anterior <FaAngleLeft className='iconPrev' /> </Button>
                <Button onClick={handleLoadNext}>Proxima Página <FaAngleRight className='iconNext' /> </Button>
            </BtnWrapper>
        </>
    )
}