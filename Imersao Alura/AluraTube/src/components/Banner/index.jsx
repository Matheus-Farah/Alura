import config from "../../../config.json";

import { StyledBanner } from "./styles";

export const Banner = () => {
  return <StyledBanner bg={config.bg} />;
};
