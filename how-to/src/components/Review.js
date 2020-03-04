import React from "react";
import styled from "styled-components";

const UserReview = styled.div`
  margin: 2%;
  padding 2%;
  width:50%;
  background-color:white;
  border-radius:15px;
  border: #FF9505 solid 5px;  `;

  const AuthorLikes = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;

const Review = props => {

  return (
    <UserReview>
      <h1>User Review</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Scelerisque
        fermentum dui faucibus in. Aliquam nulla facilisi cras fermentum odio
        eu. Aliquam ut porttitor leo a diam sollicitudin tempor id. Proin
        fermentum leo vel orci porta non pulvinar. Id eu nisl nunc mi ipsum
        faucibus vitae. Dolor morbi non arcu risus quis varius quam quisque.
        Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Aliquet
        porttitor lacus luctus accumsan tortor posuere. Velit egestas dui id
        ornare arcu. Gravida cum sociis natoque penatibus. Platea dictumst
        vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Pharetra
      </p>
      <AuthorLikes>
        <h4>Author:</h4>
        <h4>Likes:</h4>
      </AuthorLikes>
    </UserReview>
  );
};

export default Review;
