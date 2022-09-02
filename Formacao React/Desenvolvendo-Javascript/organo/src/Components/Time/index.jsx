import React from "react";

import { Colaboradores, TimeContainer, Titulo } from "./styles";

import { CardColaborador } from "../CardColaborador";

export const Time = (props) => {
  return props.colaboradores.length > 0 ? (
    <TimeContainer style={{ backgroundColor: props.corSecundaria }}>
      <Titulo style={{ borderBottomColor: props.corPrimaria }}>
        {props.nome}
      </Titulo>
      <Colaboradores>
        {props.colaboradores.map((colaborador) => (
          <CardColaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corDeFundo={props.corPrimaria}
          />
        ))}
      </Colaboradores>
    </TimeContainer>
  ) : (
    ""
  );
};
