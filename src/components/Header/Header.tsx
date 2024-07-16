import React from 'react'
import Title from '../Title'
import Button from '../Button'
import './styles.scss'

export function Header() {
  return (
    <header className="header">
      <Title type="h1">Discover the vast expanses of space</Title>
      <p>Where the possibilities are endless!</p>
      <Button className="header_button">Learn more</Button>
    </header>
  )
}
