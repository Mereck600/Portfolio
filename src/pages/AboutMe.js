// src/components/AboutMe.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AboutMe = () => (
  <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      style={{ width: '100%' }} // Ensure full width for child elements
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        Hi, I'm Mereck McGowan
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Software Developer | Web Designer | Machine Learning Researcher
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
        I'm passionate about creating sleek, modern web experiences and enjoy working on both frontend and backend
        projects. I develop new machine learning models with a sepeciality in CBR research. Check out some of my work below!
      </Typography>
      
      <img
        src="../assets/Mereck-Headshot.JPG" 
        alt="Mereck McGowan"
        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginTop: '10px' }}
      />
    </motion.div>
  </Paper>
);

export default AboutMe;
