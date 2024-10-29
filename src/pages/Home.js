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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      
      {/* About Me Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: 'center', backgroundColor: '#1E1E1E', color: '#ffffff' }}>
        <motion.div initial="initial" animate="animate" variants={animationVariants}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Hi, I'm Mereck McGowan
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Software Developer | Designer | Tech Enthusiast
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
            I'm passionate about creating sleek, modern web experiences and enjoy working on both frontend and backend
            projects. Check out some of my work below!
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Learn More
          </Button>
        </motion.div>
      </Paper>
      
      {/* Projects Section */}
      <Container sx={{ mb: 4 }}>
        <Card title="Projects" bordered={false} style={{ backgroundColor: '#121212', color: '#ffffff' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
            My Projects
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Here’s a selection of my latest work. Click on each to see more details and explore the code!
          </Typography>
          {/* Insert project cards or placeholders here */}
        </Card>
      </Container>
      
      {/* Resume & More About Me Section */}
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#1E1E1E', color: '#ffffff' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
          Resume & More About Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Want to learn more? Download my resume and check out my full work history and skill set.
        </Typography>
        <Button variant="outlined" color="secondary" href="/path/to/resume.pdf" target="_blank">
          Download Resume
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
