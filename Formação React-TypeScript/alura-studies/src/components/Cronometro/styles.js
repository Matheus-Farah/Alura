import styled from "styled-components";

export const Crono = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  grid-area: cronometro;
`;

export const Titulo = styled.p`
  font-size: 2rem;

  @media screen and (min-width: 1280px) {
    font-size: 2rem;
  }
`;

export const RelogioWrapper = styled.div`
  align-items: center;

  background-color: #7687a1;

  border-radius: 10px;

  box-shadow: 2px 4px 4px #0000009f;
  box-sizing: border-box;

  display: flex;

  font-size: 5rem;

  justify-content: center;

  margin-bottom: 24px;
  padding: 16px 12px;

  width: 100%;

  @media screen and (min-width: 1280px) {
    font-size: 15rem;
  }
`;
