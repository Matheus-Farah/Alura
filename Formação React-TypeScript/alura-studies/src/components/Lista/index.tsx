import { ITarefa } from "../../types/tarefas";

import { Item } from "./Item";

import { ListaDia, ListaItens, ListaTarefas } from "./styles";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export const Lista = ({ tarefas, selecionaTarefa }: Props) => {
  return (
    <ListaTarefas>
      <ListaDia>Estudos do dia</ListaDia>
      <ListaItens>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ListaItens>
    </ListaTarefas>
  );
};
