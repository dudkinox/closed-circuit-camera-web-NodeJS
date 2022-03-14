import { Box, Container } from "@mui/material";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Menus from "./components/menu";
import CameraPage from "./pages/camera";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={CameraPage} />
      <Container maxWidth="lg">
        <Box sx={{ width: "100vh", height: "100vh" }}>
          <Menus />
          <CameraPage />
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
