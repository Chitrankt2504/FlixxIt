import React from "react";
import styled from "styled-components";

function Card({ movieData, isLiked = false }) {
  return (
    <Container>
      <img src={`https://image.themoviedb.org/t/p/w200${movieData.image}`} alt="" />
    </Container>
  );
}
const Container = styled.div``;

export default Card;
