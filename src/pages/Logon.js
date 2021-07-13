import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { Card } from '../components/Card'
import { UserForm } from '../components/UserForm'
import { Regex } from '../utils/regex'
import { LoginImage } from '../components/LoginImage'

const PASS_MESSAGE = 'Contraseña no segura'
const GENERIC_MESSAGE = 'El usuario ya existe o hay algún problema'

const validInputs = (input) => {
  const { email, password } = input
  return Regex.EMAIL.test(email) && Regex.PASSWORD.test(password)
}

const Registro = ({ activateAuth, removeAuth, isAuth }) => {
  const [message, setMessage] = useState()

  const onSubmit = async ({ email, password }) => {
    const input = { email, password }

    if (!validInputs(input)) {
      setMessage(PASS_MESSAGE)
      return
    }

    await window
      .fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: isAuth },
        body: JSON.stringify(input)
      })
      .then((response) => {
        if (!response.ok) {
          setMessage(GENERIC_MESSAGE)
          throw new Error('HTTP status ' + response.status)
        }
        return response.json()
      })
      .then((response) => {
        activateAuth(response.token)
        window.location.href = '/users'
      })
      .catch((e) => {
        console.error(e)
        removeAuth()
      })
  }

  return (
    <Card
      leftRender={<LoginImage />}
      rightRender={<UserForm onSubmit={onSubmit} error={message} />}
    />
  )
}

export const Logon = () => {
  const context = useContext(Context)

  return <Registro {...context} />
}
