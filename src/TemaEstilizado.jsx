import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './assets/logo.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#f50057',
    },

    background: {
      default: '#000',
      paper: '#212121',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
        },

        outlined: {
          color: '#f50057',
        },
      },
    },
  },
});

const TemaEstilizado = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { theme, logo, MenuBookIcon, HomeIcon, LoginIcon, SearchIcon };
export default TemaEstilizado;
