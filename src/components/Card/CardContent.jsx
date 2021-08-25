import styled from "styled-components";

const CardContent = (props) => {
  return <div className={props.className}>Content</div>;
};

const StyledCardContent = styled(CardContent)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  border-top-left-radius: 5px;
  border: 1px solid var(--text-color-dark);
  border-width: 1px 0px 0px 1px;
  background: var(--secondary-light);
  transform: translateY(calc(100% - 1rem));
`;

export default StyledCardContent;
