import React from 'react'
import { Card } from '../Card'
import { Form } from '../Form'
import { Div } from './styles'

export const Login = () => (
  <Div>
    <Card leftRender={<h1>LEFT</h1>} rightRender={<Form />} />
  </Div>
)
