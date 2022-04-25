import React from 'react'

export const useInput = (validate) => {
  const [values, setValues] = React.useState({
    firstName: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = React.useState({})

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
  }

  return { errors, handleChange, handleSubmit, values }
}