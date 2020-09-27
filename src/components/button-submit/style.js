import styled from "@emotion/styled";

const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 35px;
  outline: none;
  width: 35px;

  transition: all 0.2s ease 0s;
  &:active {
    transform: scale(0.8);
  }
`;

export default Container;
