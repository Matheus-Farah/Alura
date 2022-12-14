import styled from "styled-components";

export const FormBotao = styled.button`
  align-self: center;

  color: #272626;
  background-color: #88bcd1;
  box-shadow: 2px 4px 4px #0000009f;

  border-radius: 10px;

  cursor: pointer;

  font-size: 1.25rem;

  padding: 16px;

  width: 150px;

  &:active {
    background-color: #7ca6b7;
    box-shadow: 2px 2px 4px #0000009f inset;
  }

  @media screen and (min-width: 1280px) {
    grid-column-start: span 2;

    justify-self: center;

    width: 200px;

    font-size: 2.25rem;
  }
`;
