import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Header from "../header/header.component";

import "../../common/styles";
import "./app.component.css";
import client from "../../common/apollo-client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { Paper } from "@mui/material";
import { routes as appRoutes } from "../routes/routes";
import { Footer } from "../footer/footer.component";

const theme = createTheme({
  palette: {
    mode: "light",
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
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
