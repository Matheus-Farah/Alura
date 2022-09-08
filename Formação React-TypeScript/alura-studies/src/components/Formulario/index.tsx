import React from "react";

import { v4 as uuidv4 } from "uuid";

import { ITarefa } from "../../types/tarefas";

import { Botao } from "../Botao";

import { Input, InputContainer, Label, NovaTarefa } from "./styles";

export class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    this.setState({
      tarefa: "",
      tempo: "00:00",
    });
  }

  render() {
    return (
      <NovaTarefa onSubmit={this.adicionarTarefa.bind(this)}>
        <InputContainer>
          <Label htmlFor="tarefa">Adicione um novo estudo</Label>
          <Input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
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
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </InputContainer>
        <Botao texto="Adicionar" type="submit" />
      </NovaTarefa>
    );
  }
}
