import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1E6586",
      contrastText: "#FFFFFF",
      light: "#C5E7FF",
      dark: "#004C6A",
    },
    secondary: {
      main: "#4E616D",
      contrastText: "#FFFFFF",
      light: "#D1E5F4",
      dark: "#374955",
    },
    tertiary: {
      main: "#615A7C",
      contrastText: "#FFFFFF",
      light: "#E7DEFF",
      dark: "#1D1735",
    },
    error: {
      main: "#BA1A1A",
      contrastText: "#FFFFFF",
      light: "#FFDAD6",
      dark: "#410002",
    },
    background: {
      default: "#F6FAFE",
      paper: "#F6FAFE",
    },
    text: {
      primary: "#181C1F",
      secondary: "#41484D",
    },
  },
  transitions: {
    duration: {
      standard: 300,
    },
  },
  typography: {
    fontFamily: "Karla, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Karla, sans-serif",
      textTransform: "none",
      fontWeight: 500,
    },
    caption: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    overline: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90CEF4",
      contrastText: "#00344A",
      light: "#C5E7FF",
      dark: "#004C6A",
    },
    secondary: {
      main: "#B6C9D8",
      contrastText: "#20333E",
      light: "#374955",
      dark: "#0A1E28",
    },
    tertiary: {
      main: "#CBC1E9",
      contrastText: "#322C4C",
      light: "#494263",
      dark: "#1D1735",
    },
    error: {
      main: "#FFB4AB",
      contrastText: "#690005",
      light: "#FFDAD6",
      dark: "#410002",
    },
    background: {
      default: "#0F1417",
      paper: "#0F1417",
    },
    text: {
      primary: "#DFE3E7",
      secondary: "#C1C7CE",
    },
  },
  transitions: {
    duration: {
      standard: 300,
    },
  },
  typography: {
    fontFamily: "Karla, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Karla, sans-serif",
      textTransform: "none",
      fontWeight: 500,
    },
    caption: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
    overline: {
      fontFamily: "Karla, sans-serif",
      fontWeight: 400,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const extendedLightTheme = createTheme(lightTheme, {
  palette: {
    surfaceVariant: "#DDE3EA",
    outline: "#71787E",
  },
});

const extendedDarkTheme = createTheme(darkTheme, {
  palette: {
    surfaceVariant: "#41484D",
    outline: "#8B9297",
  },
});

export { darkTheme, extendedDarkTheme, extendedLightTheme, lightTheme };
