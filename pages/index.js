import React from 'react'
import FooterComponent from '../src/Components/Footer'
import HeaderComponent from '../src/Components/Header'
import PhotoList from '../src/Components/PhotoList'
import Head from 'next/head'
import ScrowToTop from '../src/Components/ScrowToTop'


export default function Home() {

  return (
    <>
      <Head>
        <title>Album de Fotos</title>
        <link rel='icon' href="https://i.imgur.com/nAmILPL.png" />
      </Head>

      <ScrowToTop />

      <HeaderComponent />

      <PhotoList />

      <FooterComponent />
    </>
  )
}
