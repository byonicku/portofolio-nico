import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {
  Box,
  Button,
  Container,
  Grid2,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

const iconStyle = {
  fontSize: "2em",
  margin: "0.3em",
  cursor: "pointer",
};

function App() {
  const theme = useTheme();

  const openWindow = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Container maxWidth={"lg"}>
        <Box
          display="flex"
          justifyContent="left"
          alignItems="center"
          minHeight="100vh"
        >
          <Grid2 container spacing={2}>
            <Grid2 item size={12}>
              <Typography variant="h1" fontWeight={"bold"} fontSize={"5em"}>
                Hello!
              </Typography>
              <Typography variant="h1" fontWeight={"400"} fontSize={"3.5em"}>
                I&apos;m Nico Herlim!
              </Typography>
            </Grid2>
            <Grid2 item size={12}>
              <Paper
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  verticalAlign: "middle",
                  transition: theme.transitions.create(
                    ["border", "background-color", "box-shadow"],
                    {
                      duration: theme.transitions.duration.standard,
                    }
                  ),
                  "&:hover": {
                    border: "1px solid",
                    boxShadow: "inherit",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <Grid2
                  container
                  spacing={{ xs: 1, md: 8 }}
                  columns={{ xs: 4, md: 12 }}
                >
                  <Grid2
                    item
                    size={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <LinkedIn
                      sx={iconStyle}
                      onClick={() =>
                        openWindow("https://www.linkedin.com/in/nico-herlim/")
                      }
                    />
                  </Grid2>
                  <Grid2
                    item
                    size={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <GitHub
                      sx={iconStyle}
                      onClick={() => openWindow("https://github.com/byonicku")}
                    />
                  </Grid2>
                  <Grid2
                    item
                    size={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Instagram
                      sx={iconStyle}
                      onClick={() =>
                        openWindow("https://www.instagram.com/nico.herlim")
                      }
                    />
                  </Grid2>
                </Grid2>
              </Paper>
            </Grid2>
            <Grid2 item size={12}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                fullWidth
                href="https://drive.google.com/file/d/1CGqOsnnUogrNeF2PYMlx7JWe9y2RyB4E/view?usp=sharing"
                target="_blank"
              >
                <DescriptionOutlinedIcon sx={{ marginRight: "0.1em" }} />
                Download My CV
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
}

export default App;
