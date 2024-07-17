import React from 'react'
import { getClassName } from '../../../utils'
import './styles.scss'

function withLeftRightPadding<P extends { className?: string }>(Comp: {
  (props: P): Exclude<React.ReactNode, undefined>
  displayName?: string
}) {
  function Wrapper(props: P) {
    const classes = getClassName('rightLeftPaddings', props.className || '')

    return <Comp {...props} className={classes} />
  }

  Wrapper.displayName = `withLeftRightPadding(${Comp.displayName || Comp.name})`

  return Wrapper
}

export default withLeftRightPadding
