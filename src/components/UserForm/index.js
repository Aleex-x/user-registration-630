import React from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import { useInputValue } from '../../hooks/useInputValue'
import {
  Title,
  Subtitle,
  Text,
  Form,
  SubtitleLogin,
  Minititle,
  Error
} from './styles'

export const UserForm = ({ error, onSubmit, disabled }) => {
  const url = 'https://www.notion.so/Front-End-dd893eba03c04e6ba0f75fd3e37a4ca8'
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
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
        <Button disabled={disabled} label='Create an account' />
        <Button
          disabled={disabled}
          label='Sign up with Google'
          primary={false}
        />
        <Minititle>
          This site is protected by reCAPTCHA and the Google
          <br />
          <a href={url}>Privacy Policy</a> and{' '}
          <a href={url}>Terms of Service</a> apply
        </Minititle>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
