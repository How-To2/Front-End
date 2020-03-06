import React, { useState, useEffect } from "react";

import NewPost from "./NewPost";
import HowToList from "./HowToList";
import DashboardContent from "./DashboardContent";

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

const Filler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-image: radial-gradient(circle, #fefb6b 25%, #ff9505, #ec4e20);
`;

const Dashboard = props => {
  const displayName = localStorage.getItem("author");

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(true);
    setLogged(false);
  }, []);

  return (
    <>
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
    </>
  );
};

const mapStateToProps = state => {
  return {
    author: state.author,
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, { getPosts })(Dashboard);
