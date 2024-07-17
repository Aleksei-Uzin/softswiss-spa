import React from 'react'
import Section from '../Section'
import { getClassName } from '../../../utils'
import { getGridAreas, getGridTemplateAreas } from './utils'
import { useMediaQuery } from './useMediaQuery'
import { DATA } from './data'
import './styles.scss'

export default function Grid() {
  const isMatch = useMediaQuery('(min-width: 1248px)')
  const sectionRef = React.useRef<HTMLElement | null>(null)
  const gridAreas = getGridAreas(DATA)
  const classes = getClassName('grid')

  React.useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current

    if (isMatch) {
      const templateAreas = getGridTemplateAreas(gridAreas)
      section.style.gridTemplateAreas = templateAreas
    } else {
      section.style.removeProperty('grid-template-areas')
    }
  }, [isMatch])

  return (
    <section className={classes} ref={sectionRef}>
      {DATA.map(({ id, imgName, title, description }, ind) => {
        const area = isMatch ? gridAreas[ind] : ''

        return (
          <Section
            key={id}
            area={area}
            description={description}
            imgName={imgName}
            title={title}
          />
        )
      })}
    </section>
  )
}
