// src/components/Projects.js
import React from 'react';
import { Paper, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Northland Psychological Services',
    description: 'Website for Psychological Clinic in Duluth, MN.',
    image: '../assets/npsImage.png', // Replace with your project image URL
    link: 'https://northlandpsychological.com/',
  },
  {
    title: 'Reinforcement911',
    description: 'Website for a non-profit based out of Hermantown, MN.',
    image: '../assets/r911Image.png', // Replace with your project image URL
    link: 'https://reinforcement911.org/',
  },
];

const Projects = () => (
  <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <Typography variant="h4" component="h2">
        My Projects
      </Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        Here are some of the projects I've recently created:
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {projects.map((project, index) => (
          <Card key={index} style={{ width: '300px', margin: '10px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}> {/* Use flex column */}
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent style={{ flexGrow: 1 }}> {/* Allow content to grow and fill available space */}
              <Typography gutterBottom variant="h5" component="div" color="black">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </motion.div>
  </Paper>
);

export default Projects;
