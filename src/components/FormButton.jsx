import { Button } from '@mui/material'

const FormButton = ({
    varient = "contained",
    component = "button",
    size = "medium",
    color = "primary",
    onClick,
    disabled = false,
    node,
}) => {
  return (
      <Button
          variant={varient}
          component={component}
          size={size}
          color={color}
          onClick={onClick}
          disabled={disabled}
          fullWidth
      >
          {node}
    </Button>
  )
}

export default FormButton