import { useState } from "react";
import styles from "./Cardapio.module.scss";
import stylesTema from "styles/Tema.module.scss";

import { Buscador } from "./Buscador";
import { Filtros } from "./Filtros";
import { Ordenador } from "./Ordenador";
import { Itens } from "./Itens";

export const Cardapio = () => {
  const [busca, setBusca] = useState("");
  const [filtro, setFitro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />

      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFitro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
};
