import React, { useState } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2% auto;
  padding: 1%;
  color: white;
  border: white 1px solid;
  border-radius: 15px;
  width: 60%;
  font-size: 1.4rem;
  text-align: left;

  input {
    margin: 2% 0;
  }
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
  font-size: 1.4rem;
`;

const NewPost = props => {

  const [post, setPost] = useState({
    guide_name: '',
    score: '',
    description: '',
    category: '',
  })

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const handlePost = e => {
    e.preventDefault();
    props.createPost(post)
  }

  return (
    <Container>
      <StyledForm onSubmit={handlePost} className='new-post-form'>
        <label htmlFor='guide_name'>Title:</label>
        <input type="text" name='guide_name' onChange={handleChange} />
        <label htmlFor='score'>Score:</label>
        <input type='number' name='score' onChange={handleChange} />
        <label htmlFor='category'>Category:</label>
        <input type='text' name='category' onChange={handleChange} />
        <label>Body:</label>
        <textarea rows='5' cols='10' name='description' className='post-input' onChange={handleChange} />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    author: state.author

  }
}

export default connect(mapStateToProps, { createPost })(NewPost)
