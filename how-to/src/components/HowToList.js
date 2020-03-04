import React from "react";
import HowTo from "./HowTo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";


const Background = styled.div`
box-sizing: border-box;
background-color: #353531;
`;

const Posts = styled.div`
width:350px;
height: 200px;
margin: 3% auto;
padding 2%;
background-color:white;
border-radius:15px;
border: #016FB9 solid 5px;
`;

const HowToList = props => {

  console.log(props)

  return (
    <div className="articles-container">
      {props.guides.map(art => {
        return (
          <Background>
            <Posts>
              <h2>{art.guide_name}</h2>
              <p className='desc'>{art.description}</p>
              <Link
                style={{
                  color: "white",
                  backgroundColor: "#016fb9",
                  borderRadius: "10px",
                  padding: "1% 3%",
                  textDecoration: "none"
                }}
                to={`/dashboard/posts/${art.id}`}
              >
                View Full Article
              </Link>
            </Posts>
          </Background>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    guides: state.guides,
    author: state.author,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, {})(HowToList)
