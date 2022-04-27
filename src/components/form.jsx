import React from 'react'
import { FormFields } from './form-fields'
import { FormSuccess } from './form-success'
import { SignupContext } from '../contexts/signup-context'

export const Form = () => {

  const [firstName, setFirstName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [submission, setSubmission] = React.useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setSubmission(true)
  }

  return (
      <SignupContext.Provider value={{
        email, setEmail,
        firstName, setFirstName,
        password, setPassword,
        submission, setSubmission,
        handleSubmit,
      }}>
        {!submission ? (
          <FormFields />
        ) : (
          <FormSuccess />
        )}
      </SignupContext.Provider>
  )
}