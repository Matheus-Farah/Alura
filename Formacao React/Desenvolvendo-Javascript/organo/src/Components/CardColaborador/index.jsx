import React from "react";

import {
  Cabecalho,
  CargoColaborador,
  Colaborador,
  FotoColaborador,
  NomeColaborador,
  Rodape,
} from "./styles";

export const CardColaborador = () => {
  return (
    <Colaborador>
      <Cabecalho>
        <FotoColaborador
          src="https://github.com/Matheus-Farah.png"
          alt="Matheus Farah"
        />
      </Cabecalho>

      <Rodape>
        <NomeColaborador>Matheus Farah</NomeColaborador>
        <CargoColaborador>Desenvolvedor Front End</CargoColaborador>
      </Rodape>
    </Colaborador>
  );
};
