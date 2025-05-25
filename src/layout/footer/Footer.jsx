import { Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ROUTES from "../../routes/routesDict"

const footerStyle = {
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "minHeight": "20vh"
}


const btnStyle = {
  "marginLeft": "10px"
}

function Footer() {
  const navigate = useNavigate();

  return (
    <Box sx={footerStyle}>
      <Button variant='contained' onClick={() => navigate(ROUTES.root)}>Home</Button>
      <Button sx={btnStyle} variant='contained' onClick={() => navigate(ROUTES.about)}>About</Button>
    </Box>
  )
}

export default Footer