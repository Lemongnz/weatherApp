import styled from "styled-components";

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .one {
    margin-bottom: 30px;
    & h2 {
      font-size: 2.5rem;
      margin: 0;
    }
    & p {
      margin: 0;
    }
  }
  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 90%;
    margin-bottom: 30px;

    & img {
      max-height: 80px;
      margin-bottom: 10px;
    }
  }

  .three {
    & p {
      font-size: 5rem;
      margin: 0;
    }

    & span {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
`;
