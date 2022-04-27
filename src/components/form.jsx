import React from 'react'
import { FormFields } from './form-fields'
import { FormSuccess } from './form-success'
import { SignupContext } from '../contexts/signup-context'

export const Form = () => {

  const [firstName, setFirstName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState({})
  const [submission, setSubmission] = React.useState(false)
  const [values, setValues] = React.useState({
    email: '',
    firstName: '',
    password: '',
  })

  const handleSubmit = event => {
    event.preventDefault()
    setSubmission(true)
  }


  React.useEffect((e) => {
    // console.log(errors)
    if (Object.keys(errors).length === 0 && submission) {
      // e.preventDefault()
      // setErrors(validateFields(firstName, email, password))
      setSubmission(true)
    }
  }, [errors, submission])

  return (
      <SignupContext.Provider value={{
        email, setEmail,
        errors, setErrors,
        firstName, setFirstName,
        password, setPassword,
        submission, setSubmission,
        values, setValues,
        // handleChange,
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