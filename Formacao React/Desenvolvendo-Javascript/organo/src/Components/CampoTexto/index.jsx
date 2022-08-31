import React from "react";

import { Campo, Container, Texto } from "./styles";

export const CampoTexto = (props) => {
  return (
    <Container>
      <Texto>{props.label}</Texto>
      <Campo placeholder={props.placeholder} type="text" />
    </Container>
  );
};
