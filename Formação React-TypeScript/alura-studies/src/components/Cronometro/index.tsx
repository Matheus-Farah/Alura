import React, { useEffect, useState } from "react";

import { tempoParaSegundos } from "../../common/utils/time";

import { ITarefa } from "../../types/tarefas";

import { Botao } from "../Botao";
import { Relogio } from "./Relogio";

import { Crono, RelogioWrapper, Titulo } from "./styles";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

export const Cronometro = ({ selecionado, finalizarTarefa }: Props) => {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(String(selecionado.tempo)));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <Crono>
      <Titulo>Escolha um card e inicie o cronômetro</Titulo>
      <RelogioWrapper>
        <Relogio tempo={tempo} />
      </RelogioWrapper>
      <Botao onClick={() => regressiva(tempo)} texto="Começar!" />
    </Crono>
  );
};
