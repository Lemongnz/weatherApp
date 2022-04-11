import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-height: fit-content;
  width: 100%;

  .principalButton {
    display: flex;
    align-items: flex-end;
  }

  .list {
    position: absolute;
    background-color: transparent;
    position: absolute;
    top: -100px;
    margin-right: auto;
    margin-left: auto;
    width: 300px;
  }
  .active {
    position: absolute;
    width: 300px;
    top: 80px;
    z-index: 999;
    left: 0;
    padding: 25px;
    text-align: start;
    width: 100%;
  }
`;

export const BgDiv = styled.div`
  background-color: rgba(63, 143, 204, 0.9);

  &.active {
    width: 100%;
    height: 100%;
    z-index: 0;
    height: 100vh;
    min-width: 350px;
    position: absolute;
    top: 0;
  }
`;

export const FavElement = styled.div`
  color: #fff;
  margin: 10px 0;
  border-top: 2px solid #d1c3c3;
  min-width: 250px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    height: 100%;
    color: #fff;
    font-size: 2rem;
  }
`;
