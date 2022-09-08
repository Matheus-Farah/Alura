import styled from "styled-components";

export const ItemLista = styled.li`
  background-color: #4d4d4d;

  border-radius: 8px;

  box-shadow: 2px 4px 4px #0000009f;

  padding: 12px;
  margin-bottom: 8px;

  position: relative;

  cursor: pointer;

  @media screen and (min-width: 1280px) {
    font-size: 1.8rem;
  }
`;

export const Tarefa = styled.h3`
  margin-bottom: 8px;

  word-break: break-all;
`;

export const Tempo = styled.span`
  color: #d0d0d0;
`;

export const ItemSelecionado = styled.li`
  background-color: #292929;

  box-shadow: 2px 4px 4px #0000009f inset;
`;
