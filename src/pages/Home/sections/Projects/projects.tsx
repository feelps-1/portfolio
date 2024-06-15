import { styled, Container, Grid, Box, Typography} from "@mui/material"
import Cin from "../../../../assets/images/educin.png"
import If from "../../../../assets/images/eduif.jpg"
import Synesthesia from "../../../../assets/images/synesthesia.png"
import CardComponent from "../../../../components/ProjectCard/projectCard"

const About = () => {
    const StyledAbout =  styled("div")(({theme})=> ({
        backgroundColor: theme.palette.secondary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        [theme.breakpoints.up('xs')]: { 
          paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { 
          paddingTop: "0",
        }

    }))

  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
            <Grid container spacing={7}>
                <Grid item xs={12} md={4}>
                    <Box>
                <CardComponent
                    href="https://synesthesiavision.com/"
                    image={Synesthesia}
                    alt="green iguana"
                    title="Bolsista de Iniciação Científica"
                    description="Sou bolsista no GRENDES - LabGeo no IFPE Campus Recife"
                />
                </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                
                <CardComponent
                    href="https://synesthesiavision.com/"
                    image={Synesthesia}
                    alt="green iguana"
                    title="Bolsista de Iniciação Científica"
                    description="Sou bolsista no GRENDES - LabGeo no IFPE Campus Recife, onde atuo no desenvolvimento de um óculos sensorial para cegos."
                />
          
                </Grid>
                <Grid item xs={12} md={4}>
           
                <CardComponent
                    href="https://synesthesiavision.com/"
                    image={Cin}
                    alt="green iguana"
                    title="Bolsista de Iniciação Científica"
                    description="Sou bolsista no GRENDES - LabGeo no IFPE Campus Recife, onde atuo no desenvolvimento de um óculos sensorial para cegos."
                />
      
                </Grid>
                <Grid item xs={12} md={4}>
       
                    <CardComponent
                    href="https://synesthesiavision.com/"
                    image={If}
                    alt="green iguana"
                    title="Bolsista de Iniciação Científica"
                    description="Sou bolsista no GRENDES - LabGeo no IFPE Campus Recife, onde atuo no desenvolvimento de um óculos sensorial para cegos."
                />
        
                </Grid>
                <Grid item xs={12} md={4}>
    
                <CardComponent
                    href="https://synesthesiavision.com/"
                    image={Synesthesia}
                    alt="green iguana"
                    title="Bolsista de Iniciação Científica"
                    description="Sou bolsista no GRENDES - LabGeo no IFPE Campus Recife, onde atuo no desenvolvimento de um óculos sensorial para cegos."
                />

                </Grid>
                <Grid item xs={12} md={4}>

                <CardComponent
                    href="https://synesthesiavision.com/"
                    image={Synesthesia}
                    alt="green iguana"
                    title="Bolsista de Iniciação Científica"
                    description="Sou bolsista no GRENDES - LabGeo no IFPE Campus Recife, onde atuo no desenvolvimento de um óculos sensorial para cegos."
                />

                </Grid>
            </Grid>

        </Container>
      </StyledAbout>
    </>
  )
}

export default About
