import React, { useState, useEffect } from 'react'
import { PhotoContainer, PhotoBox, Button } from "./Styled";
import Image from 'next/image'



export default function PhotoList() {

    const API_KEY = '563492ad6f9170000100000192c395ea547f40fca590667bf91e8441'

    const [photoData, setPhotoData] = useState([])
    const [pageIndex, setPageIndex] = useState([])


    useEffect(() => {
        getPhotoData()
    }, [])



    const getPhotoData = async (pageIndex) => {

        const baseURL = `https://api.pexels.com/v1/search?query=golden_retriever&page=${pageIndex}&per_page=12`


        const data = await fetch(baseURL, {
            headers: {
                Authorization: API_KEY
            }
        })
        const convert = await data.json()
        setPhotoData(convert.photos)
    }

    //____________________________________________________________________________________________

    const [photoList, setPhotoList] = useState([])

    const handleLoadMore = () => {
        setPageIndex(pageIndex+1)

        const getLoadData = (pageIndex) => {

            const baseURL = `https://api.pexels.com/v1/search?query=golden_retriever&page=${pageIndex}&per_page=12`
    
    
            const data = fetch(baseURL, {
                headers: {
                    Authorization: API_KEY
                }
            })
            const convert = data.json()
            setPhotoData(convert.photos)
        }

        setPhotoList(photoList.concat(<Photos key={photoList.length} />))
    }

    const Photos = () => {
        return <PhotoContainer>
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
            {photoList}
            <Button onClick={handleLoadMore}>mostrar mais</Button>
        </>
    )
}