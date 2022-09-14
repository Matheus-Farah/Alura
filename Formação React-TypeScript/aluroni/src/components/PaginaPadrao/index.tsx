import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./PaginaPadrao.module.scss";
import stylesTema from "styles/Tema.module.scss";

export const PaginaPadrao = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>

      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
};
