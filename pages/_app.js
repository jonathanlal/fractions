import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  const theme = {
    colors: {
      primary: "#0070f3",
    },
  };

  const GlobalStyles = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #3ebbbb;
      color: #eaeaea;
    }
  `;

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
