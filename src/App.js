import React from "react";
import LandingPage from "./pages/LandingPage";
import Header from "./pages/ui/Header";

import ThemeProvider from "@material-ui/styles/ThemeProvider";

import theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      
        <Header />
        <LandingPage />

    </ThemeProvider>
  );
}

export default App;
