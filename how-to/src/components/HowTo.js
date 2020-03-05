import React, { useEffect } from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import { connect } from 'react-redux';
import { getPostId } from '../actions/index';
import { useParams } from "react-router-dom";

const Background = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: border-box;
background-color: #353531;
`;

const UserPost = styled.div`
width:80%;
margin: 2%;
padding 2%;
background-color:white;
border-radius:15px;
border: #016FB9 solid 5px;
`;

const AuthorLikes = styled.div`
display: flex;
justify-content: space-evenly;
`;

const HowTo = (props) => {
  let guideId = useParams();

  console.log(props)

  useEffect(() => {
    props.getPostId(guideId.id);
  }, [])

  return (
    <Background>
      <UserPost>
        <h1>{props.singleGuide.guide ? props.singleGuide.guide.guide_name : null}</h1>
        <p>
          {props.singleGuide.guide ? props.singleGuide.guide.description : null}
        </p>
        <ul className='step-list'>
          {props.singleGuide.steps ? (<>
          {props.singleGuide.steps.map(item => {
            return <li><strong>{item.step_number}.</strong> {item.step_name}</li>
          })}
          </>) : null}
        </ul>
        <AuthorLikes>
          <h4>Author: {props.singleGuide.guide ? props.singleGuide.guide.author : null}</h4>
          <h4>Score: {props.singleGuide.guide ? props.singleGuide.guide.score : null}</h4>
          {props.singleGuide.guide ? (<>{props.singleGuide.guide.author === localStorage.getItem('author') ? (<button className='edit-btn'>Edit</button>) : null}</>)  : null}
        </AuthorLikes>
      </UserPost>
      <ReviewList />
    </Background>
  );
};

const mapStateToProps = state => {
  return {
    singleGuide: state.singleGuide,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { getPostId })(HowTo)
