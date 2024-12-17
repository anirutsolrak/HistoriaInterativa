// Historia.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, LinearProgress, styled } from '@mui/material';
import { historias } from '../historias.js';
import { auth } from '../firebaseConfig';
import { theme } from '../TemaEstilizado';
import { handleGenericError } from '../TratativasErro/errorHandling';

const Container = styled(Box)({
  padding: theme.spacing(4),
  maxWidth: 600,
  margin: '0 auto',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
});

const StoryContent = styled(Box)({
  marginBottom: theme.spacing(2),
});

const ChoiceButton = styled(Button)({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.secondary.main,
});

const ProgressIndicator = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
});

const Historia = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [historia, setHistoria] = useState(null);
  const [nodoAtual, setNodoAtual] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para mensagens de erro

  useEffect(() => {
    const carregarHistoria = async () => {
      try {
        const historiaEncontrada = historias.find((h) => h.id === id);
        if (!historiaEncontrada || !historiaEncontrada.nodes) {
          throw new Error('História não encontrada ou sem nós');
        }
        setHistoria(historiaEncontrada);
        const nodoInicial = historiaEncontrada.bookmark
          ? historiaEncontrada.nodes.find(
              (n) => n.id === historiaEncontrada.bookmark
            )
          : historiaEncontrada.nodes[0];
        setNodoAtual(nodoInicial);
      } catch (error) {
        setError(handleGenericError(error, setError));
      } finally {
        setLoading(false);
      }
    };

    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/');
      }
    });

    carregarHistoria();
    return () => unsubscribeAuth();
  }, [id, navigate]);

  const handleEscolha = (proximoNodoId) => {
    try {
      if (!historia || !historia.nodes)
        throw new Error('História não carregada');
      const proximoNodo = historia.nodes.find(
        (node) => node.id === proximoNodoId
      );
      if (!proximoNodo) {
        throw new Error(`Próximo nó não encontrado: ${proximoNodoId}`);
      }
      setNodoAtual(proximoNodo);
      salvarProgresso(id, historia.progresso + 1, proximoNodoId);
    } catch (error) {
      setError(handleGenericError(error, setError));
    }
  };

  const salvarProgresso = (historiaId, novoProgresso, novoBookmark) => {
    if (historia) {
      const historiasAtualizadas =
        JSON.parse(localStorage.getItem('historias')) || [];
      const historiaIndex = historiasAtualizadas.findIndex(
        (h) => h.id === historiaId
      );

      if (historiaIndex !== -1) {
        historiasAtualizadas[historiaIndex] = {
          ...historia,
          progresso: novoProgresso,
          bookmark: novoBookmark,
        };
        localStorage.setItem('historias', JSON.stringify(historiasAtualizadas));
        setHistoria(historiasAtualizadas[historiaIndex]);
      } else {
        // Adiciona a história ao localStorage se não existir
        const novaHistoria = {
          ...historias.find((h) => h.id === id),
          progresso: novoProgresso,
          bookmark: novoBookmark,
        };
        historiasAtualizadas.push(novaHistoria);
        localStorage.setItem('historias', JSON.stringify(historiasAtualizadas));
        setHistoria(novaHistoria);
      }
    } else {
      console.error(
        'História não carregada para salvar o progresso',
        historiaId
      );
    }
  };

  if (loading) {
    return <LinearProgress />;
  }

  const progresso = historia
    ? nodoAtual
      ? historia.nodes.findIndex((node) => node.id === nodoAtual.id) + 1
      : 0
    : 0;
  const totalNos = historia ? historia.nodes.length : 0;
  const progressoPercentual = (progresso / totalNos) * 100;

  return (
    <Container>
      {error && error} {/* Exibe a mensagem de erro */}
      <ProgressIndicator>
        <Typography variant="h6" component="span" sx={{ mr: 1 }}>
          {progresso} de {totalNos}
        </Typography>
        <LinearProgress variant="determinate" value={progressoPercentual} />
      </ProgressIndicator>
      <StoryContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {nodoAtual?.texto || 'Nenhum texto encontrado'}
        </Typography>
        {nodoAtual?.escolhas &&
          nodoAtual.escolhas.map((escolha, index) => (
            <ChoiceButton
              key={index}
              variant="contained"
              onClick={() => handleEscolha(escolha.proximoNodo)}
            >
              {escolha.texto}
            </ChoiceButton>
          ))}
      </StoryContent>
    </Container>
  );
};

export default Historia;
