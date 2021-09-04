import styled from "styled-components";
import { layout } from "styled-system";

const Card = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

const StyledCard = styled(Card)`
  width: 40%;
  height: 40%;
  box-shadow: calc(-1 * var(--drop-shadow-amount)) var(--drop-shadow-amount) 0px
    var(--secondary-dark);
  ${(props) => !props.shadow && "box-shadow: none;"}
  border: 1px solid var(--text-color-dark);
  overflow: hidden;
  background-color: var(--primary-color);
  position: relative;
  :hover > * {
    transform: translateY(0%);
  }
  ${layout}
`;

export default StyledCard;
