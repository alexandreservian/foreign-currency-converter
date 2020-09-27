import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 20px;

  @media (max-width: 1060px) {
    font-size: 13px;
  }
`;

export const Box = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 4px 29px rgba(0, 0, 0, 0.1);
  padding: 25px;
  width: 1020px;

  @media (max-width: 1060px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font: 1.6em/1.2em "roboto-medium";
  margin: 0 0 20px 0;
`;
