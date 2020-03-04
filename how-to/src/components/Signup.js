import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
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

const Signup = props => {
  const [signup, setSignUp] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setSignUp({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  async function makePostRequest() {
    let params = {
      username: "Bob",
      passworrd: "Pieee"
    };
    let result = await axios.post(
      "https://how-to-bw2.herokuapp.com/api/auth/register",
      params
    );

    console.log(result.data);
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label>User Name</label>
        <input type="text" name="userName" onChange={handleChange} />

        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} />

        <StyledButton type="submit">Sign Up</StyledButton>
      </FormContainer>
    </Container>
  );
};

export default Signup;
