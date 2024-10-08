import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { useMemo, useState } from "react";
import App from "./App";
import ToggleDarkMode from "./components/ToggleDarkMode";
import { darkTheme, lightTheme } from "./theme/Theme";

export default function MainApp() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const appliedTheme = useMemo(() => {
    return mode === "light" ? lightTheme : darkTheme;
  }, [mode]);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <ToggleDarkMode mode={mode} setMode={setMode} />
      <App />
    </ThemeProvider>
  );
}
