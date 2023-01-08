import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Header from "../header/header.component";
import About from "../../pages/about/about.page";
import Home from "../../pages/home/home.page";

import "../../common/styles";
import "./app.component.css";
import client from "../../common/apollo-client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { Paper } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Paper>
            <Header />
          </Paper>

          <Routes>
            <Route path="/about" element={<About />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
