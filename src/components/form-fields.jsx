import React from 'react'
import { Input } from './input'
import { Button } from './button'
import { useInput } from '../utils/useInput'

export const FormFields = (props) => {
  const {} = props

  const { handleSubmit, values } = useInput

  return (
    <div className='form--wrapper'>
      <form onSubmit={handleSubmit}>
        <Input
          htmlFor='firstName'
          inputClass=''
          labelClass=''
          labelId='firstName'
          labelText='First name'
          name='firstName'
          type='text'
          value={values.firstName}
        />
        <Input
          htmlFor='email'
          inputClass=''
          labelClass=''
          labelId='email'
          labelText='Email'
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
        <Button className='button--submit'>Submit</Button>
      </form>
    </div>
  )
}