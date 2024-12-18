import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, CardMedia, Avatar, styled } from '@mui/material';
import CardFlip from 'react-card-flip';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  minHeight: 300,
  width: '100%',
  maxWidth: 350,
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
}));

const HistoriaCard = ({ historia, progresso }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNavigation = () => {
    navigate(`/historia/${historia.id}`);
  };

  return (
    <CardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={0.6} flipSpeedFrontToBack={0.6}>
      <CardContainer onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="350"
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
      <CardContainer onClick={handleCardClick}>
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
  );
};

export default HistoriaCard;