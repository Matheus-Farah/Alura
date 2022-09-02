import React from "react";

import { Container, Texto } from "../CampoTexto/styles";
import { Lista } from "./styles";

export const ListaSuspensa = (props) => {
  return (
    <Container>
      <Texto>{props.label}</Texto>
      <Lista
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value="" />
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </Lista>
    </Container>
  );
};
