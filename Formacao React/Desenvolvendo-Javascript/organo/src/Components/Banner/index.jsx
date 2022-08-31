import React from "react";

import { BannerHeader, BannerImage } from "./styles";

import ImgFundo from "../../Assets/Images/banner.png";

export const Banner = () => {
  return (
    <BannerHeader>
      <BannerImage src={ImgFundo} alt="Banner principal da página do Organo" />
    </BannerHeader>
  );
}


