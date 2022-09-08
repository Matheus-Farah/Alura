import React from "react";

import { RelogioDivisao, RelogioNumero } from "./styles";

interface Props {
  tempo: number | undefined;
}

export const Relogio = ({ tempo = 0 }: Props) => {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDezena, minutoUnindade] = String(minutos).padStart(2, "0");
  const [segundoDezena, segundoUnindade] = String(segundos).padStart(2, "0");
  return (
    <>
      <RelogioNumero>{minutoDezena}</RelogioNumero>
      <RelogioNumero>{minutoUnindade}</RelogioNumero>
      <RelogioDivisao>:</RelogioDivisao>
      <RelogioNumero>{segundoDezena}</RelogioNumero>
      <RelogioNumero>{segundoUnindade}</RelogioNumero>
    </>
  );
};
