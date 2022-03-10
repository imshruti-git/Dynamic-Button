import React from 'react'

const Button = (
    ButtonName,

    ButtonWidth,
    ButtonHeight,
    FontColor,
    BorderColor,
    FontSize,
    BorderRadius,
    BackgroundColor,
    BorderOutline
    
) => {
  return (
    <button
        style={{
            width: ButtonWidth,
            height: ButtonHeight,
            color: FontColor,
            borderColor: BorderColor,
            fontSize: FontSize,
            borderRadius: BorderRadius,
            backgroundColor: BackgroundColor,
            border: BorderOutline
        }}
        className='Dynamic-button'>
        {ButtonName}
    </button>
  )
}

export default Button