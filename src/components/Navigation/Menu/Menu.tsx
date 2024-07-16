import React from 'react'
import MenuItem from '../MenuItem'
import { IconBasket } from '../../../icons'
import { useMenuContext } from '../useMenuContext'
import { getClassName } from '../../../utils'
import './styles.scss'

export default function Menu() {
  const { state } = useMenuContext()
  const expanded = `menu-${state ? 'expanded' : 'collapsed'}`
  const classes = getClassName('menu', expanded)

  return (
    <ul className={classes}>
      <MenuItem>Home</MenuItem>
      <MenuItem>Products</MenuItem>
      <MenuItem>
        <IconBasket />
      </MenuItem>
    </ul>
  )
}
