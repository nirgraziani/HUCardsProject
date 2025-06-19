import { Typography } from "@mui/material";
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
    <div>
      <Typography>Cards Page</Typography>
      <BCards cards={cards} />
    </div>
  );
}

export default CardsPage;