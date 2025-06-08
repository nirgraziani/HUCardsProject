import { Button, Container, TextField } from '@mui/material'
import Joi from 'joi';
import React, { useState } from 'react'
import useForm from '../../hooks/useForm';

function RegisterForm() {

    const { formDetails, errors, handleChange, handleSubmit } = useForm({ firstName: "", middleName: "", lastName: "" },
        {firstName: Joi.string().min(2).max(12),
        middleName: Joi.string().optional(),
        lastName: Joi.string().min(2).max(12).required()})


   
  return (
      <div>
          <Container sx={{
              pt: 2,
          }}>    
              <TextField label={"First Name"}
                  name='firstName'
                  onChange={handleChange}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
              />
              <TextField label={"Middle Name"}
                  name='middleName'
                  onChange={handleChange}
                  error={Boolean(errors.middleName)}
                  helperText={errors.middleName}
              />
              <TextField label={"Last Name"}
                  name='lastName'
                  onChange={handleChange}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
              />
              
            <Button variant='contained' sx={{display: "block"}} onClick={handleSubmit}>
                 Register
            </Button>
          </Container>
    </div>
  )
}

export default RegisterForm