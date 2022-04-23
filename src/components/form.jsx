import React from 'react'
import { Input } from './input'
import { Button } from './button'

export const Form = (props) => {
  const {} = props

  return (
    <div className='wrapper--form'>
      <Input />
      <Input />
      <Input />
      <Button>Submit</Button>
    </div>
  )
}