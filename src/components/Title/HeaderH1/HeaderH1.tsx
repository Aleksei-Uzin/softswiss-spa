import React from 'react'
import { getClassName } from '../../../utils'
import { HeaderPropsType } from '../types'
import './styles.scss'

export default function HeaderH1({
  children,
  className = '',
}: HeaderPropsType) {
  const classes = getClassName('title_h1', className)

  return <h1 className={classes}>{children}</h1>
}
