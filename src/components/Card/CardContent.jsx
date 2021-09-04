import styled from "styled-components";

const CardContent = (props) => {
  return (
    <div className={props.className}>
      <h1>Heelo</h1>
      <p>
        fgjodfjgjd jdfj djfgk jdkfgnkdj ngkndf knkdfng kdnfg kndfkgn dkfng jk
      </p>
    </div>
  );
};

const StyledCardContent = styled(CardContent)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  border-top-left-radius: 10px;
  border: var(--border-size) solid var(--text-color-dark);
  border-width: 1px 0px 0px 1px;
  background: var(--secondary-light);
  transform: translateY(calc(65%));
`;

export default StyledCardContent;
