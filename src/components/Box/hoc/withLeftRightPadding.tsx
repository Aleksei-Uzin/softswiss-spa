import React from 'react'
import './styles.scss'

function withLeftRightPadding<P extends { className?: string }>(Comp: {
  (props: P): Exclude<React.ReactNode, undefined>
  displayName?: string
}) {
  function Wrapper(props: P) {
    return (
      <Comp
        {...props}
        className={`rightLeftPaddings ${props.className || ''}`}
      />
    )
  }

  Wrapper.displayName = `withLeftRightPadding(${Comp.displayName || Comp.name})`

  return Wrapper
}

export default withLeftRightPadding
