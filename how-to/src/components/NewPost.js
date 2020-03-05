import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 5%;
  padding: 1%;
  color: white;
  border: white 2px solid;
  border-radius: 15px;
`;

const Container = styled.div`
  height: 100vh;
`;

const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  color: white;
  margin: 1%;
  padding: 0.5% 4%;
  background-color: #016fb9;
`;

const NewPost = props => {

  const [post, setPost] = useState({
    guide_name: '',
    author: '',
    author_id: '',
    category: '',
    img_url: '',
    description: '',
  })

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <StyledForm>
        <label htmlFor='guide_name'>Title:</label>
        <input type="text" name='guide_name' onChange={handleChange} />
        <label htmlFor='author'>Author:</label>
        <input type='text' name='author' onChange={handleChange} value='Author' />

        <label>Body:</label>
        <input type="textarea" name='description' className='post-input' onChange={handleChange} />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Container>
  );
};

export default NewPost;
