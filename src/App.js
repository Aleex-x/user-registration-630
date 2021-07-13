import React, { useContext, Suspense } from 'react'
import { Logon } from './pages/Logon'
import { GlobalStyle } from './GlobalStyles'
import { Router, Redirect } from '@reach/router'
import { Content } from './pages/Content'
import { NotFound } from './pages/NotFound'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Redirect from='/' to='/login' noThrow />
        <Logon path='/login' />
        {!isAuth && <Redirect from='/users' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/users' noThrow />}
        <Content path='/users' />
      </Router>
    </Suspense>
  )
}
