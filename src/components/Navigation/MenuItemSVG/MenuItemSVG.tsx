import React from 'react'
import { IconBasket, IconBasketColored } from '../../../icons'
import './styles.scss'

export default function MenuItemSVG() {
  return (
    <span className="menu_item_icon">
      <IconBasketColored className="menu_item_icon-secondary" />
      <IconBasket className="menu_item_icon-primary" />
    </span>
  )
}
