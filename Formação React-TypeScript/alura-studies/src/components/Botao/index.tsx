import React from "react";

import { FormBotao } from "./styles";

export class Botao extends React.Component<{
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { type = "button" } = this.props;
    return <FormBotao type={type}>{this.props.texto}</FormBotao>;
  }
}
