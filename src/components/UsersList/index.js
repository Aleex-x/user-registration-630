import React, { useEffect, useState } from 'react'
import { UserCard } from '../UserCard'
import { Div, DivWrapper, Button, ButtonWrapper, Error } from './styles'

export const UsersList = ({ onClick, users, message }) => {
  return (
    <>
      <Div>
        {users.map((user) => (
          <DivWrapper key={user.id}>
            <UserCard
              cover={user.avatar}
              name={user.first_name + ' ' + user.last_name}
              email={user.email}
            />
          </DivWrapper>
        ))}
      </Div>
      {message && <Error>{message}</Error>}
      <ButtonWrapper>
        <Button onClick={onClick}>Ver más</Button>
      </ButtonWrapper>
    </>
  )
}
