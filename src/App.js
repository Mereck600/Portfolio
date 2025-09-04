import React from "react";
import { Container } from "@mui/material";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Social from "./pages/Social";
import Home from "./pages/Home";
import PdfViewer from "./pages/PdfViewer";

// Helper: build paths that work on GitHub Pages project sites
const pub = process.env.PUBLIC_URL; // e.g., "/your-repo"

function MainPage() {
  return (
    <Container maxWidth="md" style={{ marginTop: 20, marginBottom: 15 }}>
      <AboutMe />
      <Projects />
      <Home />
      <Social />
      <Resume />
    </Container>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* Default PDF for /#/view; still overridable via ?file= */}
        <Route
          path="/view"
          element={
            <PdfViewer
              title="Resume"
              src={`${pub}/docs/Mereck-McGowan-Resume.pdf`}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
