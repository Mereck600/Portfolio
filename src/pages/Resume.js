// src/components/Resume.js
import React, { useState } from 'react';
import {
  Paper, Typography, Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- add this

const Resume = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Put the PDF at: public/assets/Mereck-McGowan-Resume.pdf (no spaces)
  const publicBase = process.env.PUBLIC_URL || '';
  const pdfPath = `${publicBase}/assets/Mereck-McGowan-Resume.pdf`;
  const encoded = encodeURIComponent(pdfPath); // safe for query param

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
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <Typography variant="h4" component="h2">Resume</Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          You can view or download my resume below:
        </Typography>

        {/* Route to the PDF viewer; with HashRouter this becomes /#/view?file=... */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/view?file=${encoded}`}
          style={{ marginTop: '10px' }}
        >
          View Resume
        </Button>

        {/* If you want a direct raw download button too: */}
        {/* <Button
          variant="outlined"
          color="primary"
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '10px', marginLeft: '10px' }}
        >
          Download (Direct)
        </Button> */}
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

      {/* Keep the dialog if you want an extra confirmation flow */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Download Resume</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here is the download for my resume!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              window.open(pdfPath, '_blank', 'noopener,noreferrer');
              handleClose();
            }}
            autoFocus
          >
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Resume;
