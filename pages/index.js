import React from 'react'
import { FooterComponent } from '../src/Components/Footer'
import HeaderComponent from '../src/Components/Header'
import PhotoList from '../src/Components/PhotoList'


export default function Home() {

  return (
    <>
      <HeaderComponent />

      <PhotoList />

      <FooterComponent />
    </>
  )
}
