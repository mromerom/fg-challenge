import React from 'react'
import { Button } from './button'
import { SignupContext } from '../contexts/signup-context'

export const FormSuccess = (props) => {
  const { email, firstName } = React.useContext(SignupContext)

  return (
    <div className='app--wrapper'>
      <form className='success--wrapper'>
        <div className='form--text'>
          <div className='header--wrapper'>
            <span>Welcome,</span>
            <h1>{firstName}!</h1>
          </div>
          <p>
            You have been registered for this awesome service.
            Please check your email listed below for instructions.
          </p>
          <span>{email}</span>
        </div>
        <Button>Sign In</Button>
      </form>
    </div>
  )
}