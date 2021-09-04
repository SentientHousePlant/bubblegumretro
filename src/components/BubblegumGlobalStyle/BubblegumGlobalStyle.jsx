import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #FAB3CD;
    --secondary-dark: #6fe1ec58;
    --secondary-light: #C3E9E9;
    --neutral-pink: #FFF8FA;
    --neutral-blue: #F3FEFF;
    --text-color-dark: #170E1B;
    --highlight-color: #ED7D3A;
    --drop-shadow-amount: 3px;
    --border-size: 1px;
  }
  * {
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  }
`;

export default GlobalStyle;
