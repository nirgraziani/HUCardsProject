import { Button, Container, TextField, FormControlLabel, Checkbox } from '@mui/material'
import Joi from 'joi';
import React, { useState } from 'react'
import useForm from '../../hooks/useForm';

function RegisterForm() {

const validationSchema = {
  firstName: Joi.string().min(2).max(12).required(),
  middleName: Joi.string().allow(''),
  lastName: Joi.string().min(2).max(12).required(),
  phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(9).pattern(/[A-Z]/).pattern(/[a-z]/).pattern(/[0-9]/).pattern(/[!@#$%*&-]/).required(),
  url: Joi.string().uri().allow(''),
  alt: Joi.string().allow(''),
  state: Joi.string().allow(''),
  country: Joi.string().allow(''),
  city: Joi.string().allow(''),
  street: Joi.string().allow(''),
  houseNum: Joi.number().integer().optional().allow(null),
  zip: Joi.number().integer().optional().allow(null),
  business: Joi.boolean().required(),
};

    const { formDetails, errors, handleChange, handleSubmit } = useForm({
  firstName: "",
  middleName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  url: "",
  alt: "",
  state: "",
  country: "",
  city: "",
  street: "",
  houseNum: "",
  zip: "",
  business: false
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
                <TextField label={"Password"}
                  name='password'
                  type='password'
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
              />
                  <TextField label={"Url"}
                  name='url'
                  onChange={handleChange}
                  error={Boolean(errors.url)}
                  helperText={errors.url}
              />
                <TextField label={"Alt"}
                  name='alt'
                  onChange={handleChange}
                  error={Boolean(errors.alt)}
                  helperText={errors.alt}
              />
                <TextField label={"State"}
                  name='state'
                  onChange={handleChange}
                  error={Boolean(errors.state)}
                  helperText={errors.state}
              />
                <TextField label={"Country"}
                  name='country'
                  onChange={handleChange}
                  error={Boolean(errors.country)}
                  helperText={errors.country}
              />
                <TextField label={"City"}
                  name='city'
                  onChange={handleChange}
                  error={Boolean(errors.city)}
                  helperText={errors.city}
              />
                <TextField label={"Street"}
                  name='street'
                  onChange={handleChange}
                  error={Boolean(errors.street)}
                  helperText={errors.street}
              />
                <TextField label={"House number"}
                  name='houseNum'
                  type="number"
                  onChange={handleChange}
                  error={Boolean(errors.houseNum)}
                  helperText={errors.houseNum}
              />
                <TextField label={"Zip code"}
                  name='zip'
                  type="number"
                  onChange={handleChange}
                  error={Boolean(errors.zip)}
                  helperText={errors.zip}
              />
              <FormControlLabel
                control={<Checkbox checked={formDetails.business} onChange={(e) => handleChange({
                target: {
                    name: e.target.name,
                    value: e.target.checked
                }
                })} name="business" />}
                label="Business Account"
                />
                {errors.business && <div style={{ color: 'red' }}>{errors.business}</div>}
            
              
            <Button variant='contained' sx={{display: "block"}} onClick={handleSubmit}>
                 Register
            </Button>
          </Container>
    </div>
  )
}

export default RegisterForm