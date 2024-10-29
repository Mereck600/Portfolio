// src/components/Resume.js
import React, { useState } from 'react';
import { Paper, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { motion } from 'framer-motion';

const Resume = () => {
  const [open, setOpen] = useState(false); // State to control dialog visibility

  const handleClickOpen = () => {
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  const handleDownload = () => {
    // Replace with your resume path
    window.open('../assets/MereckMcGowanResume.pdf', '_blank'); // Open the resume in a new tab
    handleClose(); // Close the dialog after download
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100%' }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ flex: 1, textAlign: 'left', marginRight: '20px' }} // Left side for resume
      >
        <Typography variant="h4" component="h2">Resume</Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          You can download my resume below:
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen} // Open the dialog on button click
          style={{ marginTop: '10px' }}
        >
          Download Resume
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ flex: 1, textAlign: 'center' }} // Right side for contact me
      >
        <Typography variant="h4" component="h2">Contact</Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          Feel free to reach out!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="mailto:merecmcg@gmail.com" // Replace with your email
          style={{ marginTop: '10px' }}
        >
          Email Me
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
