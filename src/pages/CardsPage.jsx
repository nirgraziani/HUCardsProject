import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import BCards from "../cards/components/BCards";

function CardsPage() {
  const [cards, setCards] = useState([]);


  const getCardsFromServer = async () => {
    const response = await fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards")
    const json = await response.json();
    setCards(json.slice(0, 10));
  }

  useEffect(() => {
    getCardsFromServer()
  }, []);
  console.log(cards)
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex start",
      gap: "10px"
    }}>
      <BCards cards={cards} />
    </Box>
  );
}

export default CardsPage;