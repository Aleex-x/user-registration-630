import React from 'react'
import { Div, InnerDiv } from './styles'

export const Card = ({ leftRender, rightRender }) => (
  <>
    <Div>
      <InnerDiv left>{leftRender}</InnerDiv>
      <InnerDiv left={false}>{rightRender}</InnerDiv>
    </Div>
  </>
)
