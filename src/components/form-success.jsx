import React from 'react'
import { Button } from './button'
import { useInput } from '../utils/useInput'
import { validateFields } from '../utils/validation'

export const FormSuccess = ({submit}) => {
  // const { values } = useInput(submit, validateFields)

  return (
    <div>
      <form className='form--wrapper'>
        <div className='form--text'>
          <div className='header--wrapper'>
            <span>Welcome,</span>
            {/* <h1>{values.firstName}!</h1> */}
          </div>
          <p>
            You have been registered for this awesome service.
            Please check your email listed below for instructions.
          </p>
          {/* <span>{values.email}</span> */}
        </div>
        <Button>Sign In</Button>
      </form>
    </div>
  )
}