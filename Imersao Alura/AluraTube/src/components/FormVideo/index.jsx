import { useState } from "react";
import { StyledFormVideo } from "./styles";

function useForm() {
  const [values, setValues] = useState({ titulo: "", url: "" });

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

export const FormVideo = () => {
  const [formVisivel, setFormVisivel] = useState(false);
  const formCadastro = useForm();

  return (
    <StyledFormVideo>
      <button
        className="add-video"
        type="button"
        onClick={() => setFormVisivel(true)}
      >
        +
      </button>

      {formVisivel ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisisvel(false)}
            >
              X
            </button>

            <input
              placeholder="Título do vídeo"
              type="text"
              name="tiutlo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL do vídeo"
              type="text"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />

            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledFormVideo>
  );
};
