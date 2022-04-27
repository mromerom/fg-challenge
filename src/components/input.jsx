import React from 'react'

export const Input = (props) => {
  
  const {
    field,
    inputClass,
    labelClass,
    labelText,
    type,
    onChange,
    value,
    ...otherProps
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
        value={value}
        {...otherProps}
      />
    </div>
  )
}
