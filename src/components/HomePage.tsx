import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      minHeight="100vh"
    >
      <Container maxWidth="md" style={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Notes App
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your personal space to keep track of your thoughts and ideas.
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              window.location.href = "/dashboard";
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
