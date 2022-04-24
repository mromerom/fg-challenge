import React from 'react'

export const useInput = () => {
  const [values, setValues] = React.useState({
    firstName: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = React.useState({

  })

  const handleChange = event => {

    const { name, value } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return { handleChange, handleSubmit, values }
}