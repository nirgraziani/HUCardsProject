import React from 'react'
import LoginForm from '../users/components/LoginForm'
import { Box } from '@mui/material'

function LoginPage() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex start"
    }}>
      <LoginForm />
    </Box>
  )
}

export default LoginPage