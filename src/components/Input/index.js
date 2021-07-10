import React from 'react'
import { Input as InputStyled, Div, DivWrapper } from './styles'
import { FiUnlock, FiUser } from 'react-icons/fi'

export const Input = ({ type = 'text', placeholder = 'placeholder' }) => (
  <Div>
    <DivWrapper>
      <InputStyled type={type} placeholder={placeholder} />
      {type === 'text' ? <FiUser /> : <FiUnlock />}
    </DivWrapper>
  </Div>
)
