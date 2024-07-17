export type TitlePropsType = {
  children: (JSX.Element | string)[] | string
  type: 'h1' | 'h2'
  className?: string
}

export type HeaderPropsType = Omit<TitlePropsType, 'type'>
