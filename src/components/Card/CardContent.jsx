import styled from "styled-components";

const CardContent = (props) => {
  return <div className={props.className}>Content</div>;
};

const StyledCardContent = styled(CardContent)`
  height: 50px;
  width: 100px;
  background-color: var(--secondary-color);
`;

export default StyledCardContent;
