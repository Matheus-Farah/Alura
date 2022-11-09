import { useContext } from "react";

import { ColorModeContext } from "../components/Menu/ColorMode";

export const Video = () => {
  const contexto = useContext(ColorModeContext);

  return (
    <div>
      Vídeo!
      {contexto.mode}
      <button onClick={() => contexto.toggleMode()}>Trocar Modo!</button>
    </div>
  );
};
