import React from "react";

import LogoFB from "../../Assets/Images/fb.png";
import LogoIG from "../../Assets/Images/ig.png";
import LogoTW from "../../Assets/Images/tw.png";
import LogoOrg from "../../Assets/Images/logo.png";

import { FooterContainer, Logo, LogosSocial, Social } from "./styles";

export const Rodape = () => {
  return (
    <FooterContainer>
      <Social>
        <LogosSocial src={LogoFB} alt="Facebook" />
        <LogosSocial src={LogoTW} alt="Twitter" />
        <LogosSocial src={LogoIG} alt="Instagram" />
      </Social>

      <div>
        <Logo src={LogoOrg} alt="Organo" />
      </div>

      <div>
        <p>Desenvolvido por Aura.</p>
      </div>
    </FooterContainer>
  );
};
