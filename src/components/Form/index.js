import React from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import { useInputValue } from '../../hooks/useInputValue'
import {
  Title,
  Subtitle,
  Text,
  Form as FormStyled,
  SubtitleLogin,
  Minititle
} from './styles'

export const Form = () => {
  const url = 'https://www.notion.so/Front-End-dd893eba03c04e6ba0f75fd3e37a4ca8'
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()

    let data = {
      email: email.value,
      password: password.value
    }

    window
      .fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status)
        }
        return response.json()
      })
      .then((response) => {
        window.localStorage.setItem('user', JSON.stringify(response))
      })
      .catch((e) => {
        window.localStorage.setItem('user', '{}')
        console.log('jekjeje')
      })
  }

  return (
    <FormStyled>
      <Subtitle>START FOR FREE</Subtitle>
      <Title>Sign up!</Title>
      <SubtitleLogin>Already a member?, nice!</SubtitleLogin>
      <Text>E-mail</Text>
      <Input placeholder='name@mail.com' type='text' value={email} />
      <Text>Password</Text>
      <Input
        placeholder='6+ Characters, 1 Capital letter'
        type='password'
        value={password}
      />
      <Button onClick={handleSubmit} label='Create an account' />
      <Button label='Sign up with Google' primary={false} />
      <Minititle>
        This site is protected by reCAPTCHA and the Google
        <br />
        <a href={url}>Privacy Policy</a> and <a href={url}>Terms of Service</a>{' '}
        apply
      </Minititle>
    </FormStyled>
  )
}
