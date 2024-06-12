import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps{
    href: string;
    children: ReactNode;
    target?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({children, href}) => {
    const StyledButton=  styled("a")(({ theme })=> ({
        backgroundColor: "transparent",
        border: '1px solid',
        borderColor: theme.palette.primary.contrastText,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover':{
            backgroundColor: theme.palette.secondary.main
        }
  
    }))

    return (
      <>
        <StyledButton href={href} target="_blank"> 

            {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  