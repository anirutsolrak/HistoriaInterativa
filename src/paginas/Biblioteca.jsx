import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Grid,
  Chip,
  Avatar,
  CardMedia,
  Fade,
  useTheme,
  alpha,
  Skeleton,
} from '@mui/material';
import { SearchIcon } from '../TemaEstilizado';
import CardFlip from 'react-card-flip';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { handleGenericError } from '../TratativasErro/errorHandling';
import { historias as historiasData } from '../historias';

const HistoriaCardFront = ({ historia, handleCardClick, theme, randomImage }) => {
  return (
    <Card
      onClick={handleCardClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1,
        },
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={historia.imagemCapa || randomImage}
        alt={historia.titulo}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: 2,
          p: 2,
        }}
      >
        <Typography variant="h5" component="div" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
          {historia.titulo}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
          {historia.generos?.map((genero) => (
            <Chip
              key={genero}
              label={genero}
              size="small"
              sx={{
                backgroundColor: alpha(theme.palette.secondary.main, 0.2),
                color: theme.palette.secondary.light,
                borderRadius: '16px',
              }}
            />
          ))}
        </Box>
        {historia.conquistas?.length > 0 && (
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {historia.conquistas.map((_, index) => (
              <Avatar
                key={index}
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: alpha(theme.palette.primary.main, 0.2),
                }}
              >
                <EmojiEventsIcon sx={{ fontSize: 16, color: theme.palette.primary.light }} />
              </Avatar>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

const HistoriaCardBack = ({ historia, progresso, navigate, handleCardClick, onAnimationStart, isAnimating, theme }) => {
  const handleNavigation = (e) => {
    e.stopPropagation();
    onAnimationStart();
    setTimeout(() => navigate(`/historia/${historia.id}`), 1000);
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: isAnimating ? 'opacity 0.5s ease-in-out' : 'none',
        opacity: isAnimating ? 0 : 1,
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.95)} 0%, ${alpha(
          theme.palette.background.default,
          0.95
        )} 100%)`,
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography variant="h6" gutterBottom color="primary.light">
          Sinopse
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            flexGrow: 1,
            color: 'text.secondary',
            lineHeight: 1.6,
          }}
        >
          {historia.descricao}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          onClick={handleNavigation}
          sx={{
            mt: 'auto',
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
          }}
        >
          {progresso[historia.id] ? 'Continuar' : 'Começar'}
        </Button>
      </CardContent>
    </Card>
  );
};

const HistoriaCard = ({ historia, progresso, navigate, onAnimationStart, isAnimating, randomImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = useTheme();

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box sx={{ height: 400, perspective: '1000px' }}>
        <CardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront={0.6}
          flipSpeedFrontToBack={0.6}
          infinite={false}
        >
          <HistoriaCardFront historia={historia} handleCardClick={handleCardClick} theme={theme} randomImage={randomImage} />
          <HistoriaCardBack
            historia={historia}
            progresso={progresso}
            navigate={navigate}
            handleCardClick={handleCardClick}
            onAnimationStart={onAnimationStart}
            isAnimating={isAnimating}
            theme={theme}
          />
        </CardFlip>
      </Box>
    </Grid>
  );
};

const Biblioteca = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [progresso, setProgresso] = useState({});
  const [textoBusca, setTextoBusca] = useState('');
  const [historiasFiltradas, setHistoriasFiltradas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animatingId, setAnimatingId] = useState(null);
  const [randomImages, setRandomImages] = useState([]); // Estado para um array de imagens aleatórias
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchHistorias = async () => {
      try {
        const unsplashApiKey = 'IhJ4WO75dP_m9gnENy5tjyi0PkaZ06ooo8ycy7W7CRM'; // Substitua pela sua chave de API
        const numHistorias = historiasData.length; // Busca uma imagem para cada história

        // Busca várias imagens aleatórias de uma vez
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${unsplashApiKey}&count=${numHistorias}&query=fantasy`
        );
        if (!response.ok) {
          throw new Error(`Erro ao buscar imagens aleatórias: ${response.status}`);
        }
        const data = await response.json();
        const images = data.map((img) => img.urls.regular); // Extrai as URLs das imagens
        setRandomImages(images);

        // Simula um tempo de carregamento para ver o Skeleton
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setHistoriasFiltradas(historiasData);
      } catch (error) {
        setError(handleGenericError(error, setError));
      } finally {
        setLoading(false);
      }
    };

    const progressoStorage = JSON.parse(localStorage.getItem('progresso')) || {};
    setProgresso(progressoStorage);

    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (!user) {
        localStorage.removeItem('progresso');
        setProgresso({});
        navigate('/');
      }
    });

    fetchHistorias();
    return () => unsubscribeAuth();
  }, [navigate]);

  useEffect(() => {
    const filtrarHistorias = () => {
      const novasHistoriasFiltradas = historiasData.filter(
        (historia) =>
          historia.titulo.toLowerCase().includes(textoBusca.toLowerCase()) ||
          historia.descricao.toLowerCase().includes(textoBusca.toLowerCase())
      );
      setHistoriasFiltradas(novasHistoriasFiltradas);
    };

    filtrarHistorias();
  }, [textoBusca]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 4,
        pb: 6,
        px: { xs: 2, sm: 4 },
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: animatingId ? 'transform 1s ease-in-out' : 'none',
        transformOrigin: 'center',
        transform: animatingId ? 'scale(2) translateY(-20vh)' : 'scale(1)',
        width: '94vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 1400,
            mx: 'auto',
            pt: 4,
          }}
        >
          <Box sx={{ mb: 4, width: '100%', maxWidth: 600 }}>
            <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: '50px' }} />
          </Box>
          <Grid container spacing={3}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: '16px', mb: 1 }} />
                <Skeleton width="70%" />
                <Skeleton width="40%" />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Fade in={!loading}>
          <Box
            sx={{
              maxWidth: 1400,
              width: '100%',
              mx: 'auto',
              transition: animatingId ? 'opacity 0.5s ease-in-out' : 'none',
              opacity: animatingId ? 0 : 1,
            }}
          >
            {error}
            <Box sx={{ mb: 4, maxWidth: 600, mx: 'auto', width: '100%' }}>
              <TextField
                fullWidth
                placeholder="Buscar histórias..."
                value={textoBusca}
                onChange={(e) => setTextoBusca(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '50px',
                    backgroundColor: alpha(theme.palette.background.paper, 0.8),
                    backdropFilter: 'blur(10px)',
                  },
                }}
              />
            </Box>

            <Grid container spacing={3}>
              {historiasFiltradas.map((historia, index) => (
                <HistoriaCard
                  key={historia.id}
                  historia={historia}
                  progresso={progresso}
                  navigate={navigate}
                  onAnimationStart={() => setAnimatingId(historia.id)}
                  isAnimating={animatingId === historia.id}
                  randomImage={randomImages[index]} // Passa a imagem correspondente
                />
              ))}
            </Grid>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default Biblioteca;