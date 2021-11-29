import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Body, LinkWrapper, PhotoBox } from './styled'
import { getPhotoID } from '../api/api'
import HeaderComponent from '../../src/Components/Header'
import FooterComponent from '../../src/Components/Footer'
import { FaHome } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import styled from "styled-components";

export const Body = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const LinkWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;

    a {
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        background-color: #1099e8;
        padding: .5em 2em .5em 1em;
        border-radius: .5em;
        position: relative;

        .link {
            position: absolute;
            color: #fff;
            top: .5em;
            right: .5em;
        }
    }

    
    
    .home {
        position: absolute;
        color: #fff;
        top: .5em;
        right: .5em;
    }

    @media only screen and (max-width: 768px) {
        width: 80%;
    }

    @media only screen and (max-width: 425px) {
        width: 90%;
    }
`

export const PhotoBox = styled.div`
    width: 50%;
    overflow: hidden;
    margin: 1em auto 3em;
    border-radius: 1em;
    box-shadow: 0 0 20px #ccc;
    
    @media only screen and (max-width: 768px) {
        width: 80%;
    }

    @media only screen and (max-width: 425px) {
        width: 90%;
    }
`





export default function Photos({ pic }) {
    return (
        <Body>
            <Head>
                <title>Image</title>
                <img src="https://i.imgur.com/9Bwjd3z.png" alt="Logo" />
            </Head>
            <HeaderComponent />
            <div>
                <LinkWrapper>
                    <a href={pic.photographer_url} target="_blank">@{pic.photographer}<HiExternalLink className="link" /></a>
                    
                    <Link href="/">Home</Link>
                    <FaHome className="home" />
                </LinkWrapper>
                <PhotoBox>
                    <a href={pic.url} target='_blank'>
                    <Image 
                        src={pic.src.original} 
                        width={pic.width / 4}
                        height={pic.height / 4}
                        layout='responsive'
                        priority
                        loading="eager"
                    />
                    </a>
                </PhotoBox>
            </div>
            <FooterComponent />
        </Body>
    )
}

export async function getServerSideProps({ params }) {
    const pic = await getPhotoID(params.id)
    return {
        props: {
            pic,
        },
    }
}