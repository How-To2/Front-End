import React from "react";
import HowTo from "./HowTo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";

const dummyData = [
  {
    title: "How to bake chicken",
    body:
      "Pound chicken to an even thickness. Place chicken between two pieces of parchment paper or in a sealed plastic bag and lightly pound. This will tenderize the meat and also help the chicken to cook evenly Rub all over with olive oil. You could also use melted butter, or a variety of different types of oil, like avocado or corn oil. Season the chicken well. Rub salt, pepper, garlic powder, chili powder and onion powder all over the chicken. I like to add a sprinkling of salt over the top just to make sure it’s probably seasoned. Sometimes I’ll use paprika in place of chili powder.",
    author: "Yellowblissroad",
    id: 1
  },
  {
    title: "How to bake chicken",
    body:
      "Pound chicken to an even thickness. Place chicken between two pieces of parchment paper or in a sealed plastic bag and lightly pound. This will tenderize the meat and also help the chicken to cook evenly Rub all over with olive oil. You could also use melted butter, or a variety of different types of oil, like avocado or corn oil. Season the chicken well. Rub salt, pepper, garlic powder, chili powder and onion powder all over the chicken. I like to add a sprinkling of salt over the top just to make sure it’s probably seasoned. Sometimes I’ll use paprika in place of chili powder.",
    author: "Yellowblissroad",
    id: 2
  }
];

const HowToList = props => {

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
