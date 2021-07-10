import React from 'react'
import { Input as InputStyled } from './styles'

export const Input = ({
  type = 'simple',
  placeholder = 'placeholder',
  icon,
  text = 'text'
}) => (
  <>
    <h1>{text}</h1>
    <InputStyled type='text' placeholder={placeholder} />
  </>
)
