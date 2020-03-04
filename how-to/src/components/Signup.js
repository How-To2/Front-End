import React, { useState } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { newUser } from '../actions/index';

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

  const [newAcc, setNewAcc] = useState({
    username: '',
    password: ''
  })
  const [log, setLog] = useState(false);

  // console.log(props)

  const handleNew = e => {
    setNewAcc({
      ...newAcc,
      [e.target.name]: e.target.value
    })
  }

  const handleCreate = e => {
    e.preventDefault();
    console.log(newAcc)
    setLog(false)
    props.newUser(newAcc)
    setLog(true)
    props.history.push('/dashboard')
  }


  return (
    <Container>
      <FormContainer onSubmit={handleCreate}>
        <h2>Sign Up</h2>
        <label>User Name</label>

        <input type="text" name="username" onChange={handleNew} />
        <label>Password</label>

        <input type="password" name="password" onChange={handleNew} />
        <StyledButton type="submit">Sign Up</StyledButton>
      </FormContainer>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { newUser })(Signup)
