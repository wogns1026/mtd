import React from "react";
import TradePoster from "./TradePoster";
import Loader from "Components/Loading/Loader";
import Message from "Components/Loading/Message";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${(props) => props.gridSize});
  grid-gap: ${(props) => props.gridGap};
  margin-bottom: ${(props) => props.gridGap};
`;

const TradePosterList = ({
  posterList,
  loading,
  error,
  gridSize = "210px",
  gridGap = "60px",
}) => {
  return loading ? (
    <Loader />
  ) : error ? (
    <Message color="red" text={error} />
  ) : (
    <Container>
      <Grid gridSize={gridSize} gridGap={gridGap}>
        {posterList.map((post) => (
          <TradePoster
            key={post.id}
            id={post.id}
            posterImgUrl={post.imgUrl}
            title={post.title}
            price={post.price}
            location={post.location}
            interest={post.interest}
            height={gridSize}
          />
        ))}
      </Grid>
    </Container>
  );
};
export default TradePosterList;
