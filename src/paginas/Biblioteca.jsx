import React, { useState, useEffect  } from 'react';
import { Grid2, Card, CardContent, Typography, Button, Box, CardMedia, Avatar, Alert, TextField, InputAdornment,  styled } from '@mui/material';
import { SearchIcon, theme } from '../TemaEstilizado';
import CardFlip from 'react-card-flip';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { handleGenericError } from '../TratativasErro/errorHandling';
import { historias } from '../historias';

const HistoriaCard = ({ historia, progresso, navigate }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNavigation = () => {
    navigate(`/historia/${historia.id}`);
  };

  const CardContainer = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    minHeight: 300,
    maxWidth: 350,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  }));

  return (
    <Grid2 item xs={12} sm={6} md={4}>
      <CardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.6} flipSpeedFrontToBack={0.6}>
        <CardContainer onClick={handleCardClick}>
          <CardMedia
            component="img"
            height="140"
            image={historia.imagemCapa || 'https://via.placeholder.com/150'}
            alt={historia.titulo}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {historia.titulo}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {historia.generos?.map((genero) => (
                <Typography
                  variant="body2"
                  key={genero}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    padding: 0.5,
                    borderRadius: 5,
                  }}
                >
                  {genero}
                </Typography>
              ))}
              {historia.conquistas?.map((conquista, index) => (
                <Avatar
                  key={index}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width: 20,
                    height: 20,
                    marginLeft: 1,
                  }}
                >
                  <EmojiEventsIcon sx={{ fontSize: 16 }} />
                </Avatar>
              ))}
            </Box>
          </CardContent>
        </CardContainer>
        <CardContainer onClick={handleCardClick}> {/* Adicionei onClick aqui */}
          <CardContent>
            <Typography variant="h6" component="div">
              Sinopse:
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              {historia.descricao}
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Button variant="contained" color="secondary" fullWidth onClick={handleNavigation}>
                {progresso[historia.id] ? 'Continuar' : 'Começar'}
              </Button>
            </Box>
          </CardContent>
        </CardContainer>
      </CardFlip>
    </Grid2>
  );
};

const Biblioteca = () => {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [bookmarks, setBookmarks] = useState({});
  const [textoBusca, setTextoBusca] = useState('');
  const [historiasFiltradas, setHistoriasFiltradas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistorias = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const fetchedHistorias = historias;
        setHistoriasFiltradas(fetchedHistorias);
      } catch (error) {
        setError(handleGenericError(error, setError));
      } finally {
        setLoading(false);
      }
    };

    const progressoStorage = JSON.parse(localStorage.getItem('progresso')) || {};
    const bookmarksStorage = JSON.parse(localStorage.getItem('bookmarks')) || {};

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

    fetchHistorias();
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
      //Sua lógica de salvar progresso aqui
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10vh',
        width: '100%',
      }}
    >
      {error && error}
      {loading && <Alert severity="info">Carregando...</Alert>}
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
            '&:hover fieldset': {
              borderColor: theme.palette.secondary.light,
            },
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
          <HistoriaCard
            key={historia.id}
            historia={historia}
            progresso={progresso}
            navigate={navigate}
          />
        ))}
      </Grid2>
    </Box>
  );
};

export default Biblioteca;