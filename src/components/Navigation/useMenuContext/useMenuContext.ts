import React from 'react'

type State = boolean
type Toggle = () => void

export const MenuContext = React.createContext<
  { state: State; toggle: Toggle } | undefined
>(undefined)

MenuContext.displayName = 'MenuContext'

export function useMenuContext() {
  const context = React.useContext(MenuContext)

  if (!context) {
    throw new Error(
      'useMenuContext should be used inside <Menu /> and <MenuButton />'
    )
  }

  return context
}
