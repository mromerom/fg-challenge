import React from 'react'
import { Input } from './input'
import { Button } from './button'
import { SignupContext } from '../contexts/signup-context'

export const FormFields = () => {
  const { email, setEmail, firstName, setFirstName, password, setPassword, handleSubmit } = React.useContext(SignupContext)

  const nameValidation = {
    regex: "[a-zA-Z\xC0-\uFFFF' -]{1,25}",
    message: 'First names can only contain letters, hyphens, apostrophes, spaces, and 25 characters total'
  }

  const emailValidation = {
    // Willful violation of RFC 5322 to accept addresses valid in real-world use
    // For more info: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
    regex: "[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*",
    // email fields have a default message built in
  }

  const passwordValidation = {
    regex: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,64}",
    message: 'Password must contain at least eight characters (64 max), one uppercase letter, one lowercase letter, and one digit (it can special characters)'
  }

  return (
    <div className='app--wrapper'>
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
          field='firstName'
          labelText='First Name'
          type='text'
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          pattern={nameValidation.regex}
          required
          title={nameValidation.message}
        />
        <Input
          field='email'
          labelText='Email Address'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          pattern={emailValidation.regex}
          required
        />
        <Input
          field='password'
          labelText='Password'
          type='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
          max="64"
          min="8"
          pattern={passwordValidation.regex}
          required
          title={passwordValidation.message}
        />
        <Button disabled={!firstName || !email || !password}>Sign Up</Button>
      </form>
    </div>
  )
}