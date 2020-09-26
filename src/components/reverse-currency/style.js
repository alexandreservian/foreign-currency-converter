import styled from "@emotion/styled";

const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 40px;
  outline: none;
  width: 40px;
  transition: all 0.3s ease 0s;
  &:hover {
    transform: rotate(-180deg);
  }
`;

export default Container;
