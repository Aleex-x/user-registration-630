import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { Card } from '../components/Card'
import { UserForm } from '../components/UserForm'
import { Regex } from '../utils/regex'

const validInputs = (input) => {
  const { email, password } = input
  // TODO: remove this
  return Regex.EMAIL.test(email) && Regex.PASSWORD.test(password)
}

const Registro = ({ activateAuth, removeAuth }) => {
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = async ({ email, password }) => {
    const input = { email, password }

    console.log('entro')

    if (!validInputs(input)) {
      setDisabled(true)
      return
    } else {
      setDisabled(false)
    }

    await window
      .fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      })
      .then((response) => {
        if (!response.ok) {
          setError(true)
          throw new Error('HTTP status ' + response.status)
        }
        return response.json()
      })
      .then((response) => {
        activateAuth(response.token)
        window.location.href = '/users'
        setError(false)
      })
      .catch((e) => {
        console.error(e)
        removeAuth()
      })
  }

  let errorMsg = error && 'El usuario ya existe o hay algún problema'

  if (disabled) errorMsg = 'Contraseña no segura'

  return (
    <Card
      leftRender={<h1>LEFT</h1>}
      rightRender={
        <UserForm onSubmit={onSubmit} disabled={disabled} error={errorMsg} />
      }
    />
  )
}

export const Logon = () => {
  const { activateAuth, removeAuth } = useContext(Context)

  return <Registro activateAuth={activateAuth} removeAuth={removeAuth} />
}
