import { Card, CardMedia } from "@mui/material";
import BCardBody from "./BCardBody";
import BCardActions from "./BCardActions";

function BCard({ card }) {
  console.log(card)
  return (
    <Card sx={{ maxWidth: 300, mx: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={card.image.url}
        title="Businees logo"
      />
      <BCardBody
        title={card.title}
        subtitle={card.subtitle}
        bizNumber={card.bizNumber}
        phone={card.phone}
        city={card.address.city}
      />
    </Card>
  );
}

export default BCard;