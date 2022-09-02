import React from "react";

import {
  Cabecalho,
  CargoColaborador,
  Colaborador,
  FotoColaborador,
  NomeColaborador,
  Rodape,
} from "./styles";

export const CardColaborador = ({ imagem, nome, cargo, corDeFundo }) => {
  return (
    <Colaborador>
      <Cabecalho style={{ backgroundColor: corDeFundo }}>
        <FotoColaborador src={imagem} alt={nome} />
      </Cabecalho>

      <Rodape>
        <NomeColaborador>{nome}</NomeColaborador>
        <CargoColaborador>{cargo}</CargoColaborador>
      </Rodape>
    </Colaborador>
  );
};
