import React from 'react'
import { Button as ButtonStyled, Div } from './styles'
import { FcGoogle } from 'react-icons/fc'

export const Button = ({ primary = true, label = 'text' }) => (
  <div>
    <ButtonStyled primary={primary} type='button'>
      <Div>
        {!primary && <FcGoogle />}
        {label}
      </Div>
    </ButtonStyled>
  </div>
)
