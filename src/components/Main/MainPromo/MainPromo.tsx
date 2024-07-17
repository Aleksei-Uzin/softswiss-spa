import React from 'react'
import Button from '../../Button'
import Title from '../../Title'
import './styles.scss'

export default function MainPromo() {
  return (
    <section className="main_promo">
      <Title className="main_promo_title" type="h2">
        Embark on a space journey
      </Title>
      <p className="main_promo_content">
        Travelling into space is one of the most exciting and unforgettable
        adventures that can change your life forever. And if you have ever
        dreamed of exploring stars, planets and galaxies, then our company is
        ready to help you realize this dream. We offer a unique experience that
        will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with
        incredible impressions, excitement and new discoveries. Our team of
        professionals takes care of your safety and comfort so that you can
        fully enjoy your adventure in space. We offer various options for space
        excursions.
      </p>
      <Button className="main_promo_button">Read more</Button>
    </section>
  )
}
