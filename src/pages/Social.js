import React, { useState } from 'react';
import { Paper, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Social = () => {


const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Set breakpoint for responsive behavior

return (
  <Paper
    elevation={3}
    style={{
      padding: '20px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row', // Stack on mobile
      justifyContent: 'space-between',
      alignItems: isMobile ? 'center' : 'flex-start', // Center items on mobile
      width: isMobile ? '90%' : '100%',
      margin: '0 auto', // Center on smaller screens
      marginBottom:'15px',
      maxWidth: '800px',
      gap: isMobile ? '20px' : '0', // Add space between items on mobile
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      style={{
        flex: 1,
        textAlign: 'left',
        marginRight: isMobile ? '0' : '20px', // Remove margin on mobile
        marginLeft: isMobile ? '0' : '50px', // Remove margin on mobile
        width: '100%',
        textAlign: isMobile ? 'center' : 'left', // Center text on mobile
      }}
    >
      <Typography variant="h4" component="h2">Github</Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        View my profile:
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href ="https://github.com/Mereck600"
        target ="_blank"
        style={{ marginTop: '10px' }}
      >
        Github
      </Button>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      style={{
        flex: 1,
        textAlign: 'center',
        width: '100%',
        marginTop: isMobile ? '10px' : '0',
      }}
    >
      <Typography variant="h4" component="h2">Contact</Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        Feel free to reach out!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="mailto:merecmcg@gmail.com"
        style={{ marginTop: '10px' }}
      >
        Email Me
      </Button>
    </motion.div>

    
    
  </Paper>
);
};

export default Social;
