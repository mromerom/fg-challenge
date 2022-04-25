import React from 'react'
import { Input } from './input'
import { Button } from './button'
import { useInput } from '../utils/useInput'
import { validateFields } from '../utils/validation'

export const FormFields = (props) => {
  const {} = props
  const { errors, handleSubmit } = useInput(validateFields)

  return (
    <div>
      <form className='form--wrapper' onSubmit={handleSubmit}>
        <div className='form--text'>
          <div className='header--wrapper'>
            <span>Let's</span>
            <h1>Sign Up</h1>
          </div>
          <p>
            Use the form below to sign up for this super awesome service.
            You're only a few steps away!
          </p>
        </div>
        {errors.firstName && <p className='form--error'>{errors.firstName}</p>}
        <Input
          field='firstName'
          labelText='First Name'
          type='text'
        />
        {errors.email && <p className='form--error'>{errors.email}</p>}
        <Input
          field='email'
          labelText='Email Address'
          type='email'
        />
        {errors.password && <p className='form--error'>{errors.password}</p>}
        <Input
          field='password'
          labelText='Password'
          type='password'
        />
        <Button onSubmit={handleSubmit}>Sign Up</Button>
      </form>
    </div>
  )
}