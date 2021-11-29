import React, { useState, useEffect } from 'react'
import { PhotoContainer, PhotoBox, Button, BtnWrapper, Form } from "./Styled";
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link'



export default function PhotoList() {

    const API_KEY = '563492ad6f9170000100000192c395ea547f40fca590667bf91e8441'

    const [photoData, setPhotoData] = useState([])
    const [perPage, setPerPage] = useState(12)
    const [searchQuery, setSearchQuery] = useState("golden retriever")

    useEffect(async () => {        
        getPhotoData()
    }, []) 
    
    const getPhotoData = async () => {
        
        const baseURL = `https://api.pexels.com/v1/search?query=${searchQuery}&page=1&per_page=${perPage}`
        
        const data = await fetch(baseURL, {
            headers: {
                Authorization: API_KEY
            }
        })
        const convert = await data.json()
        setPhotoData(convert.photos)
        document.querySelector("#search").value = ""
    }

    const getQueryData = async (searchQuery) => {

        const baseURL = `https://api.pexels.com/v1/search?query=${searchQuery}&page=1&per_page=12`
        
        const data = await fetch(baseURL, {
            headers: {
                Authorization: API_KEY
            }
        })
        const convert = await data.json()
        return convert.photos
    }

    //____________________________________________________________________________________________


    const handleLoadMore = async () => {
        await setPerPage(perPage + 12)
        await getPhotoData()
    }

    const handleSubmit = async (e) => {
        await e.preventDefault()
        const res = await getQueryData(searchQuery)
        await setPhotoData(res)
        setPerPage(12)
        document.querySelector("#search").value = ""
    }

    //____________________________________________________________________________________________

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <input 
                id="search"
                type="search" 
                placeholder="buscar imagens..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="search" onClick={handleSubmit} />
            </Form>
            <PhotoContainer>
                {
                photoData.map((pic) => (
                    <Link href={`photos/${pic.id}`}>
                        <PhotoBox key={pic.id}>
                            <Image 
                                src={pic.src.portrait} 
                                width={400}
                                height={600}
                                layout='responsive'
                                alt={pic.url}/>
                            <h3>{pic.photographer}</h3>
                        </PhotoBox>
                    </Link>
                ))
                }
            </PhotoContainer>
            <BtnWrapper>
                <Button onClick={handleLoadMore}>Carregar Mais</Button>
            </BtnWrapper>
        </>
    )
}