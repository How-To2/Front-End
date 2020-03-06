import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import { connect } from "react-redux";
import { getPostId, editPost, deletePost } from "../actions/index";
import { useParams } from "react-router-dom";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #353531;
  height: 100vh;
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

const HowTo = props => {
  let guideId = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const [updatePost, setUpdatePost] = useState({
    guide_name: "",
    score: "",
    description: "",
    category: ""
  });
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    props.getPostId(guideId.id);
  }, [guideId]);

  const handleChange = e => {
    setUpdatePost({
      ...updatePost,
      [e.target.name]: e.target.value
    });
  };

  const startEdit = e => {
    e.preventDefault();
    console.log(props.singleGuide.guide);
    setUpdatePost({
      guide_name: props.singleGuide.guide.guide_name,
      score: props.singleGuide.guide.score,
      description: props.singleGuide.guide.description,
      category: props.singleGuide.guide.category
    });
    setIsEditing(true);
    console.log(updatePost);
  };

  const submitEdit = e => {
    e.preventDefault();
    props.editPost(guideId.id, updatePost);
    setIsEditing(false);
  };

  return (
    <Background>
      <UserPost>
        {isEditing === false ? (
          <>
            <h1>
              {props.singleGuide.guide
                ? props.singleGuide.guide.guide_name
                : null}
            </h1>
            <p>
              {props.singleGuide.guide
                ? props.singleGuide.guide.description
                : null}
            </p>
            <ul className="step-list">
              {props.singleGuide.steps ? (
                <>
                  {props.singleGuide.steps.map(item => {
                    return (
                      <li>
                        <strong>{item.step_number}.</strong> {item.step_name}
                      </li>
                    );
                  })}
                </>
              ) : null}
            </ul>
            <AuthorLikes>
              <h4>
                Author:{" "}
                {props.singleGuide.guide
                  ? props.singleGuide.guide.author
                  : null}
              </h4>
              <h4>
                Score:{" "}
                {props.singleGuide.guide ? props.singleGuide.guide.score : null}
              </h4>
              {props.singleGuide.guide ? (
                <>
                  {props.singleGuide.guide.author ===
                  localStorage.getItem("author") ? (
                    <>
                      <button className="edit-btn" onClick={startEdit}>
                        Edit
                      </button>
                      <button
                        className="edit-btn"
                        onClick={() => {
                          props.deletePost(guideId.id);
                          props.history.push("/dashboard/posts");
                        }}
                      >
                        Delete
                      </button>
                    </>
                  ) : null}
                </>
              ) : null}
            </AuthorLikes>
          </>
        ) : (
          <>
            <form className="edit-form" onSubmit={submitEdit}>
              <h2>Edit Guide</h2>
              <label htmlFor="guide_name">Title: </label>
              <input
                type="text"
                name="guide_name"
                onChange={handleChange}
                value={updatePost.guide_name}
              ></input>
              <br />
              <label htmlFor="score">Score: </label>
              <input
                type="number"
                name="score"
                value={updatePost.score}
                onChange={handleChange}
              />
              <br />
              <label htmlFor="category">Category: </label>
              <input
                type="text"
                name="category"
                value={updatePost.category}
                onChange={handleChange}
              />
              <br />
              <label htmlFor="description">Body: </label>
              <textarea
                rows="5"
                cols="10"
                name="description"
                value={updatePost.description}
                onChange={handleChange}
              />
              <br />
              <button className="edit-btn">Save</button>
            </form>
          </>
        )}
      </UserPost>

      <ReviewList />
    </Background>
  );
};

const mapStateToProps = state => {
  return {
    singleGuide: state.singleGuide,
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, { getPostId, editPost, deletePost })(
  HowTo
);
