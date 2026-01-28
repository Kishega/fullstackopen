import React from 'react'
import './Button.css'

const Button = ({ children, onClick, type = 'button', className = '', ...rest }) => {
  return (
    <button type={type} className={["btn", className].filter(Boolean).join(' ')} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
