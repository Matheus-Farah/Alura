import { ITarefa } from "../../../types/tarefas";

import { ItemLista, ItemSelecionado, Tarefa, Tempo } from "./styles";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export const Item = ({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) => {
  return (
    <ItemLista
      className={`${selecionado ? <ItemSelecionado /> : ""}`}
      onClick={() =>
        selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <Tarefa>{tarefa}</Tarefa>
      <Tempo>{tempo} </Tempo>
    </ItemLista>
  );
};
