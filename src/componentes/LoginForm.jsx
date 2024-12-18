import React, { useState } from 'react';
import { theme } from '../TemaEstilizado';
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
  Alert,
  Typography,
  Stack,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import loginBackGroundImage from '../assets/loginBackGroundImage.jpg';
import {handleAuthError} from '../TratativasErro/errorHandling'


const LoginForm = () => {


  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Limpa o erro anterior
    setLoading(true);

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/biblioteca');
    } catch (error) {
      handleAuthError(error, setError); // Chama a função externa
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${loginBackGroundImage})`, // Corrigido: usa url()
        backgroundSize: 'cover', // Para cobrir toda a área
        backgroundPosition: 'center', // Centraliza a imagem
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: { xs: '100%', sm: 'auto' },
          maxWidth: 400,
          p: 3,
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // Preto com 50% de opacidade
          color: '#FFFFFF', // Texto branco para contraste
           boxShadow: '0px 2px 4px rgba(255, 255, 255, 1)',  //Sombra branca, mais sutil, dependendo da imagem
          borderRadius: 1,
          maxHeight: '80vh', // Adiciona altura máxima para permitir scroll
          overflowY: 'auto', // Permite scroll vertical se necessário
        }}
      >
        {error && error}
        <form  onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField 
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
              id="email-input"
              autoComplete="off"
             
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // ou qualquer cor que você desejar
                },
              }}
            />
            <TextField
            variant="outlined"
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              margin="normal"
              id="senha-input"
        autoComplete="off"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                          sx={{ color: 'white' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Entrar'}
            </Button>
          </Stack>
        </form>
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          Não tem uma conta?
          <Link to="/registrar" style={{ color: theme.palette.primary.main, textDecoration: 'underline' }}> 
            Criar uma conta
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
