import styled from "styled-components";

export const ListaTarefas = styled.aside`
  grid-area: tarefas;
  height: 100%;
`;

export const ListaDia = styled.h2`
  font: 1.25rem;

  margin-bottom: 12px;

  @media screen and (min-width: 1280px) {
    text-align: center;

    font-size: 2.25rem;

    margin-bottom: 24px;
  }
`;

export const ListaItens = styled.ul`
  max-height: 350px;

  overflow-y: scroll;

  scrollbar-width: thin;

  @media screen and (min-width: 1280px) {
    overflow: auto;

    max-height: 500px;
  }
`;
