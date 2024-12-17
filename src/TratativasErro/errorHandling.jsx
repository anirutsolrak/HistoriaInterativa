// errorHandling.js (sem alterações, este arquivo permanece o mesmo)
import { Alert } from '@mui/material';

const errorMessages = {
  'auth/user-not-found': 'Usuário não encontrado. Verifique o e-mail.',
  'auth/wrong-password': 'Senha incorreta. Tente novamente.',
  'auth/invalid-email': 'E-mail inválido. Por favor, digite um e-mail válido.',
  'auth/too-many-requests':
    'Muitas tentativas de login. Tente novamente mais tarde.',
  'auth/network-request-failed':
    'Falha na conexão com a rede. Verifique sua conexão com a internet.',
  'auth/email-already-in-use': 'Este endereço de e-mail já está em uso.',
  'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres.',
  default: 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
};

export const handleAuthError = (error, setError) => {
  let errorMessage = errorMessages[error.code] || errorMessages.default;

  console.error('Erro de autenticação:', error.code, error.message);

  const alert = (
    <Alert key={error.code} severity="error" sx={{ mt: 2 }}>
      {errorMessage}
    </Alert>
  );

  setError(alert);
  return alert;
};

export const handleGenericError = (error, setError) => {
  console.error('Erro genérico:', error);
  const alert = (
    <Alert key={Date.now()} severity="error" sx={{ mt: 2 }}>
      Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.
    </Alert>
  );
  setError(alert);
  return alert;
};
