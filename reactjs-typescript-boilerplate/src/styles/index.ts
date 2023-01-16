import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  body {
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4 {
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: break-word;
}
`;

export default GlobalStyle;
