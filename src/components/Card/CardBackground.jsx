import styled from "styled-components";

const CardBackground = (props) => {
  return <h1>Hello</h1>;
};

const StyledCardBackground = styled(CardBackground)`
  height: 50px;
  width: 100px;
  background-color: var(--primary-color);
`;

export default CardBackground;
