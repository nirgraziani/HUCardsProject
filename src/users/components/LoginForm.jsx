import { Button, Container, TextField } from '@mui/material'
import Joi from 'joi';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form';

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
      <Form
        onSubmit={handleSubmit}
        onReset={() => { }}
        title={"Sign up form"}
        spacing={3}
        styles={{ maxWidth: "880px", display: "flex", flexDirection: "column", justifyContent: "center" }}
        isLogin={true}
      >
        <TextField label={"E-mail"}
          name='email'
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          value={formDetails.firstName}
          sm={6}
        />
        <TextField label={"Password"}
          name='password'
          type="password"
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          value={formDetails.password}
          sm={6}
        />

        <Button variant='contained' sx={{ display: "block" }} onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm