import styled from "styled-components";
import CardContent from "./CardContent";

const Card = (props) => {
  return (
    <div className={props.className}>
      <CardContent>Hello</CardContent>
    </div>
  );
};

const StyledCard = styled(Card)`
  min-width: 200px;
  min-height: 300px;
  width: 20%;
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
`;

export default StyledCard;
