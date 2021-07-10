import React from 'react'
import { Image, Name, Email } from './styles'

const DEFAULT_IMAGE = 'https://reqres.in/img/faces/7-image.jpg'

export const User = ({ cover = DEFAULT_IMAGE, name = '', email = '' }) => {
  return (
    <>
      <Image src={cover} />
      <Name>{name}</Name>
      <Email>{email}</Email>
    </>
  )
}
