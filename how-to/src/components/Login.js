import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content:center:
`;

const Login = props => {
  return (
    <Container>
      <h1>Login</h1>
      <FormContainer>
        <label>User Name</label>
        <input type="text" name="userName" />

        <label>Password</label>
        <input type="password" name="password" />

        <button type="submit">Login</button>
      </FormContainer>
    </Container>
  );
};

export default Login;
