import React from 'react'
import Box from '../Box'
import './styles.scss'

export const Footer = () => {
  return (
    <Box className="footer">
      <footer>
        <img
          alt="rocket logo"
          className="footer_logo"
          src={'assets/rocket.png'}
          width="52"
        />
        <p className="footer_content">Exciting space adventure!</p>
      </footer>
    </Box>
  )
}
