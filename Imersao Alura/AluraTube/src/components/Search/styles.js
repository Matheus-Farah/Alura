import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;

  border: 1px solid ${({ theme }) => theme.borderBase};
  border-radius: 2px;

  max-width: 425px;
  width: 100%;

  overflow: hidden;

  input {
    width: 80%;

    padding: 4px 6px;

    border: none;

    outline: none;

    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  button {
    flex: 1;

    cursor: pointer;

    border: none;
    border-left: 1px solid ${({ theme }) => theme.borderBase};

    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);

    width: 40px;
    height: 40px;

    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;
