import { Button, Container, TextField, FormControlLabel, Checkbox } from '@mui/material'
import Joi from 'joi';
import React, { useState } from 'react'
import useForm from '../../hooks/useForm';
import Form from '../../components/Form';

function RegisterForm() {
  const initialSignupForm = {
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
  houseNum: 0,
  zip: 0,
  business: false
  }

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

    const { formDetails, errors, handleChange, handleSubmit } = useForm({initialSignupForm}, validationSchema);


   
  return (
        <Form
          onSubmit={handleSubmit}
          onReset={() => { }}
      title={"Sign up form"}
      spacing={3}
          styles={{maxWidth: "880px", display: "flex", flexDirection: "column", justifyContent: "center"}}
        >  
              <TextField label={"First Name"}
                  name='firstName'
                  onChange={handleChange}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                  value={formDetails.firstName}
                  sm={6}
              />
              <TextField label={"Middle Name"}
                  name='middleName'
                  onChange={handleChange}
                  error={Boolean(errors.middleName)}
                  helperText={errors.middleName}
                  value={formDetails.middleName}
                  sm={6}
              />
              <TextField label={"Last Name"}
                  name='lastName'
                  onChange={handleChange}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                  value={formDetails.lastName}
                  sm={6}
              />
                <TextField label={"Phone"}
                  name='phone'
                  type='tel'
                  onChange={handleChange}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                  value={formDetails.phone}
                  sm={6}
              />
                <TextField label={"E-mail"}
                  name='email'
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  value={formDetails.email}
                  sm={6}
              />
                <TextField label={"Password"}
                  name='password'
                  type='password'
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  value={formDetails.password}
                  sm={6}
              />
                  <TextField label={"Url"}
                  name='url'
                  onChange={handleChange}
                  error={Boolean(errors.url)}
                  helperText={errors.url}
                  value={formDetails.url}
                  sm={6}
              />
                <TextField label={"Alt"}
                  name='alt'
                  onChange={handleChange}
                  error={Boolean(errors.alt)}
                  helperText={errors.alt}
                  value={formDetails.alt}
                  sm={6}
              />
                <TextField label={"State"}
                  name='state'
                  onChange={handleChange}
                  error={Boolean(errors.state)}
                  helperText={errors.state}
                  value={formDetails.state}
                  sm={6}
              />
                <TextField label={"Country"}
                  name='country'
                  onChange={handleChange}
                  error={Boolean(errors.country)}
                  helperText={errors.country}
                  value={formDetails.country}
                  sm={6}
              />
                <TextField label={"City"}
                  name='city'
                  onChange={handleChange}
                  error={Boolean(errors.city)}
                  helperText={errors.city}
                  value={formDetails.city}
                  sm={6}
              />
                <TextField label={"Street"}
                  name='street'
                  onChange={handleChange}
                  error={Boolean(errors.street)}
                  helperText={errors.street}
                  value={formDetails.street}
                  sm={6}
              />
                <TextField label={"House number"}
                  name='houseNum'
                  type="number"
                  onChange={handleChange}
                  error={Boolean(errors.houseNum)}
                  helperText={errors.houseNum}
                  value={formDetails.houseNum}
                  sm={6}
              />
                <TextField label={"Zip code"}
                  name='zip'
                  type="number"
                  onChange={handleChange}
                  error={Boolean(errors.zip)}
                  helperText={errors.zip}
                  value={formDetails.zip}
                  sm={6}
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
       </Form>   
  )
}

export default RegisterForm