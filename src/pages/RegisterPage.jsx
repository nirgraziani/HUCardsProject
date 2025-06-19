import React from 'react'
import RegisterForm from '../users/components/RegisterForm'
import { Box } from '@mui/material'

function RegisterPage() {
  return (
    <Box sx={{display: "flex",
    justifyContent: "center",
    alignItems: "flex start"}}
    >
      <RegisterForm/>
    </Box>
  )
}

export default RegisterPage