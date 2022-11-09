import { StyledSearch } from "./styles";

export const Search = ({ valorFiltro, setValorFiltro }) => {
  const valorBusca = valorFiltro;
  const setValorBusca = setValorFiltro;

  return (
    <StyledSearch>
      <input
        placeholder="Pesquisar vídeo"
        type="text"
        value={valorBusca}
        onChange={(e) => {
          setValorBusca(e.target.value);
        }}
      />
      <button>🔎</button>
    </StyledSearch>
  );
};
