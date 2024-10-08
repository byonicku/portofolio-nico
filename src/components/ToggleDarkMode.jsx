// src/ToggleDarkMode.js
import { DarkMode, LightMode } from "@mui/icons-material";
import { Fab, useColorScheme, useTheme } from "@mui/material";
import PropTypes from "prop-types";

function ToggleDarkMode({ mode, setMode }) {
  const colorSchemeSetter = useColorScheme();
  const theme = useTheme();

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      colorSchemeSetter.setMode("dark");
    } else {
      setMode("light");
      colorSchemeSetter.setMode("light");
    }
  };

  return (
    <Fab
      onClick={toggleMode}
      sx={{
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor:
          mode === "light"
            ? theme.palette.primary.main
            : theme.palette.primary.dark,
        color: theme.palette.getContrastText(
          mode === "light"
            ? theme.palette.primary.main
            : theme.palette.primary.dark
        ),
        transition: "color 0.3s ease",
        "&:hover": {
          backgroundColor:
            mode === "light"
              ? theme.palette.primary.dark
              : theme.palette.primary.main,
        },
        boxShadow: theme.shadows[6],
      }}
      aria-label={`Toggle ${mode === "light" ? "dark" : "light"} mode`}
    >
      {mode === "dark" ? (
        <LightMode sx={{ fontSize: 30 }} />
      ) : (
        <DarkMode sx={{ fontSize: 30 }} />
      )}
    </Fab>
  );
}

ToggleDarkMode.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
};

export default ToggleDarkMode;
