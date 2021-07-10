import React, { useState } from 'react'
import { Card } from '../Card'
import { Form } from '../Form'
import { Div } from './styles'

export const Login = () => {
  const [logged, setLogged] = useState(() => {
    try {
      const login = window.localStorage.getItem('login')
      return login
    } catch (e) {
      return false
    }
  })

  return (
    <Div>
      <Card leftRender={<h1>LEFT</h1>} rightRender={<Form />} />
    </Div>
  )
}
