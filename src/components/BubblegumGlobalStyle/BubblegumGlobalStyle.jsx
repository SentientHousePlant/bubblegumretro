import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');
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
    --border-radius: 3px;
  }
  * {
  box-sizing: border-box;
  font-family: 'Cutive Mono', monospace;
  font-weight: bold;
  }
  html {font-size: calc(1em + 1vw);}
`;

export default GlobalStyle;
