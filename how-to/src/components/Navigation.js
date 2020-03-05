import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import logo from "../images/logo-new.png";
import Signup from "./Signup";
import styled from "styled-components";
import Login from "./Login";
import Dashboard from "./Dashboard";
import DashboardContent from "./DashboardContent";
import { connect } from "react-redux";

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
  const [logged, setLogged] = useState(true);

  return (
    <>
      <NavBar className="navbar">
        <ImageContainer>
          <img src={logo} />
        </ImageContainer>
        <Link to="/dashboard">Dashboard</Link>
        {localStorage.getItem("token") ? (
          <Link
            to="/"
            onClick={e => {
              e.preventDefault();
              localStorage.clear();
              setLogged(false);
            }}
          >
            Log out
          </Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </NavBar>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/dashboard" component={DashboardContent} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    author: state.author,
    guides: state.guides,
    singleGuide: state.singleGuide
  };
};

export default connect(mapStateToProps, {})(Navigation);
