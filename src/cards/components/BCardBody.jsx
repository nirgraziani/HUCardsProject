import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function BCardBody() {
  return (
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
  )
}

export default BCardBody