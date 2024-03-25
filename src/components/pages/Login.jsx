import React from 'react'
import FormLoginComponent from '../form-login-component/FormLoginComponent'


const Login = ({ handleLogin }) => {
  return (
    <FormLoginComponent handleLogin={handleLogin}/>
  )
}

export default Login