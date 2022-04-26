import React from 'react'
import { FormFields } from './form-fields'
import { FormSuccess } from './form-success'
import { SignupContext } from '../contexts/signup-context'
import { validateFields } from '../utils/validation'

export const Form = () => {

  const [submission, setSubmission] = React.useState(false)
  const [firstName, setFirstName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()

    setSubmission(true)
  }

  const submit = (e) => {
    handleSubmit(e)

    validateFields({email, firstName, password})
  }

  return (
      <SignupContext.Provider value={{
        email, setEmail,
        firstName, setFirstName,
        password, setPassword,
        submission, setSubmission,
        handleSubmit, submit
      }}>
        {!submission ? (
          <FormFields />
        ) : (
          <FormSuccess />
        )}
      </SignupContext.Provider>
  )
}