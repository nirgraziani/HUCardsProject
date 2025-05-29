import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
function CardsPage() {
  const [countries, setCountries] = useState([]);


  const getCardsFromServer = async () => {
    const respone = await fetch("https://restcountries.com/v3.1/all")
    const json = await respone.json();
    setCountries(json.slice(0, 10));
}

  useEffect(() => {
    getCardsFromServer()
  }, []);

  return (
    <div>
    {countries.map((country) => {
    return (
        <Box>
            {country.name.common}
        </Box>           
    )})}
    </div>
  );
}

export default CardsPage;