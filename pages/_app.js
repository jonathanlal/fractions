import { ThemeProvider } from "styled-components";
import { Provider } from "next-auth/client";

import useDarkMode from "use-dark-mode";
import { darkTheme, lightTheme, GlobalStyles } from "layout/ThemeConfig";

function MyApp({ Component, pageProps }) {
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

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
