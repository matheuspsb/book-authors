export interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    background: {
      light: string;
      dark: string;
    };
    text: {
      light: string;
      dark: string;
    };
    white: string;
  };
  fonts: {
    main: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}