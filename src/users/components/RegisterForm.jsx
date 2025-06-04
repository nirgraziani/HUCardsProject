import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'

function RegisterForm() {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        middleName: ""
    });

    const handleChange = (e) => {
        setUserDetails((prev) => ({
            ...prev,
            firstName: e.target.value
         }))
    }
    const handleSubmit = () => {
        console.log(userDetails)
 }

  return (
      <div>
          <Container sx={{
              pt: 2,
          }}>    
            <TextField label={"First Name"} onChange={handleChange}/>
            <TextField label={"Middle Name"} />
            <TextField label={"Last Name"} />
              
            <Button variant='contained' sx={{display: "block"}} onClick={handleSubmit}>
                 Register
            </Button>
          </Container>
    </div>
  )
}

export default RegisterForm