import styled from "styled-components";
import { space } from "styled-system";

const StyledCardSlideUp = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0.8rem;
  ${(props) =>
    props.roundedcorner &&
    `border-top-left-radius: 10px;
  border: var(--border-size) solid var(--text-color-dark);
  margin-left: 0.2rem;
  `}
  border-top: var(--border-size) solid var(--text-color-dark);
  border-width: 1px 0px 0px 1px;
  background: var(--secondary-light);
  transform: translateY(calc(55%));
  ${space}
`;

export default StyledCardSlideUp;
