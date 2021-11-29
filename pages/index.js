import React from 'react'
import FooterComponent from '../src/Components/Footer'
import HeaderComponent from '../src/Components/Header'
import PhotoList from '../src/Components/PhotoList'
import Head from 'next/head'


export default function Home() {

  return (
    <>
      <Head>
        <title>Album de Fotos</title>
        <link rel='icon' href="https://i.imgur.com/nAmILPL.png" />
      </Head>
      <HeaderComponent />

      <PhotoList />

      <FooterComponent />
    </>
  )
}
