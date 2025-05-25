import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BCardBody from './BCardBody';
import BCardActions from './BCardActions';

function BCard() {
  return (
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <BCardBody/>
      <BCardActions/>
    </Card>  )
}

export default BCard