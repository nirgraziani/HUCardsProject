import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormButton from './FormButton';
import LoopIcon from "@mui/icons-material/Loop";

const Form = ({
    title = "",
    onSubmit,
    onReset,
    to = "/",
    color = "inherit",
    spacing = 1,
    styles = {},
    children
}) => {
    const navigate = useNavigate();
    
  return (
      <Box
          component="form"
          color={color}
          sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
          onSubmit={onSubmit}
          autoComplete="off"
          noValidate
      >
          <Typography align="center" variant="h5" component="h1" mb={2}>
              {title.toUpperCase()}
          </Typography>

          <Grid container spacing={spacing} sx={{display: "flex", justifyContent: "center"}}>
              {children}
          </Grid>

          <Grid container spacing={2} my={2} direction="row" width="100" sx={{justifyContent: "center"}}>
              <Grid item xs={12} sm={6}>
                  <FormButton
                      node={<LoopIcon />}
                      varient="outlined"
                      component='div'
                      onClick={onReset}
                  />
              </Grid>
              <Grid item xs={12}>
                  <FormButton node="Submit" onClick={onSubmit} size='large'/>
              </Grid>
          </Grid>
    </Box>
  )
}

export default Form