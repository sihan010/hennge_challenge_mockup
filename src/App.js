import React from "react";
import "./styles/main.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./styles/theme";
import Home from "./routes/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
