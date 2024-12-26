import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import libraryBg from './assets/library-bg.jpg';
import loginBg from './assets/login-bg.jpg';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9C27B0', // Roxo mais vibrante
      light: '#BA68C8',
      dark: '#7B1FA2',
    },
    secondary: {
      main: '#00BCD4', // Ciano
      light: '#4DD0E1',
      dark: '#0097A7',
    },
    background: {
      default: '#121212',
      paper: 'rgba(18, 18, 18, 0.9)',
      card: 'rgba(33, 33, 33, 0.95)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          padding: '8px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #7B1FA2 30%, #9C27B0 90%)',
          },
        },
        outlined: {
          borderColor: '#00BCD4',
          color: '#00BCD4',
          '&:hover': {
            borderColor: '#4DD0E1',
            color: '#4DD0E1',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(33, 33, 33, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#9C27B0',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          '& .MuiInputBase-input': {
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

const TemaEstilizado = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { theme, libraryBg, loginBg, MenuBookIcon, HomeIcon, LoginIcon, SearchIcon };
export default TemaEstilizado;