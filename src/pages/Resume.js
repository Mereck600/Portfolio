// src/components/Resume.js
import React, { useState } from 'react';
import {
  Paper, Typography, Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Resume = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Put the PDF in /public/assets/ and use a hyphenated file name (no spaces)
  // e.g., public/assets/Mereck-McGowan-Resume.pdf
  const handleDownload = () => {
    const url = `${process.env.PUBLIC_URL}/assets/Mereck-McGowan-Resume.pdf`;
    window.open(url, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'flex-start',
        width: isMobile ? '90%' : '100%',
        margin: '0 auto',
        marginBottom: '15px',
        maxWidth: '800px',
        gap: isMobile ? '20px' : '0',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          flex: 1,
          marginRight: isMobile ? '0' : '20px',
          marginLeft: isMobile ? '0' : '50px',
          width: '100%',
          textAlign: isMobile ? 'center' : 'left', // ← keep only this one
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
          target="_blank"
          style={{ marginTop: '10px' }}
        >
          LinkedIn
        </Button>
      </motion.div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Download Resume</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here is the download for my resume!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDownload} autoFocus>Download</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Resume;
