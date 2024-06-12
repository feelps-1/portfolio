import { styled, Container, Grid, Box, Typography } from "@mui/material"
import StyledProject from "../../../../components/StyledProjects/styledProject"
import Cin from "../../../../assets/images/educin.png"
import If from "../../../../assets/images/eduif.jpg"


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

    const StyledSkillImg =  styled("img")(({theme})=> ({
        width: "30%",
        border:"1px solid",
        borderColor: theme.palette.primary.contrastText,
        borderRadius: "50%",
 
    }))
  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
            <Grid container spacing={7}>
                <Grid item xs={12} md={4} bgcolor="primary.main" textAlign="center">
                        <StyledSkillImg src = {Cin} />
                        <Typography textAlign="center" color="theme.palette.primary.contrastText">
                            Bacharelado em Sistemas de Informação
                        </Typography>
                        <Typography textAlign="center" color="theme.palette.primary.contrastText">
                            Breve descrição pipipi popopo
                        </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                <Box bgcolor="primary.main" textAlign="center">
                        <Typography textAlign="center">
                            Tchong
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                <Box bgcolor="primary.main" textAlign="center">
                        <Typography textAlign="center">
                            Tchong
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box bgcolor="primary.main" textAlign="center">
                        <StyledSkillImg src = {If} />
                        <Typography textAlign="center" color="theme.palette.primary.contrastText">
                            Técnico em Eletrônica
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                <Box bgcolor="primary.main" textAlign="center">
                        <Typography textAlign="center">
                            Tchong
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                <Box bgcolor="primary.main" textAlign="center">
                        <Typography textAlign="center">
                            Tchong
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Container>
      </StyledAbout>
    </>
  )
}

export default About
