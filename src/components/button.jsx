import React from 'react'

export const Button = (props) => {
  const {
    children
  } = props

  return <button className='button--submit' type='submit'>{children}</button>
}