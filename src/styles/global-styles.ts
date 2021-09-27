import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  html,
  body {
    height: 100%;
    width: 100%;
  }


body {
  overflow-x: hidden;
  font-family: "dana-regular";
  list-style: none;
}

h1,
h2 {
  font-family: "Kalameh-bold";
}

  ul {
    list-style: none  ;
  }
  a {
    text-decoration: none ;
    color: inherit;
    font-family:  Dana  , Arial, sans-serif;

  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
