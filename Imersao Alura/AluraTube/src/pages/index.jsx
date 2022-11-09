import { useState } from "react";

import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { TimeLine } from "../components/TimeLine";

import config from "../../config.json";

function HomePage() {
  const [valorFiltro, setValorFiltro] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />
        <Header />
        <TimeLine searchValue={valorFiltro} playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;
