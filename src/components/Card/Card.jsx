import styled from "styled-components";

const Card = (props) => {
  return <div className={props.className}>Hello</div>;
};

const StyledCard = styled(Card)`
  width: 50px;
  height: 50px;
  background-color: red;
  border: 5px solid hotpink;
`;

export default StyledCard;
