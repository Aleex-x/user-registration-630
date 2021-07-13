import React, { useState, useEffect } from 'react'
import { UsersList } from '../components/UsersList'

export const Content = () => {
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])
  const [errMessage, setErrMessage] = useState()

  useEffect(() => {
    const loadUsers = async () => {
      try {
        await window
          .fetch(`https://reqres.in/api/users?page=${page}`)
          .then((res) => res.json())
          .then((response) => {
            if (response.data.length === 0) {
              setErrMessage('no más usuarios por mostrar')
            }
            setUsers((users) => [...users, ...response.data])
          })
      } catch (error) {
        console.error(error)
      }
    }

    loadUsers()
  }, [page])

  const loadMore = () => {
    setPage((page) => page + 1)
  }

  return <UsersList onClick={loadMore} users={users} message={errMessage} />
}
