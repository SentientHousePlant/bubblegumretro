import styled from "styled-components";
import { space } from "styled-system";

const RawBaseButton = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const StyledBaseButton = styled(RawBaseButton)`
  background-color: var(--primary-color);
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  color: var(--text-color-dark);
  border: var(--border-size) solid var(--text-color-dark);
  box-shadow: calc(-1 * var(--drop-shadow-amount)) var(--drop-shadow-amount) 0px
    var(--secondary-dark);
  min-width: 50px;
  min-height: 35px;
  :active {
    box-shadow: none;
    transform: translateY(var(--drop-shadow-amount))
      translateX(calc(-1 * var(--drop-shadow-amount)));
  }
  ${space}
`;

export default StyledBaseButton;
