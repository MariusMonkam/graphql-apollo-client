//import { useTheme } from "@mui/material/styles";

import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import { NavLink } from "react-router-dom";

import "./header.component.css";

const Header: React.FC = () => {
  return (
    <header>
      <AppBar component="nav">
        <Toolbar>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
