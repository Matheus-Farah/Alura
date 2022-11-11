import { useState } from "react";
import { StyledFormVideo } from "./styles";

import { createClient } from "@supabase/supabase-js";

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

function getThumbnail(url) {
  return `https://img.youtube..com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

const PROJECT_URL = "https://mcezydyvgtadriopxugd.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZXp5ZHl2Z3RhZHJpb3B4dWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzg0NjAsImV4cCI6MTk4Mzc1NDQ2MH0.OMFQ1eP3jMqW2hFE6mw2L8Pylj64HfEC9OaMWy1zh6w";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

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

            supabase
              .from("Videos")
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: "",
              })
              .then((oqueveio) => {})
              .catch((err) => {});

            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisivel(false)}
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
