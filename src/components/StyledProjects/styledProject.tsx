import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledProjectProps{
    onClick: () => void
    children: ReactNode
}

const StyledProject: React.FC<StyledProjectProps> = ({children, onClick}) => {
    const StyledProject=  styled("button")(({ theme })=> ({
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
        <StyledProject onClick={onClick}> 
            {children}
        </StyledProject>
      </>
    )
  }
  
  export default StyledProject
  