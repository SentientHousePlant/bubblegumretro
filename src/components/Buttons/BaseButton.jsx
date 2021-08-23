import styled from "styled-components";

const RawBaseButton = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const StyledBaseButton = styled(RawBaseButton)`
  background-color: hotpink;
  border: none;
  :active {
    box-shadow: none;
    transform: translateY(5px) translateX(-5px);
  }
  & > * {
    padding: 0.2rem;
  }
`;

export default StyledBaseButton;
