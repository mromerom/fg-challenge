import React from 'react'
import { Input } from './input'
import { Button } from './button'
import { useInput } from '../utils/useInput'

export const FormFields = (props) => {
  const {} = props

  const { handleSubmit, values } = useInput()

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
        <Input
          htmlFor='firstName'
          inputClass=''
          labelClass=''
          labelId='firstName'
          labelText='First Name'
          name='firstName'
          type='text'
          value={values.firstName}
        />
        <Input
          htmlFor='email'
          inputClass=''
          labelClass=''
          labelId='email'
          labelText='Email Address'
          name='email'
          type='email'
          value={values.email}
        />
        <Input
          htmlFor='password'
          inputClass=''
          labelClass=''
          labelId='password'
          labelText='Password'
          name='password'
          type='password'
          value={values.password}
        />
        <Button className='button--submit'>Sign Up</Button>
      </form>
    </div>
  )
}