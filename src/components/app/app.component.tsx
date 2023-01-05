import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Header from "../header/header.component";
import About from "../../pages/about/about.page";
import Home from "../../pages/home/home.page";

import "../../common/styles";
import "./app.component.css";
import client from "../../common/apollo-client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
