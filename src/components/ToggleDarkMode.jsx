// src/ToggleDarkMode.js
import { DarkMode, LightMode } from "@mui/icons-material";
import { Fab, useTheme } from "@mui/material";
import PropTypes from "prop-types";

function ToggleDarkMode({ mode, setMode }) {
  const theme = useTheme();

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
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
        transition: "background-color 0.3s ease, color 0.3s ease",
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
