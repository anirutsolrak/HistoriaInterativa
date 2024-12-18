import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './assets/logo.jpg';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673AB7', // Violeta profundo
    },
    secondary: {
      main: '#00BCD4', // Ciano
    },
    error: { // Você pode usar error para o laranja de destaque, ou criar uma cor customizada
      main: '#FF9800', // Laranja
    },
    background: {
      default: '#1A237E', // Azul Índigo escuro
      paper: '#212121',  // Cinza escuro (para elementos como cards e modais)
    },
    text: {
      primary: '#FFFFFF', // Branco (para texto principal)
      secondary: '#BDBDBD', // Cinza claro (para texto secundário)
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
          //  Ajuste a cor do botão outlined para combinar com a nova paleta
          borderColor: '#00BCD4', // Ciano, por exemplo
          color: '#00BCD4', // Ciano
        },

         //Exemplo de como estilizar um botão com a cor de 'Detalhes' (laranja):
        containedError: { // Usando a variante "error" por ter mapeado a cor laranja lá
           color: '#FFFFFF', //texto branco em botão laranja
        }


      },
    },
     //Exemplo de como estilizar outros componentes
    MuiAppBar: {
      styleOverrides: {
        root: {
           backgroundColor: '#673AB7', // Violeta profundo na AppBar
        },
      }
    }
  },
});


const TemaEstilizado = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { theme, logo, MenuBookIcon, HomeIcon, LoginIcon, SearchIcon };
export default TemaEstilizado;