import React from "react";

import NewPost from "./NewPost";
import HowToList from "./HowToList";

import { Link, Route } from "react-router-dom";
import HowTo from "./HowTo";

import styled from "styled-components";

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

const Dashboard = props => {
  const UserNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #353531;
  `;

  const UserNameContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 1%;
    color: white;
  `;
  return (
    <UserNameContainer>
      <UserNameContent>
        <h2>Welcome 'Username'!</h2>

        <Link
          style={{
            color: "white",
            backgroundColor: "#016fb9",
            borderRadius: "10px",
            padding: "20px",
            textDecoration: "none"
          }}
          to="/dashboard/posts"
        >
          View Posts
        </Link>

        <Link
          style={{
            color: "white",
            backgroundColor: "#016fb9",
            borderRadius: "10px",
            padding: "20px",
            textDecoration: "none"
          }}
          to="/dashboard/new-post"
        >
          New Post
        </Link>
      </UserNameContent>
      <Route exact path="/dashboard/posts" component={HowToList} />
      <Route path="/dashboard/new-post" component={NewPost} />
      <Route path="/dashboard/posts/:id" component={HowTo} />
    </UserNameContainer>
  );
};

export default Dashboard;
