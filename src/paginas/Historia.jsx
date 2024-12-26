import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { auth } from '../firebaseConfig';
import { historias } from '../historias.js';
import { handleGenericError } from '../TratativasErro/errorHandling';
import StoryContainer from '../componentes/StoryNavigation/StoryContainer';
import StoryContent from '../componentes/StoryNavigation/StoryContent';
import StoryChoices from '../componentes/StoryNavigation/StoryChoices';
import StoryProgress from '../componentes/StoryNavigation/StoryProgress';

const Historia = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [historia, setHistoria] = useState(null);
  const [nodoAtual, setNodoAtual] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const handleEscolha = async (proximoNodoId) => {
    try {
      setIsTransitioning(true);
      if (!historia || !historia.nodes)
        throw new Error('História não carregada');

      const proximoNodo = historia.nodes.find(
        (node) => node.id === proximoNodoId
      );
      if (!proximoNodo) {
        throw new Error(`Próximo nó não encontrado: ${proximoNodoId}`);
      }

      // Pequeno delay para a animação
      await new Promise((resolve) => setTimeout(resolve, 300));

      setNodoAtual(proximoNodo);
      salvarProgresso(id, historia.progresso + 1, proximoNodoId);
    } catch (error) {
      setError(handleGenericError(error, setError));
    } finally {
      setIsTransitioning(false);
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
        const novaHistoria = {
          ...historias.find((h) => h.id === id),
          progresso: novoProgresso,
          bookmark: novoBookmark,
        };
        historiasAtualizadas.push(novaHistoria);
        localStorage.setItem('historias', JSON.stringify(historiasAtualizadas));
        setHistoria(novaHistoria);
      }
    }
  };

  if (loading || !nodoAtual) return null;

  const progresso = historia
    ? nodoAtual
      ? historia.nodes.findIndex((node) => node.id === nodoAtual.id) + 1
      : 0
    : 0;
  const totalNos = historia ? historia.nodes.length : 0;

  return (
    <StoryContainer>
      <StoryProgress current={progresso} total={totalNos} />
      {error}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <StoryContent text={nodoAtual.texto} />
        {!isTransitioning && nodoAtual.escolhas && (
          <StoryChoices
            choices={nodoAtual.escolhas}
            onChoiceSelect={handleEscolha}
          />
        )}
      </Box>
    </StoryContainer>
  );
};

export default Historia;
