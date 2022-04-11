import styled from "styled-components";

export const Container = styled.div`
  min-width: 95%;
  border-radius: 12px;

  & h3 {
    margin-bottom: 6px;
  }

  .item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    align-items: center;
    justify-items: center;
    border-top: 1px solid #d1c3c3;
    padding: 6px;

    & img {
      max-height: 20px;
    }
  }

  .last {
    border-bottom: 1px solid #d1c3c3;
  }
`;
