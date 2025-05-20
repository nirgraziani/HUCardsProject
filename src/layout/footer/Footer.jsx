import { Button, Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();
  return (
      <Box>
          <Button variant='contained' onClick={()=> navigate("/")}>Home</Button>
          <Button variant='contained' onClick={()=> navigate("/about")}>About</Button>
    </Box>
  )
}

export default Footer