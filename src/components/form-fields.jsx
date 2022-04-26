import React from 'react'
import { Input } from './input'
import { Button } from './button'
import { useInput } from '../utils/useInput'
import { validateFields } from '../utils/validation'
import { SignupContext } from '../contexts/signup-context'

export const FormFields = () => {
  const { email, setEmail, firstName, setFirstName, setPassword, handleSubmit, submit} = React.useContext(SignupContext)

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
        {/* {errors.firstName && <p className='form--error'>{errors.firstName}</p>} */}
        <Input
          field='firstName'
          labelText='First Name'
          type='text'
          value={firstName}
          onChange={event => {
            setFirstName(event.target.value)
          }}
        />
        {/* {errors.email && <p className='form--error'>{errors.email}</p>} */}
        <Input
          field='email'
          labelText='Email Address'
          type='email'
          value={email}
          onChange={event => {
            setEmail(event.target.value)
          }}
        />
        {/* {errors.password && <p className='form--error'>{errors.password}</p>} */}
        <Input
          field='password'
          labelText='Password'
          type='password'
          onChange={event => {
            setPassword(event.target.value)
          }}
        />
        <Button onClick={event => submit(event)}>Sign Up</Button>
      </form>
    </div>
  )
}