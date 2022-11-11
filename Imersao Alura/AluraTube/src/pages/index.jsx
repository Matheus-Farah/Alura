import { useEffect, useState } from "react";

import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { TimeLine } from "../components/TimeLine";

import { VideoService } from "../service/VideoService";

import config from "../../config.json";

function HomePage() {
  const [valorFiltro, setValorFiltro] = useState("");
  const [playlists, setPlaylists] = useState();
  const service = VideoService();

  useEffect(() => {
    service.getAllVideos().then((dados) => {
      const novasPlaylists = { ...playlists };

      dados.data.forEach((video) => {
        if (!novasPlaylists[video.playlist]) {
          novasPlaylists[video.playlist] = [];
        }
        novasPlaylists[video.playlist].push(video);
      });
      setPlaylists(novasPlaylists);
    });
  }, []);

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
