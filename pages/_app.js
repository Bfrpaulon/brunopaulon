import { ThemeProvider } from '@mui/material/styles';
import theme from '../public/customTheme';
import HomePage from './HomePage';
import './global.css'

function MyApp( ) {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default MyApp;
