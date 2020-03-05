import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { loginUser } from "../actions/index";
import axios from "axios";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 50%;
  border-radius: 15px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  border: 5px #016fb9 solid;
  align-items: center;
`;

const StyledButton = styled.button`
  margin: 2%;
  width: 15%;
  color: white;
  border: none;
  border-radius: 15px;
  background-color: #016fb9;
`;

const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  const [logged, setLogged] = useState(false);

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.loginUser(login);
    setLogged(true);
    props.history.push("/dashboard");
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>User Name</label>
        <input type="text" name="username" onChange={handleChange} />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />

        <StyledButton type="submit">Login</StyledButton>
      </FormContainer>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
