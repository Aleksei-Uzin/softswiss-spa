import React from 'react'
import Title from '../../Title'
import Button from '../../Button'
import { getClassName } from '../../../utils'
import { SectionPropsType } from './types'
import './styles.scss'

export default function Section({
  area,
  className = '',
  description,
  descriptionClassName = '',
  imgName,
  title,
  titleClassName = '',
}: SectionPropsType) {
  const articleRef = React.useRef<HTMLElement | null>(null)
  const classes = getClassName('grid_section', className)
  const descriptionClasses = getClassName(
    'grid_description',
    descriptionClassName
  )
  const titleClasses = getClassName('section_title', titleClassName)

  React.useEffect(() => {
    if (!articleRef.current) return

    const article = articleRef.current
    article.style.backgroundImage = `url('assets/${imgName}')`
    article.style.gridArea = area
  }, [area])

  return (
    <article ref={articleRef} className={classes}>
      <Title className={titleClasses} type="h2">
        {title}
      </Title>
      <p className={descriptionClasses}>{description}</p>
      <Button>Learn more</Button>
    </article>
  )
}
