import styled from "styled-components";

export const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;

  height: 56px;
  width: 100%;

  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};

  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};

  padding: 0 16px;
  gap: 16px;
  position: fixed;

  .logo {
    width: 100%;
    max-width: 80px;

    @media (min-width: 600px) {
      max-width: 127px;
    }

    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;
