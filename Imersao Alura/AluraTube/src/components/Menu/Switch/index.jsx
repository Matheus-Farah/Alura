import { useContext } from "react";

import { ColorModeContext } from "../ColorMode";

import { StyledSwitch } from "./styles";

export const Switch = () => {
  const contexto = useContext(ColorModeContext);

  return (
    <StyledSwitch>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
          contexto.toggleMode();
        }}
      />

      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  );
};
