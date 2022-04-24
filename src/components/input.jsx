import React from 'react'
import { useInput } from '../utils/useInput'

export const Input = (props) => {
  const { handleChange } = useInput
  
  const {
    htmlFor,
    inputClass,
    labelClass,
    labelId,
    labelText,
    inputValue,
    name,
    type
  } = props

  return (
    <div className='composed-input'>
      <label className={labelClass} htmlFor={htmlFor}>
        {labelText}
      </label>
      <input
        className={inputClass}
        id={labelId}
        name={name}
        type={type}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
}
