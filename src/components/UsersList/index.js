import React, { useEffect, useState } from 'react'
import { User } from '../User'
import { Div, Image } from './styles'

function useUsersData() {
  const URL = 'https://reqres.in/api/users?page=2'
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window
      .fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        setUsers(response.data)
        setLoading(false)
      })
  }, [])

  return { users, loading }
}

export const UsersList = () => {
  const { users, loading } = useUsersData()

  return (
    <>
      {loading ? (
        <User />
      ) : (
        users.map((user) => (
          <User
            key={user.id}
            cover={user.avatar}
            name={user.first_name + ' ' + user.last_name}
            email={user.email}
          ></User>
        ))
      )}
    </>
  )
}
