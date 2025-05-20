import { Box } from '@mui/material'
import React from 'react'

function Main({children}) {
  return (
      <Box sx={{backgroundColor: "#e3f2fd", minHeight: "85vh"}}>
          {children}
    </Box>
  )
}

export default Main