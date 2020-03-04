import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5%;
  padding: 1%;
  color: white;
  border: white 2px solid;
  border-radius: 15px;
`;

const Container = styled.div``;

const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  color: white;
  margin: 1%;
  padding: 0.5% 4%;
  background-color: #016fb9;
`;

const NewPost = props => {
  return (
    <Container>
      <StyledForm>
        <label>Title:</label>
        <input type="text" />

        <label>Body:</label>
        <input type="textarea" />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Container>
  );
};

export default NewPost;
