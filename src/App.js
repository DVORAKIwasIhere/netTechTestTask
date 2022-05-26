import { Form } from "./components/Form";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, body{
    font-family: Roboto, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    height: 100%;
    background-color: #0d6efd;
    overflow: hidden;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="container d-flex justify-content-center">
        <Form />
      </div>
    </div>
  );
}

export default App;
