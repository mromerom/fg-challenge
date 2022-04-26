import React from 'react'

export const useInput = (callback, validate) => {
  const [values, setValues] = React.useState({
    firstName: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = React.useState({})
  const [submission, setSubmission] = React.useState(false)

  const handleChange = event => {
    const { name, value } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    setErrors(validate(values))
    setSubmission(true)
  }

  React.useEffect(() => {
    // if there are no errors and we submit, revalidate inputs
    if (Object.keys(errors).length === 0 && submission) {
      callback()
    }
  }, [errors, callback, submission])

  return { errors, handleChange, handleSubmit, values }
}