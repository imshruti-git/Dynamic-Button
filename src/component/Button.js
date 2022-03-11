import React from 'react'

const STYLES = [
  "primary-solid",
  "warning-solid",
  "danger-solid",
  "success-solid",
  "primary-outline",
  "warning-outline",
  "danger-outline",
  "success-outline",
  "primary-dashed",
  "warning-dashed",
  "danger-dashed",
  "success-dashed",
];



const Button = ({
  children,
  type,
  borderRadius,
  border, 
  buttonStyle, 
  buttonBackground,
  buttonPadding,
  fontSize,
  textColor
  }) => {


    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];

   
   

  return (
    <button
        type={type}
        style={{
                borderRadius: borderRadius,
                border: border,
                background: buttonBackground,
                padding: buttonPadding,
                fontSize: fontSize,
                color: textColor
              }}
        className={`btn ${checkButtonStyle}`}
    >
        {children}
    </button>
  )
}

export default Button
