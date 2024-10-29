// src/App.js
import React from 'react';
import { Container } from '@mui/material';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      {/* <NavBar/> */}
      <AboutMe />
      <Projects />
      <Resume />
      
    </Container>
  );
};

export default App;

/* 
// src/App.js
import React from 'react';
import { Container } from '@mui/material';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Container maxWidth="md" style={{ marginTop: '20px', flexGrow: 1 }}>
        <AboutMe />
        <Projects />
        <Resume />
      </Container>
      <Footer /> 
    </div>
  );
};

export default App;
 */