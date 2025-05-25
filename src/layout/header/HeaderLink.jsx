import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const btnStyle = {
    "marginLeft": "10px"
}

const linkStyle = {
    "textDecoration": "none",
    "color": "white"
}

function HeaderLink({link, Label}) {
  return (
      <>
          <Box>
              <Button sx={btnStyle} variant='contained' color='success'>
                    <Link style={linkStyle} to={`/${link}`}>{Label}</Link>
              </Button>
          </Box>
      </>
  )
}

export default HeaderLink