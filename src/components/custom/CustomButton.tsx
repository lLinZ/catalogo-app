import { FC, ReactNode } from 'react'
import { Button, ButtonProps, SxProps, Theme } from '@mui/material'

interface Props extends ButtonProps {
  customStyles?: SxProps<Theme> | undefined;
  children: ReactNode;
}
const baseStyles = {
  textTransform: "none",
  padding: 1.8,
  borderRadius: 3,
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
}
export const CustomButton: FC<Props> = (props) => {
  const styles: SxProps<Theme> =
    props.customStyles ?
      {
        baseStyles,
        ...props.customStyles
      }
      : baseStyles

  return (
    <Button
      disableElevation
      variant='contained'
      sx={{ ...styles }}
      {...props}
    >
      {props.children}
    </Button>
  )
}
