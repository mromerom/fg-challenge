import React from 'react'
import { Input } from './input'
import { Button } from './button'
import { useInput } from '../utils/useInput'
import { validateFields } from '../utils/validation'

export const FormFields = ({submit}) => {
  // const { submit } = props
  const { errors, handleChange, handleSubmit, values } = useInput(submit, validateFields)

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
        <div className='composed-input'>
          <label className={`input--label`} htmlFor='firstName'>
            First Name
          </label>
          <input
            id='firstName'
            name='firstName'
            type='text'
            value={values.firstName}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className='form--error'>{errors.email}</p>}
        {/* <Input
          field='email'
          labelText='Email Address'
          type='email'
          value={values.email}
          onChange={handleChange}
        /> */}
        <div className='composed-input'>
          <label className={`input--label`} htmlFor='email'>
            Email Address
          </label>
          <input
            id='email'
            name='email'
            type='email'
            value={values.email}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className='form--error'>{errors.password}</p>}
        <Input
          field='password'
          labelText='Password'
          type='password'
          value={values.password}
          onChange={handleChange}
        />
        {/* <div className='composed-input'>
          <label className={`input--label`} htmlFor='password'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            value={values.password}
            onChange={handleChange}
          />
        </div> */}
        <Button>Sign Up</Button>
      </form>
    </div>
  )
}