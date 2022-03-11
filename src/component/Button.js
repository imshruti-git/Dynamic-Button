import React from 'react'

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
  "btn--primary--dashed",
  "btn--warning--dashed",
  "btn--danger--dashed",
  "btn--success--dashed",
];

const SIZES =[
  "btn--medium",
  "btn--large",
  "btn--small"
];

const Button = ({
  children,
  type,
  borderRadius,
  border, 
  buttonStyle, 
  buttonSize,
  buttonBackground
  }) => {


    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];

    const cheButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

   

  return (
    <button
        type={type}
        style={{
                borderRadius: borderRadius,
                border: border,
                background: buttonBackground}}
        className={`btn ${checkButtonStyle} ${cheButtonSize}`}
    >
        {children}
    </button>
  )
}

export default Button
