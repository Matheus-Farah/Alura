import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
  toggleMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
});

export const ColorModeProvider = (props) => {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
};
