import styled from "styled-components";

const CardContent = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

const StyledCardContent = styled(CardContent)`
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
  ${(props) => props.slideup && "transform: translateY(calc(55%));"}
`;

export default StyledCardContent;
