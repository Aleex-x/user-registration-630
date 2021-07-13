import React from 'react'
import { Image, Name, Email, Div } from './styles'

const DEFAULT_IMAGE = 'https://reqres.in/img/faces/7-image.jpg'

export const UserCard = ({ cover = DEFAULT_IMAGE, name = '', email = '' }) => {
  return (
    <Div>
      <Image src={cover} />
      <Name>{name}</Name>
      <Email>{email}</Email>
    </Div>
  )
}
