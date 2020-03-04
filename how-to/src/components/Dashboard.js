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
  flex-direction: column;
  background-color: #353531;
`;

const UserNameContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const Dashboard = props => {
  const displayName = localStorage.getItem("author");

  return (
    <UserNameContainer>
      <UserNameContent>
        <h2>Welcome, {displayName}!</h2>

        <Link
          style={{
            color: "white",
            backgroundColor: "#016fb9",
            borderRadius: "10px",
            padding: "20px",
            textDecoration: "none"
          }}
          to="/dashboard/posts"
          onClick={props.getPosts}
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

const mapStateToProps = state => {
  return {
    author: state.author,
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, { getPosts })(Dashboard);
