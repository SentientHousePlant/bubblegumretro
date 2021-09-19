import styled from "styled-components";
import { flexbox, layout, color, space, border, shadow } from "styled-system";

const Box = styled.div`
  min-width: 0;
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${border};
  ${shadow};
`;

Box.defaultProps = {
  minWidth: "100px",
  minHeight: "100px",
  borderWidth: "var(--border-size)",
  borderColor: "var(--text-color-dark)",
  borderStyle: "solid",
  borderRadius: "var(--border-radius)",
  boxShadow: `calc(-1 * var(--drop-shadow-amount)) var(--drop-shadow-amount) 0px
  var(--secondary-dark)`,
};

export default Box;
