import React, { useState } from 'react'
import './button.scss'

function createRipple(event) {
  const button = event.currentTarget
  if (button.childNodes[0].nodeValue !== 'Disabled Button') {
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.classList.add('ripple')

    const ripple = button.getElementsByClassName('ripple')[0]

    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)
  }
}

export const Button = ({
  children,
  onClick,
  btnColor = 'teal',
  labelColor,
  disabled,
  type,
  style,
  ...props
}) => {
  const [hover, setHover] = useState(false)
  const toggleHover = (e) => {
    createRipple(e)
    setHover(!hover)
  }

  const commonStyles = {
    backgroundColor: btnColor,
    color: labelColor || 'white'
  }
  const outlineStyles = {
    border: `1px solid ${btnColor}`,
    color: btnColor,
    backgroundColor: 'white'
  }
  const outlineHoverStyle = {
    color: labelColor || 'white',
    backgroundColor: btnColor
  }

  const roundedStyle = {
    backgroundColor: btnColor,
    color: labelColor || 'white',
    borderRadius: '25px'
  }
  const disabledStyle = {
    cursor: 'default',
    backgroundColor: btnColor,
    color: labelColor || 'white',
    opacity: 0.4
  }
  const blockStyles = {
    width: '95%',
    margin: '0 auto'
  }
  let btnStyle
  switch (type) {
    case 'rounded':
      btnStyle = roundedStyle
      break
    case 'block':
      btnStyle = blockStyles
      break
    case 'outline':
      if (hover) {
        btnStyle = outlineHoverStyle
      } else {
        btnStyle = outlineStyles
      }
      break
    default:
      btnStyle = {
        backgroundColor: btnColor,
        color: labelColor || 'white'
      }
      break
  }
  return (
    <React.Fragment>
      <button
        style={
          disabled
            ? { ...commonStyles, ...btnStyle, ...disabledStyle, ...style }
            : { ...commonStyles, ...btnStyle, ...style }
        }
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        {...props}
        type='button'
        onClick={!disabled ? onClick : () => {}}
        className='btn'
      >
        {children || 'button'}
      </button>
    </React.Fragment>
  )
}

// export default Button
