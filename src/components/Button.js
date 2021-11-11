import React from 'react'

const variants = {
  regular:
    'rounded py-4 px-8 uppercase text-white font-black bg-black hover:bg-yellow-900 shadow-2xl',
  whiteBordered:
    'border border-white hover:bg-white hover:bg-opacity-25 rounded py-4 px-8 uppercase text-white font-black'
}

const Button = ({ variant = 'regular', className = '', ...props }) => {
  return <button className={variants[variant] + ' ' + className} {...props} />
}

export default Button
