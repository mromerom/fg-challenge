import React from 'react'
import { FormFields } from './form-fields'
import { FormSuccess } from './form-success'

export const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const submit = () => {
    setIsSubmitted(true)
  }

  return (
    <div>
      {!isSubmitted ? (
        <FormFields submit={submit} />
      ) : (
        <FormSuccess />
      )}
    </div>
  )
}