// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        {/* <Box sx={{ display: 'flex', gap: '20px' }}>
          <Typography variant="button" color="inherit">Home</Typography>
          <Typography variant="button" color="inherit">Projects</Typography>
          <Typography variant="button" color="inherit">About Me</Typography>
          <Typography variant="button" color="inherit">Resume</Typography>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
