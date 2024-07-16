import React from 'react'
import Box from '../Box'
import Logo from './Logo'
import Menu from './Menu'
import MenuButton from './MenuButton'
import { MenuContext } from './useMenuContext'
import './styles.scss'

export function Navigation() {
  const [state, setState] = React.useState(false)
  const toggle = () => setState(!state)
  const value = { state, toggle }

  return (
    <Box className="navigation">
      <nav>
        <Logo />
        <MenuContext.Provider value={value}>
          <Menu />
          <MenuButton />
        </MenuContext.Provider>
      </nav>
    </Box>
  )
}
