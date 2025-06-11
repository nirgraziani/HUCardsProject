import { Button, Container, TextField } from '@mui/material'
import Joi from 'joi';
import React, { useState } from 'react'
import useForm from '../../hooks/useForm';

function LoginForm() {

    const validationSchema = {
        email: Joi.string().email({ tlds: { allow: false } }),
        password: Joi.string()
        .min(9)
        .pattern(/[A-Z]/, 'uppercase letter')
        .pattern(/[a-z]/, 'lowercase letter')
        .pattern(/[0-9]/, 'number')
        .pattern(/[!@#$%*&-]/, 'special character')
        .required()
    };

    const { formDetails, errors, handleChange, handleSubmit } = useForm({ email: "", password: "" }, validationSchema)
        


   
  return (
      <div>
          <Container sx={{
              pt: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "20px"
          }}>    
              <TextField label={"E-mail"}
                  name='email'
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
              />
              <TextField label={"Password"}
                  name='password'
                  type="password"
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
              />
              
            <Button variant='contained' sx={{display: "block"}} onClick={handleSubmit}>
                 Login
            </Button>
          </Container>
    </div>
  )
}

export default LoginForm