import React from 'react'
import { PhotoContainer, PhotoBox } from "./Styled";
import { useState, useEffect } from "react";
import Image from 'next/image'


export default function PhotoList() {

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
        setPhotoData(convert.photos)
    }

    return (
        <>
            <PhotoContainer>
                <form>
                <input type="text" placeholder="Buscar imagens" />
                </form>

                    <PhotoBox>
                    {
                        photoData.map((pic) => (
                            <Image src={pic.src.portrait} height={600} width={400} alt={pic.url}/>
                        ))                        
                    }
                    </PhotoBox>

                {/* <PhotoBox>
                    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/3397939/pexels-photo-3397939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/1870301/pexels-photo-1870301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/752383/pexels-photo-752383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/546228/pexels-photo-546228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/1959053/pexels-photo-1959053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox>
                <PhotoBox>
                    <img src="https://images.pexels.com/photos/3397939/pexels-photo-3397939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h3>Artista</h3>
                </PhotoBox> */}
            </PhotoContainer>
        </>
    )
}

export async function getServerSideProps() {
    const data = await getData();
    return {
      props: {
        data,
      },
    };
  }