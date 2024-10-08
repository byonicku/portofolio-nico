import { Box, Container, Grid2, Typography } from "@mui/material";

function App() {
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
            <Grid2 item xs={12} sm={12}>
              <Typography variant="h1" fontWeight={"bold"} fontSize={"5em"}>
                Hello!
              </Typography>
              <Typography variant="h1" fontWeight={"400"} fontSize={"4em"}>
                I&apos;m Nico Herlim!
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
}

export default App;
