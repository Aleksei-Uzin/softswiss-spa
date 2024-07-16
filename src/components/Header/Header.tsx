import React from 'react'
import Box from '../Box'
import Title from '../Title'
import Button from '../Button'
import './styles.scss'

export function Header() {
  return (
    <Box className="header">
      <header>
        <Title type="h1">
          Discover the vast
          <br />
          expanses of <span className="header_title_tail-pink">space</span>
        </Title>
        <p className="header_content">
          Where the possibilities are{' '}
          <span className="header_title_tail-yellow">endless!</span>
        </p>
        <Button className="header_button">Learn more</Button>
      </header>
    </Box>
  )
}
