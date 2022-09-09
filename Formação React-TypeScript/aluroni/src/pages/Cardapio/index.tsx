import { useState } from "react";
import styles from "./Cardapio.module.scss";

import { ReactComponent as Logo } from "assets/img/logo.svg";

import { Buscador } from "./Buscador";
import { Filtros } from "./Filtros";
import { Ordenador } from "./Ordenador";
import { Itens } from "./Itens";

export const Cardapio = () => {
    const [busca, setBusca] = useState("");
    const [filtro, setFitro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");
    return (
        <main>
            <main className={styles.menu}>
                <Logo />
            </main>

            <header className={styles.header}>
                <div className={styles.header__text}>A casa do código e da massa</div>
            </header>

            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />

                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFitro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
            </section>
        </main>
    );
};
