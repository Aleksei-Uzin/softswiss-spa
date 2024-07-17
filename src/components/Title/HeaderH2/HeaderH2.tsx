import React from 'react'
import { getClassName } from '../../../utils'
import { HeaderPropsType } from '../types'
import './styles.scss'

export default function HeaderH2({
  children,
  className = '',
}: HeaderPropsType) {
  const classes = getClassName('title_h2', className)

  return <h2 className={classes}>{children}</h2>
}
