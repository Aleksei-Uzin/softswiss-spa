import React from 'react'
import withLeftRightPadding from './hoc'

function Box({ children, className }) {
  return React.cloneElement(children, {
    className,
  })
}

// @ts-ignore
Box = withLeftRightPadding(Box)

export default Box
