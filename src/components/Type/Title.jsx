import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  text-decoration: underline;
  color: var(--text-color-dark);
  text-shadow: var(--secondary-dark) calc(-1 * var(--drop-shadow-amount))
    var(--drop-shadow-amount) 0px;
`;

export default Title;
