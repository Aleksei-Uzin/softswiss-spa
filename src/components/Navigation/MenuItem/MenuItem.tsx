import React from 'react'
import { MenuItemPropsType } from './types'
import './styles.scss'

export default function MenuItem({ children, url = '#' }: MenuItemPropsType) {
  return (
    <li>
      <a className="menu_anchor" href={url}>
        <span className="menu_anchor_wrapper">{children}</span>
      </a>
    </li>
  )
}
