import React from "react";

import { Botao } from "../Botao";
import { Relogio } from "./Relogio";

import { Crono, RelogioWrapper, Titulo } from "./styles";

export const Cronometro = () => {
  return (
    <Crono>
      <Titulo>Escolha um card e inicie o cronômetro</Titulo>

      <RelogioWrapper>
        <Relogio />
      </RelogioWrapper>
      <Botao texto="Começar!" />
    </Crono>
  );
};
