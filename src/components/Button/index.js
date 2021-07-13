import React from 'react'
import { Button as ButtonStyled, Div } from './styles'
import { FcGoogle } from 'react-icons/fc'

export const Button = ({
  primary = true,
  label = 'text',
  onClick,
  disabled
}) => (
  <ButtonStyled disabled={disabled} onClick={onClick} primary={primary}>
    <Div>
      {!primary && <FcGoogle />}
      {label}
    </Div>
  </ButtonStyled>
)
