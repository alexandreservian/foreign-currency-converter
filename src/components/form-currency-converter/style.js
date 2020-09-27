import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1060px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxInput = styled.div`
  padding: 0 15px 0 0;
  width: 200px;

  @media (max-width: 1060px) {
    padding: 0 0 15px 0;
    width: 100%;
  }
`;

export const BoxSelect = styled.div`
  padding: 0 15px 0 0;
  width: 340px;

  @media (max-width: 1060px) {
    padding: 0 0 15px 0;
    width: 100%;
  }
`;

export const BoxButtonReverse = styled.div`
  margin: 0 15px 0 0;
  height: 40px;
  width: 40px;

  @media (max-width: 1060px) {
    margin: 0;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 0 0 5px 0;
`;
