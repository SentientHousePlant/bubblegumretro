import styled from "styled-components";
import { background, layout } from "styled-system";

const CardSection = styled.div(background, layout);

CardSection.defaultProps = {
  width: "100%",
  background: "cyan",
};

export default CardSection;
