import React from "react";
import styled from "styled-components";
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
const DashboardContent = () => {
  return (
    <Filler>
      <h1>Welcome to the land of free knowledge</h1>
      <h2>Click New Post to start making guides for anything and everything</h2>
    </Filler>
  );
};
export default DashboardContent;
