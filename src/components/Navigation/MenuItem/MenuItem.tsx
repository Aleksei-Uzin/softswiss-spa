import React from 'react'
import { MenuPropsType } from './types'
import './styles.scss'

export default function MenuItem({ children, url = '#' }: MenuPropsType) {
  return (
    <li>
      <a className="menu_anchor" href={url}>
        {children}
      </a>
    </li>
  )
}
