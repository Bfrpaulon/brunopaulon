// customTheme.js
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#00FF00',
      light: '#00df00',
      dark: '#009700'
    },
    secondary: {
      main: '#00FFFF',
      dark: '#00999b',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#e0e0e0',
    },
    background: {
      default: '#0F0F0F',
      paper: '#1f1f1f',
      secondary: '#353535',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#00FF00',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#00FFFF',
    },
    // Add more typography styles as needed
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  // You can customize other theme properties like breakpoints, shadows, and more.
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shadows: ['none', '0 3px 6px rgba(0, 0, 0, 0.16)'],
  // Add any other customizations you require.
});

export default customTheme;
