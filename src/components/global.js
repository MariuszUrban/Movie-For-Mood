import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    padding:0;
    margin:0;
    background-color: $secondaryColor;
    font-family: $mulish;
    color: $fontColor;
    height: 100vh;
    text-rendering: optimizeLegibility;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.secondaryColor};
    color: ${({theme}) => theme.fontColor};
}
`

