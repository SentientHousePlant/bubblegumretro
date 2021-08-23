import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #FAB3CD;
    --secondary-dark: #6FE2EC;
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
  }
`;

export default GlobalStyle;
