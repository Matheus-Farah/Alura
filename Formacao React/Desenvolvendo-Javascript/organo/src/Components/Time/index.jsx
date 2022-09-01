import React from "react";

import { CardColaborador } from "../CardColaborador";

import { TimeContainer, Titulo } from "./styles";

export const Time = (props) => {
  return (
    <TimeContainer style={{ backgroundColor: props.corSecundaria }}>
      <Titulo style={{ borderBottomColor: props.corPrimaria }}>
        {props.nome}
      </Titulo>
      <CardColaborador />
    </TimeContainer>
  );
};
