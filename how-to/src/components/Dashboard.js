import React from "react";

import NewPost from "./NewPost";
import HowToList from "./HowToList";

import { Link, Route } from "react-router-dom";
import HowTo from "./HowTo";

import styled from "styled-components";
import { connect } from "react-redux";
import { getPosts } from "../actions";

const UserNameContainer = styled.div`
  display: flex;
  padding: 1%;
  color: white;
  justify-content: space-evenly;
  background-color: #353531;
`;

const Filler = styled.div`
  background-color: #353531;
  height: 100vh;
  color: white;
`;

const Dashboard = props => {
  const displayName = localStorage.getItem("author");

  return (
    <div>
      <UserNameContainer>
        <h2>Welcome, {displayName}!</h2>

        <Link
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            padding: "0.5% 1%",
            backgroundColor: "#016fb9",
            borderRadius: "10px",
            textDecoration: "none"
          }}
          to="/dashboard/posts"
          onClick={props.getPosts}
        >
          View Posts
        </Link>

        <Link
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            backgroundColor: "#016fb9",
            borderRadius: "10px",
            padding: "0.5% 1%",
            textDecoration: "none"
          }}
          to="/dashboard/new-post"
        >
          New Post
        </Link>
        <Route exact path="/dashboard/posts" component={HowToList} />
        <Route path="/dashboard/new-post" component={NewPost} />
        <Route path="/dashboard/posts/:id" component={HowTo} />
      </UserNameContainer>
      <Filler>
        <h1>WELCOME TO THE LAND OF KNOWLEDGE</h1>
      </Filler>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    author: state.author,
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, { getPosts })(Dashboard);
