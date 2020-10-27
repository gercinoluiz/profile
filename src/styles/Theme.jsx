import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
      light: "#41A794",
    },
  },

  typography: {
    h3: {
      color: "#black",
      fontSize: "2em",
      fontWeight: "bold",
    },
    h4: {
      color: "#black",
      fontSize: "1em",
    },
    listItems: {
      color: "#FFF",
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Josefin Sans",
      height: "37px",
    },
  },
});
