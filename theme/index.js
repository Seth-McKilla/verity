import { createTheme } from "@mui/material/styles";

export default createTheme({
  typography: {
    fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#D44000",
    },
    secondary: {
      main: "#FFEFCF",
    },
  },
});
