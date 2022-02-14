import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import AuthForm from '../components/AuthForm'

const AuthWrapper = () => {
  return <AuthForm/>
}

const Wrapper = styled.section`
  min-height: 200vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
