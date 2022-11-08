import config from "../../../config.json";

import { Banner } from "../Banner";

import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Banner bg={config.bg} />
      <div className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="foto de perfil"
        />

        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </div>
    </StyledHeader>
  );
};
