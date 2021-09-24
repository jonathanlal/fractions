import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  headerBg: "#f7f7f7",
  sidebarBg: "#efefef",
  textColor: "#000",
  primaryColor: "#d36503",
  secondaryColor: "#167c81",
};

export const darkTheme = {
  body: "#141414",
  headerBg: "#212121",
  sidebarBg: "#171717",
  textColor: "#fff",
  primaryColor: "#167c81",
  secondaryColor: "#d36503",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
  }

  header {
    background-color: ${({ theme }) => theme.headerBg};
  }

  .primary-button {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  aside {
    background-color: ${({ theme }) => theme.sidebarBg}
  }

  .theme-primary-color {
    color: ${({ theme }) => theme.primaryColor}
  }

  .theme-secondary-color {
    color: ${({ theme }) => theme.secondaryColor}
  }

  .theme-text-color {
    color: ${({ theme }) => theme.textColor}
  }
`;
