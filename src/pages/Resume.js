// src/components/Resume.js
import React, { useState } from 'react';
import { Paper, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Resume = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    window.open('../assets/MereckMcGowanResume1.pdf', '_blank');
    handleClose();
  };

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
        <Typography variant="h4" component="h2">Resume</Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          You can download my resume below:
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          style={{ marginTop: '10px' }}
        >
          Download Resume
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
        <Typography variant="h4" component="h2">LinkedIn</Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          Feel free to follow me!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/mereck-mcgowan-3b68232b6/" 
          target = "_blank"
          style={{ marginTop: '10px' }}
        >
          LinkedIn
        </Button>
      </motion.div>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Download Resume</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to download your resume?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDownload} color="primary">
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Resume;
