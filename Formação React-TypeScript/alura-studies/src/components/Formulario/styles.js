import styled from "styled-components";

export const NovaTarefa = styled.form`
  display: flex;
  flex-direction: column;

  grid-area: nova-tarefa;

  background-color: #7687a1;
  box-shadow: 2px 4px 4px #0000009f;

  border-radius: 10px;

  padding: 12px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-around;

    font-size: 2.25rem;

    padding: 24px;

    box-sizing: border-box;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 16px;

  @media screen and (min-width: 1280px) {
    width: calc(60% -12px);

    &:last-of-type {
      width: 40%;
    }
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;

  font-size: 1.25rem;

  @media screen and (min-width: 1280px) {
    font-size: 2rem;
  }
`;

export const Input = styled.input`
  width: 100%;

  padding: 8px 12px 4px;

  box-sizing: border-box;
  box-shadow: 0px 2px 4px #2d2b2b9f inset;

  border: unset;
  border-radius: 5px;

  background-color: #5d677c;

  &::placeholder {
    color: #bfbfbf;
  }

  @media screen and (min-width: 1280px) {
    height: 100%;

    font-size: 1.75rem;
  }
`;
