import React from 'react'
import './styles.scss'
export * from './Button'
export * from './SignUpBox'

export const ExampleComponent = ({ text }) => {
  return <div className='test'>Example Component: {text}</div>
}
