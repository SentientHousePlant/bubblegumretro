import styled from "styled-components";
import { border } from "styled-system";

const StyledBaseButton = styled.button`
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
  ${border}
`;

StyledBaseButton.defaultProps = {
  borderRadius: 3,
};

export default StyledBaseButton;
