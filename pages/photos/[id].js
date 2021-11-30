import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Body, LinkWrapper, PhotoBox } from '../../src/libs/Styles/photos'
import { getPhotoID } from '../api/api'
import HeaderComponent from '../../src/Components/Header'
import FooterComponent from '../../src/Components/Footer'
import { FaHome } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'

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