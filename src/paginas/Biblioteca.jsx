import React, { useState, useEffect } from 'react';
import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Grid2,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { historias } from '../historias';
import { MenuBookIcon, SearchIcon, theme } from '../TemaEstilizado';
import {
  handleAuthError,
  handleGenericError,
} from '../TratativasErro/errorHandling';

const Biblioteca = () => {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [bookmarks, setBookmarks] = useState({});
  const [textoBusca, setTextoBusca] = useState('');
  const [historiasFiltradas, setHistoriasFiltradas] = useState([]); // Inicializa como array vazio
  const [error, setError] = useState(null); // Estado para mensagens de erro
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento

  useEffect(() => {
    const fetchHistorias = async () => {
      try {
        // Simula uma chamada assíncrona para buscar histórias.
        // Substitua isso pela sua lógica real de fetch.
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simula um delay
        const fetchedHistorias = historias; // Substitua por sua chamada API
        setHistoriasFiltradas(fetchedHistorias);
      } catch (error) {
        setError(handleGenericError(error, setError));
      } finally {
        setLoading(false);
      }
    };

    const progressoStorage =
      JSON.parse(localStorage.getItem('progresso')) || {};
    const bookmarksStorage =
      JSON.parse(localStorage.getItem('bookmarks')) || {};

    setProgresso(progressoStorage);
    setBookmarks(bookmarksStorage);

    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (!user) {
        localStorage.removeItem('progresso');
        localStorage.removeItem('bookmarks');
        setProgresso({});
        setBookmarks({});
        navigate('/');
      }
    });

    fetchHistorias(); // Chama a função para buscar histórias

    return () => unsubscribeAuth();
  }, [navigate]);

  useEffect(() => {
    const filtrarHistorias = () => {
      const novasHistoriasFiltradas = historias.filter(
        (historia) =>
          historia.titulo.toLowerCase().includes(textoBusca.toLowerCase()) ||
          historia.descricao.toLowerCase().includes(textoBusca.toLowerCase())
      );
      setHistoriasFiltradas(novasHistoriasFiltradas);
    };

    filtrarHistorias();
  }, [textoBusca]);

  const salvarProgresso = (historiaId, novoProgresso, novoBookmark) => {
    // ... (Lógica de salvar progresso - sem alterações)
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10vh',
        width: '100%', // Permite que o conteúdo ocupe toda a largura
      }}
    >
      {error && error} {/* Mostra a mensagem de erro */}
      {loading && <Alert severity="info">Carregando...</Alert>}{' '}
      {/* Mostra mensagem de carregamento */}
      <TextField
        label="Buscar Histórias"
        variant="outlined"
        value={textoBusca}
        onChange={(e) => setTextoBusca(e.target.value)}
        fullWidth
        sx={{
          marginBottom: 2,
          maxWidth: 600,
          input: { color: 'white' },
          label: { color: theme.palette.secondary.main },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: theme.palette.secondary.main },
            '&:hover fieldset': { borderColor: theme.palette.secondary.light },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.secondary.main,
            },
          },
        }}
        Input={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: theme.palette.secondary.main }} />
            </InputAdornment>
          ),
        }}
      />
      <Grid2 container spacing={2}>
        {historiasFiltradas.map((historia) => (
          <Grid2 sizw={{ xs: 12, sm: 6, md: 4 }} key={historia.id}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                color: '#FFFFFF',
                padding: 2,
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {historia.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {historia.descricao}
                </Typography>
                <Button
                  startIcon={<MenuBookIcon />}
                  size="small"
                  onClick={() => navigate(`/historia/${historia.id}`)}
                >
                  Ler História
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Biblioteca;
