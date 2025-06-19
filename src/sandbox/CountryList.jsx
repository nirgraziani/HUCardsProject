import { Box, Typography, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import useCountries from "./hooks/useCountries";
function CardsPage() {
  const {countries, handleInputChange} = useCountries()


  return (
    <Box sx={{display: 'flex', gap: "10px"}}>
      <Box>
        {countries.map((country) => {
    return (
      <Box key={country.name.common}>
        <Typography>
          {country.name.common}
        </Typography>
        <img src={country.flags.png}/>
        </Box>           
      )
    })}
      </Box>
      <Box sx={{"marginTop": "10px"}}>
        <TextField onChange={handleInputChange} id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </Box>
  );
}

export default CardsPage;