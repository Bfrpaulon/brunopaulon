import React from 'react'
import Photo from './../../Images/Photo.png'
import Image from 'next/image'
export default function PhotoHero() {
  return (
    <Image src={Photo} width={250} height={350} style={{ borderRadius:"10px"}} alt='Photo Hero Bruno Paulon' />
  )
}
