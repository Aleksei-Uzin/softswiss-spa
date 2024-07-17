import React from 'react'
import Box from '../Box'
import Grid from './Grid'
import MainPromo from './MainPromo'
import Title from '../Title'
import './styles.scss'

export function Main() {
  return (
    <Box className="main">
      <main>
        <Title className="main_title" type="h2">
          Offers
        </Title>
        <Grid />
        <MainPromo />
      </main>
    </Box>
  )
}
