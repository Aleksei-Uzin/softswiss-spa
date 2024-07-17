import React from 'react'
import { getClassName } from '../../utils'
import { ButtonPropsType } from './types'
import './styles.scss'

export default function Button({ children, className = '' }: ButtonPropsType) {
  const classes = getClassName('button', className)

  return <button className={classes}>{children}</button>
}
