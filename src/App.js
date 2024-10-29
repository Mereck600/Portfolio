// src/App.js
import React from 'react';
import { Container } from '@mui/material';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


const App = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <AboutMe />
      <Projects />
      <Resume />
    </Container>
  );
};

export default App;
