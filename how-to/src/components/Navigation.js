import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";

import logo from "../images/logo-new.png";

import Signup from "./Signup";
import HowTo from "./HowTo";
import styled from "styled-components";
import Login from "./Login";
import Dashboard from "./Dashboard";
import DashboardContent from "./DashboardContent";

const NavBar = styled.div`
  display: flex;
  padding: 1% 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: black solid 2px;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
`;

const Navigation = props => {
  return (
    <>
      <NavBar className="navbar">
        <ImageContainer>
          <img src={logo} />
        </ImageContainer>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </NavBar>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/dashboard" component={DashboardContent} />
    </>
  );
};

export default Navigation;
