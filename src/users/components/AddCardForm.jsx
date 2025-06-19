import { Button, Container, TextField, FormControlLabel, Checkbox } from '@mui/material'
import Joi from 'joi';
import React, { useState } from 'react'
import useForm from '../../hooks/useForm';

function AddCardForm() {

const validationSchema = {
  title: Joi.string().min(2).max(50).required(),
  subTitle: Joi.string().min(2).max(50).required(),
  description: Joi.string().min(2).max(1000).required(),
  phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  web: Joi.string().uri().allow(""),
  image: Joi.string().uri().allow(""),
  address: Joi.string().min(2).max(255).required()
};

    const { formDetails, errors, handleChange, handleSubmit } = useForm({
    title: "",
    subTitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    image: "",
    address: ""
}, validationSchema);


   
  return (
      <div>
          <Container sx={{
              pt: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "20px"
          }}>    
              <TextField label={"Title"}
                  name='title'
                  onChange={handleChange}
                  error={Boolean(errors.title)}
                  helperText={errors.title}
              />
              <TextField label={"Sub title"}
                  name='subTitle'
                  onChange={handleChange}
                  error={Boolean(errors.subTitle)}
                  helperText={errors.subTitle}
              />
              <TextField label={"Description"}
                  name='description'
                  onChange={handleChange}
                  error={Boolean(errors.description)}
                  helperText={errors.description}
              />
                <TextField label={"Phone"}
                  name='phone'
                  type='tel'
                  onChange={handleChange}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
              />
                <TextField label={"E-mail"}
                  name='email'
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
              />
                <TextField label={"Web"}
                  name='web'
                  onChange={handleChange}
                  error={Boolean(errors.web)}
                  helperText={errors.web}
              />
                  <TextField label={"Image"}
                  name='image'
                  onChange={handleChange}
                  error={Boolean(errors.image)}
                  helperText={errors.image}
              />
                <TextField label={"Address"}
                  name='address'
                  onChange={handleChange}
                  error={Boolean(errors.address)}
                  helperText={errors.address}
              />       
              
            <Button variant='contained' sx={{display: "block"}} onClick={handleSubmit}>
                 Add Card
            </Button>
          </Container>
    </div>
  )
}

export default AddCardForm