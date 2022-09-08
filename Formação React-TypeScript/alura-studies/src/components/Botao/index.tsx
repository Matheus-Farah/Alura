import React from "react";

import { FormBotao } from "./styles";

interface Props {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const Botao = ({ onClick, type, texto }: Props) => {
  return (
    <FormBotao onClick={onClick} type={type}>
      {texto}
    </FormBotao>
  );
};
