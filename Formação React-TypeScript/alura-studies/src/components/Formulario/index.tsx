import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { ITarefa } from "../../types/tarefas";

import { Botao } from "../Botao";

import { Input, InputContainer, Label, NovaTarefa } from "./styles";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export const Formulario = ({ setTarefas }: Props) => {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <NovaTarefa onSubmit={adicionarTarefa}>
      <InputContainer>
        <Label htmlFor="tarefa">Adicione um novo estudo</Label>
        <Input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          placeholder="O que você que estudar?"
          required
        />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="tempo">Tempo</Label>
        <Input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </InputContainer>
      <Botao texto="Adicionar" type="submit" />
    </NovaTarefa>
  );
};
