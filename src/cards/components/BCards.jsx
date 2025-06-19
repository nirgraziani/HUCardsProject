import BCard from "./BCard";
import { Box, Typography } from "@mui/material";

const cardStyle = {
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "10px",
  position: "relative",
  top: "20px"
}

function BCards({ cards }) {
  if (cards.length === 0) {
    return (
      <Box>
        <Typography>No cards available</Typography>
      </Box>
    );
  }
  return (
    <Box sx={cardStyle}>
      {cards.map((card) => (
        <BCard key={card._id} card={card} />
      ))}
    </Box>
  );
}
export default BCards;