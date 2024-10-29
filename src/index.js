import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a modern, sleek theme
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
  },
  palette: {
    mode: 'dark', // Enable dark mode
    primary: {
      main: '#90CAF9', // Light blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F48FB1', // Soft pink
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1E1E1E', // Slightly lighter for paper components
    },
    text: {
      primary: '#ffffff',
      secondary: '#B0BEC5', // Light grey for contrast
    },
    success: {
      main: '#66BB6A', // Soft green for success
    },
    error: {
      main: '#EF5350', // Red for error
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '24px', // Modern padding for layout components
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E', // Paper background slightly lighter than main background
          borderRadius: '8px', // Rounded corners
          padding: '16px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: '8px 0',
          color: '#E0E0E0', // Light grey text for typography components
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Rounded button style
          padding: '10px 20px', // Spacious button padding
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#90CAF9', // Hover color to primary.main
            color: '#121212', // Contrast text on hover
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
