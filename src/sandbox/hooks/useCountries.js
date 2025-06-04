import { useEffect, useState } from "react";

export default function useCountries() {
    const [allCountries, setAllCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    
    
      const getCountries = async () => {
        const respone = await fetch("https://restcountries.com/v3.1/all")
        const json = await respone.json();
        setAllCountries(json.slice(0, 20));
        setCountries(json.slice(0, 20));
    }
    
    const handleInputChange = (event) => {
      const value = event.target.value.toLowerCase();
      const filtered = allCountries.filter((country) => {
        return country.name.common.toLowerCase().includes(value)
      })
        setCountries(filtered);
      }
      
      useEffect(() => {
        getCountries()
      }, []);
    
    return {
        countries,
        handleInputChange
    }
}