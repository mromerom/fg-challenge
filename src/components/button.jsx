import React from 'react'

export const Button = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return <button className='button--submit' type='submit' {...otherProps}>{children}</button>
}