import React from "react";

import { Campo, Container, Texto } from "./styles";

export const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <Container>
      <Texto>{props.label}</Texto>
      <Campo
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        type="text"
      />
    </Container>
  );
};
