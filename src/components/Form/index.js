import React from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
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

  return (
    <FormStyled>
      <Subtitle>START FOR FREE</Subtitle>
      <Title>Sign up!</Title>
      <SubtitleLogin>Already a member?, nice!</SubtitleLogin>
      <Text>E-mail</Text>
      <Input placeholder='name@mail.com' type='text' />
      <Text>Password</Text>
      <Input placeholder='6+ Characters, 1 Capital letter' type='password' />
      <Button label='Create an account' />
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
