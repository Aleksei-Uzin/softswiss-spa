import React from 'react'
import { TitlePropsType } from './types'
import HeaderH1 from './HeaderH1'
import HeaderH2 from './HeaderH2'

export default function Title({ type, ...props }: TitlePropsType) {
  switch (type) {
    case 'h1':
      return <HeaderH1 {...props} />
    case 'h2':
      return <HeaderH2 {...props} />
    default:
      console.log(`unknown header type: ${type}`)
  }
}
