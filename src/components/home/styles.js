import styled from "styled-components";

export const Container = styled.div`
  max-width: 930px;
  min-width: 500px;
  min-height: 85vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  text-align: center;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    min-height: 85vh;
    min-width: 75vw;
  }

  .favList {
    position: absolute;
    top: -8px;
    left: 0;
  }
  .search__Container {
    width: 100%;

    & input {
      display: block;
      border-radius: 0 0 8px 8px;
      appearance: none;
      background: none;
      border: none;
      outline: none;
      font-size: 18px;
      background-color: rgba(221, 221, 221, 0.5);
      width: 90%;
      margin-top: -25px;
      color: #fff;
      min-height: 40px;
      padding: 0 8px;
    }

    & input::placeholder {
      color: #fff;
    }
  }
`;
