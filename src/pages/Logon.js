import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import { Card } from '../components/Card'
import { UserForm } from '../components/UserForm'

export const Logon = () => {
  const { activateAuth, removeAuth } = useContext(Context)
  const error = false
  const loading = false

  const onSubmit = ({ email, password }) => {
    const input = { email, password }

    window
      .fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status)
        }
        return response.json()
      })
      .then((response) => {
        console.log(response)
        activateAuth(response.token)
        window.location.href = '/users'
      })
      .catch((e) => {
        console.error(e)
        removeAuth()
      })
  }

  const errorMsg = error && 'El usuario ya existe o hay algún problema'

  return (
    <Card
      leftRender={<h1>LEFT</h1>}
      rightRender={
        <UserForm onSubmit={onSubmit} disabled={loading} error={errorMsg} />
      }
    />
  )
}
