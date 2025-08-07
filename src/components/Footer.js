// src/components/Footer.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction, Typography, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <BottomNavigation sx={{ backgroundColor: '#333', padding: '20px', color: '#fff', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px' }}>
        Connect with me
      </Typography>
      <Box sx={{ display: 'flex', gap: '15px' }}>
        <BottomNavigationAction
          label="Instagram"
          icon={<InstagramIcon sx={{ color: '#E1306C', fontSize: '30px' }} />}
          href="https://www.instagram.com/yourprofile" // replace with your Instagram link
          target="_blank"
          rel="noopener noreferrer"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon sx={{ color: '#0077b5', fontSize: '30px' }} />}
          href="https://www.linkedin.com/in/yourprofile" // replace with your LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
        />
      </Box>
      <Typography variant="caption" sx={{ color: '#bbb', marginTop: '10px' }}>
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;
