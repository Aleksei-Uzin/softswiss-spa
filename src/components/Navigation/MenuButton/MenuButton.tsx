import React from 'react'
import { useMenuContext } from '../useMenuContext'
import { getClassName } from '../../../utils'
import './styles.scss'

export default function MenuButton() {
  const { state, toggle } = useMenuContext()
  const crossButton = `menu_button-${state ? 'expanded' : 'collapsed'}`
  const classes = getClassName('menu_button', crossButton)

  return (
    <div className={classes} onClick={toggle}>
      <div className="menu_button_item-1"></div>
      <div className="menu_button_item-2"></div>
      <div className="menu_button_item-3"></div>
    </div>
  )
}
