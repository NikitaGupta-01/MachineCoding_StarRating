import { styled } from "styled-components";

export const StarRatingDiv = styled.div`
  display: flex;
  direction: row;
  margin: 10px 10px 10px 260px;
`;

export const StarDiv = styled.div`
  &.star {
    font-size: 2rem;
    color: gray;
    cursor: pointer;
    transition: color 200ms;
  }
  &.star.filled {
    color: gold;
  }
`;
