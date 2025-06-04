import { Box, Typography, TextField } from "@mui/material";
import { useEffect, useState } from "react";
function CardsPage() {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);


  const getCountries = async () => {
    const respone = await fetch("https://restcountries.com/v3.1/all")
    const json = await respone.json();
    setAllCountries(json.slice(0, 20));
    setCountries(json.slice(0, 20));
}

  useEffect(() => {
    getCountries()
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = allCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(value)
    })
      setCountries(filtered);
  }

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
      <Box >
        <TextField onChange={handleInputChange} id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </Box>
  );
}

export default CardsPage;