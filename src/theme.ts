import { createTheme, responsiveFontSizes } from '@mui/material';


let theme = createTheme({
  palette: {
    primary: {
      main: "#2a2b2a",
    },
    secondary: {
      main: "#B098A4",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif, Helvetica, Arial"
  }
});

theme = responsiveFontSizes(theme);

export default theme;
