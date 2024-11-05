import React from 'react';
import { Typography, Container, Paper, Button, Box } from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import { Card } from 'antd'; // Ant Design for styled sections

// Placeholder animation settings for animated text
const animationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 3, mb: 0.5 }}>
      
      {/* About Me Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: 'center', backgroundColor: '#1E1E1E', color: '#ffffff' }}>
        <motion.div initial="initial" animate="animate" variants={animationVariants}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Skills
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Python | JavaScript | Java
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
            Other skills:
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
            React, CSS, Racket, R, AWS, Docker, NodeJS, Figma, Excel, Git
          </Typography>
          
        </motion.div>
      </Paper>  
      
    </Container>
  );
};

export default Home;
