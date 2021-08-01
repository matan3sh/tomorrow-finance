import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: "CircularStd-Regular";
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url("static/fonts/CircularStd-Book.ttf");
    }
@font-face {
        font-family: "CircularStd-Medium";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url("static/fonts/CircularStd-Medium.ttf");
    }
@font-face {
        font-family: "CircularStd-Bold";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url("static/fonts/CircularStd-Bold.ttf");
    }
@font-face {
        font-family: "Gotham-Medium";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url("static/fonts/Gotham-Pro-Medium.ttf");
    }
@font-face {
        font-family: "Gotham-Bold";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url("static/fonts/GothamBold.ttf");
    }

*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: 'CircularStd-Regular', sans-serif !important;
  width: 100%;
  height: 100vh;
  color: #000;
  scroll-behavior: smooth;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
export default GlobalStyle;
