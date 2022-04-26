import { validateFields } from '../utils/validation'
import React from 'react'
import { useInput } from '../utils/useInput'

export const Input = (props) => {
  
  const {
    field,
    inputClass,
    labelClass,
    labelText,
    type,
    onChange,
    value
  } = props

  return (
    <div className='composed-input'>
      <label className={`input--label ${labelClass}`} htmlFor={field}>
        {labelText}
      </label>
      <input
        className={inputClass}
        id={field}
        name={field}
        type={type}
        onChange={onChange}
      />
    </div>
  )
}
