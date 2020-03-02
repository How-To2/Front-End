import React from "react";
import styled from "styled-components";

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
  return (
    <Container>
      <FormContainer>
        <h2>Sign Up</h2>
        <label>User Name</label>

        <input type="text" name="userName" />
        <label>Password</label>

        <input type="text" name="password" />
        <StyledButton type="submit">Sign Up</StyledButton>
      </FormContainer>
    </Container>
  );
};

export default Signup;
