import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;

  width: 100%;

  padding: 16px;

  overflow: hidden;

  h2 {
    font-size: 16px;
    text-transform: capitalize;

    margin-bottom: 16px;
  }

  img {
    aspect-ratio: 16/9;
    object-fit: cover;

    font-weight: 500;

    height: auto;
    width: 100%;
    max-width: 210px;
  }

  section {
    width: 100%;

    padding: 0;
    padding: 16px;

    overflow: hidden;

    div {
      width: calc(100vw - 16px * 4);

      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);

      overflow-x: scroll;

      scroll-snap-type: x mandatory;

      a {
        scroll-snap-align: start;

        span {
          padding-top: 8px;
          padding-right: 24px;

          display: block;

          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
