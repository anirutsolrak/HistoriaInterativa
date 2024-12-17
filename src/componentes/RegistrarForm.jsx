// Registrar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { PersonAdd } from '@mui/icons-material';
import {
  handleAuthError,
  handleGenericError,
} from '../TratativasErro/errorHandling';

const Registrar = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmarPassword, setShowConfirmarPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  const [confirmarSenhaError, setConfirmarSenhaError] = useState('');
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setSenhaError('');
    setConfirmarSenhaError('');
    setErro(null);

    if (senha !== confirmarSenha) {
      setConfirmarSenhaError('As senhas não coincidem.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      setSucesso(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      if (error.code.startsWith('auth/')) {
        handleAuthError(error, setErro);
      } else {
        handleGenericError(error, setErro);
      }
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmarPassword = () =>
    setShowConfirmarPassword((show) => !show);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: { xs: '100%' },
          maxWidth: 400,
          p: 3,
          boxShadow: 3,
          borderRadius: 1,
          maxHeight: '80vh', // Adiciona altura máxima para permitir scroll
          overflowY: 'auto', // Permite scroll vertical se necessário
        }}
      >
        <Typography variant="h4" component="h1" mb={2}>
          Criar Conta
        </Typography>

        {sucesso && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Conta criada com sucesso! Redirecionando...
          </Alert>
        )}

        {erro && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {erro}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
              fullWidth
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              fullWidth
              error={!!senhaError}
              helperText={senhaError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirmar Senha"
              type={showConfirmarPassword ? 'text' : 'password'}
              value={confirmarSenha}
              autoComplete="new-password"
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              fullWidth
              error={!!confirmarSenhaError}
              helperText={confirmarSenhaError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmarPassword}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showConfirmarPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              startIcon={<PersonAdd />}
            >
              Criar Conta
            </Button>
          </Stack>
        </form>
        <Typography variant="body2" mt={2}>
          Já tem uma conta? <Link to="/">Faça login aqui</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Registrar;
