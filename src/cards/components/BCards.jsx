import BCard from "./BCards";
import { Box, Typography } from "@mui/material";


function BCards({ cards }) {
  if (cards.length === 0) {
    return (
      <Box>
        <Typography>No cards available</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ display: "flex" }}>
      {cards.map((card) => (
        <BCard key={card._id} card={card} />
      ))}
    </Box>
  );
}
export default BCards;