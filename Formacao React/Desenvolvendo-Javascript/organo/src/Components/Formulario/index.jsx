import React from "react";

import { CampoTexto } from "../CampoTexto";

import { FormContainer, FormInterior } from "./styles";

export const Formulario = () => {
  return (
    <FormContainer>
      <FormInterior>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
      </FormInterior>
    </FormContainer>
  );
};
