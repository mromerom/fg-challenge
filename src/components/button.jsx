import React from 'react'

export const Button = (props) => {
  const {
    children,
    className
  } = props

  return <button className={className}>{children}</button>
}