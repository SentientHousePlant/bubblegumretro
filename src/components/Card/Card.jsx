import styled from "styled-components";
import { layout, background, border } from "styled-system";
import Box from "../Box/Box";

const StyledCard = styled(Box)`
  position: relative;
  :hover > * {
    transform: translateY(0%);
  }
  ${background}
`;

StyledCard.defaultProps = {
  width: "50%",
  height: "50%",
  background: "var(--primary-color)",
};

export default StyledCard;
