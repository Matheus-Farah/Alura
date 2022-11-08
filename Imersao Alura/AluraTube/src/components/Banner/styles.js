import styled from "styled-components";

export const StyledBanner = styled.div`
  background-image: url(${({ bg }) => bg});
  background-size: 100%;

  margin-top: 55px;

  height: 230px;
`;
