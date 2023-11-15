import React from 'react'
import Logo from './../../public/Logo.svg'
import Image from 'next/image'
export default function LogoIcon() {
  return (
    <Image src={Logo} width={150} height={150} alt='Logo' />
  )
}
