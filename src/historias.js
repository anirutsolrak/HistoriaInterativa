export const historias = [
  {
    id: 'academia-mistica',
    titulo: 'As Provas da Academia Mística',
    descricao:
      'Entre na lendária Academia Arcanus e enfrente as Provas de Ascensão!',
    progresso: 0,
    bookmark: null,
    nodes: [
      {
        id: 'inicio',
        texto:
          'Você se encontra diante dos imponentes portões da Academia Arcanus, um castelo extenso erguido sobre uma montanha encoberta por névoa. A academia é lendária, suas torres transbordando de poder arcano, visíveis mesmo a quilômetros de distância. As grandes portas duplas brilham fracamente com runas, uma visão acolhedora e intimidante ao mesmo tempo. Ao seu redor, outros candidatos nervosos seguram seus pertences com firmeza, seus rostos refletindo a mistura de excitação e apreensão que você sente.',
        escolhas: [
          {
            texto:
              'Entre ousadamente no salão, preparando-se para quaisquer ilusões que possam surgir.',
            proximoNodo: 'a1',
          },
          {
            texto:
              'Observe os outros estudantes, tentando obter pistas sobre o salão.',
            proximoNodo: 'b1',
          },
          {
            texto:
              'Respire fundo e lance um feitiço de proteção antes de entrar.',
            proximoNodo: 'c1',
          },
          {
            texto: 'Hesite, examinando o ambiente em busca de perigos ocultos.',
            proximoNodo: 'd1',
          },
        ],
      },
      {
        id: 'a1',
        texto:
          'Ao entrar, o salão se move, as paredes parecendo respirar. Você se prepara, concentrando-se em seus sentidos. Você percebe que o movimento é previsível, um pulso rítmico. Antecipando os movimentos, você navega rápida e eficientemente, emergindo em um pátio muito à frente dos outros.',
        escolhas: [{ texto: 'Escolher uma das orbes', proximoNodo: 'a1.1' }],
      },
      {
        id: 'a1.1',
        texto:
          'No pátio, você encontra um pedestal com três orbes brilhantes: vermelha, azul e verde. Qual você escolhe?',
        escolhas: [
          { texto: 'Orbe Vermelha', proximoNodo: 'a1.1a' },
          { texto: 'Orbe Azul', proximoNodo: 'a1.1b' },
          { texto: 'Orbe Verde', proximoNodo: 'a1.1c' },
        ],
      },
      {
        id: 'a1.1a',
        texto:
          'Uma explosão de fogo o cerca, concedendo velocidade aprimorada, mas também o tornando mais vulnerável à magia de gelo.',
      },
      {
        id: 'a1.1b',
        texto:
          'Uma onda de frio o envolve, aumentando suas defesas mágicas, mas diminuindo seu movimento.',
      },
      {
        id: 'a1.1c',
        texto:
          'Uma onda de energia vital o revigora, curando quaisquer ferimentos e concedendo resistência menor a todos os elementos.',
      },

      {
        id: 'b1',
        texto:
          'Você nota um estudante nervoso murmurando uma rima baixinho. Eles parecem estar navegando pelas ilusões com facilidade. Você o segue discretamente, imitando suas ações, e contorna com sucesso as ilusões mais perigosas.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'b1.1' }],
      },
      {
        id: 'b1.1',
        texto:
          'O estudante percebe que você está o seguindo. Ele se vira e lhe oferece uma escolha: unir forças ou seguir caminhos separados.',
        escolhas: [
          { texto: 'Unir Forças', proximoNodo: 'fim' },
          { texto: 'Caminhos Separados', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'c1',
        texto:
          'Sua previsão é recompensada. O feitiço de proteção o protege do pior das ilusões, permitindo que você veja através da magia enganosa. O salão se transforma em um caminho tranquilo de jardim, levando você diretamente à saída.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'c1.1' }],
      },
      {
        id: 'c1.1',
        texto:
          'No fim do caminho, você encontra um velho jardineiro sábio cuidando de plantas mágicas. Ele lhe oferece uma única muda de uma de suas plantas. Qual você escolhe?',
        escolhas: [
          { texto: 'Pétala Lunar', proximoNodo: 'fim' },
          { texto: 'Esporo Solar', proximoNodo: 'fim' },
          { texto: 'Flor Sombria', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'd1',
        texto:
          'Sua cautela vale a pena. Você percebe um brilho fraco no ar, revelando uma porta escondida. Essa passagem secreta ignora completamente o Salão das Ilusões.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'd1.1' }],
      },
      {
        id: 'd1.1',
        texto:
          'A passagem leva a uma biblioteca repleta de tomos antigos. Um bibliotecário espectral o saúda e lhe oferece uma escolha de três livros:',
        escolhas: [
          { texto: 'Arcanos dos Antigos', proximoNodo: 'fim' },
          { texto: 'Bestiário da Floresta Proibida', proximoNodo: 'fim' },
          { texto: 'História da Academia Arcanus', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'fim',
        texto:
          'Independentemente do caminho escolhido, todos os estudantes sobreviventes se encontram no anfiteatro com o diretor. O tremor se intensifica, e uma fissura maciça se abre no chão, dividindo o anfiteatro ao meio. O diretor grita um aviso – um poderoso artefato mágico no coração da academia está se desestabilizando! Os estudantes são jogados no caos enquanto o chão desaba sob seus pés. O diretor salta sobre o abismo, aterrissando em uma plataforma estável. Ele aponta para uma série de plataformas flutuantes que oferecem a única fuga do anfiteatro em colapso.',
      },
    ],
  },
  {
    id: 'academia',
    titulo: 'As Provas da Academia Mística',
    descricao:
      'Entre na lendária Academia Arcanus e enfrente as Provas de Ascensão!',
    progresso: 0,
    bookmark: null,
    nodes: [
      {
        id: 'inicio',
        texto:
          'Você se encontra diante dos imponentes portões da Academia Arcanus, um castelo extenso erguido sobre uma montanha encoberta por névoa. A academia é lendária, suas torres transbordando de poder arcano, visíveis mesmo a quilômetros de distância. As grandes portas duplas brilham fracamente com runas, uma visão acolhedora e intimidante ao mesmo tempo. Ao seu redor, outros candidatos nervosos seguram seus pertences com firmeza, seus rostos refletindo a mistura de excitação e apreensão que você sente.',
        escolhas: [
          {
            texto:
              'Entre ousadamente no salão, preparando-se para quaisquer ilusões que possam surgir.',
            proximoNodo: 'a1',
          },
          {
            texto:
              'Observe os outros estudantes, tentando obter pistas sobre o salão.',
            proximoNodo: 'b1',
          },
          {
            texto:
              'Respire fundo e lance um feitiço de proteção antes de entrar.',
            proximoNodo: 'c1',
          },
          {
            texto: 'Hesite, examinando o ambiente em busca de perigos ocultos.',
            proximoNodo: 'd1',
          },
        ],
      },
      {
        id: 'a1',
        texto:
          'Ao entrar, o salão se move, as paredes parecendo respirar. Você se prepara, concentrando-se em seus sentidos. Você percebe que o movimento é previsível, um pulso rítmico. Antecipando os movimentos, você navega rápida e eficientemente, emergindo em um pátio muito à frente dos outros.',
        escolhas: [{ texto: 'Escolher uma das orbes', proximoNodo: 'a1.1' }],
      },
      {
        id: 'a1.1',
        texto:
          'No pátio, você encontra um pedestal com três orbes brilhantes: vermelha, azul e verde. Qual você escolhe?',
        escolhas: [
          { texto: 'Orbe Vermelha', proximoNodo: 'a1.1a' },
          { texto: 'Orbe Azul', proximoNodo: 'a1.1b' },
          { texto: 'Orbe Verde', proximoNodo: 'a1.1c' },
        ],
      },
      {
        id: 'a1.1a',
        texto:
          'Uma explosão de fogo o cerca, concedendo velocidade aprimorada, mas também o tornando mais vulnerável à magia de gelo.',
      },
      {
        id: 'a1.1b',
        texto:
          'Uma onda de frio o envolve, aumentando suas defesas mágicas, mas diminuindo seu movimento.',
      },
      {
        id: 'a1.1c',
        texto:
          'Uma onda de energia vital o revigora, curando quaisquer ferimentos e concedendo resistência menor a todos os elementos.',
      },

      {
        id: 'b1',
        texto:
          'Você nota um estudante nervoso murmurando uma rima baixinho. Eles parecem estar navegando pelas ilusões com facilidade. Você o segue discretamente, imitando suas ações, e contorna com sucesso as ilusões mais perigosas.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'b1.1' }],
      },
      {
        id: 'b1.1',
        texto:
          'O estudante percebe que você está o seguindo. Ele se vira e lhe oferece uma escolha: unir forças ou seguir caminhos separados.',
        escolhas: [
          { texto: 'Unir Forças', proximoNodo: 'fim' },
          { texto: 'Caminhos Separados', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'c1',
        texto:
          'Sua previsão é recompensada. O feitiço de proteção o protege do pior das ilusões, permitindo que você veja através da magia enganosa. O salão se transforma em um caminho tranquilo de jardim, levando você diretamente à saída.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'c1.1' }],
      },
      {
        id: 'c1.1',
        texto:
          'No fim do caminho, você encontra um velho jardineiro sábio cuidando de plantas mágicas. Ele lhe oferece uma única muda de uma de suas plantas. Qual você escolhe?',
        escolhas: [
          { texto: 'Pétala Lunar', proximoNodo: 'fim' },
          { texto: 'Esporo Solar', proximoNodo: 'fim' },
          { texto: 'Flor Sombria', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'd1',
        texto:
          'Sua cautela vale a pena. Você percebe um brilho fraco no ar, revelando uma porta escondida. Essa passagem secreta ignora completamente o Salão das Ilusões.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'd1.1' }],
      },
      {
        id: 'd1.1',
        texto:
          'A passagem leva a uma biblioteca repleta de tomos antigos. Um bibliotecário espectral o saúda e lhe oferece uma escolha de três livros:',
        escolhas: [
          { texto: 'Arcanos dos Antigos', proximoNodo: 'fim' },
          { texto: 'Bestiário da Floresta Proibida', proximoNodo: 'fim' },
          { texto: 'História da Academia Arcanus', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'fim',
        texto:
          'Independentemente do caminho escolhido, todos os estudantes sobreviventes se encontram no anfiteatro com o diretor. O tremor se intensifica, e uma fissura maciça se abre no chão, dividindo o anfiteatro ao meio. O diretor grita um aviso – um poderoso artefato mágico no coração da academia está se desestabilizando! Os estudantes são jogados no caos enquanto o chão desaba sob seus pés. O diretor salta sobre o abismo, aterrissando em uma plataforma estável. Ele aponta para uma série de plataformas flutuantes que oferecem a única fuga do anfiteatro em colapso.',
      },
    ],
  },
  {
    id: 'mistica-academia',
    titulo: 'As Provas da Academia Mística',
    descricao:
      'Entre na lendária Academia Arcanus e enfrente as Provas de Ascensão!',
    progresso: 0,
    bookmark: null,
    nodes: [
      {
        id: 'inicio',
        texto:
          'Você se encontra diante dos imponentes portões da Academia Arcanus, um castelo extenso erguido sobre uma montanha encoberta por névoa. A academia é lendária, suas torres transbordando de poder arcano, visíveis mesmo a quilômetros de distância. As grandes portas duplas brilham fracamente com runas, uma visão acolhedora e intimidante ao mesmo tempo. Ao seu redor, outros candidatos nervosos seguram seus pertences com firmeza, seus rostos refletindo a mistura de excitação e apreensão que você sente.',
        escolhas: [
          {
            texto:
              'Entre ousadamente no salão, preparando-se para quaisquer ilusões que possam surgir.',
            proximoNodo: 'a1',
          },
          {
            texto:
              'Observe os outros estudantes, tentando obter pistas sobre o salão.',
            proximoNodo: 'b1',
          },
          {
            texto:
              'Respire fundo e lance um feitiço de proteção antes de entrar.',
            proximoNodo: 'c1',
          },
          {
            texto: 'Hesite, examinando o ambiente em busca de perigos ocultos.',
            proximoNodo: 'd1',
          },
        ],
      },
      {
        id: 'a1',
        texto:
          'Ao entrar, o salão se move, as paredes parecendo respirar. Você se prepara, concentrando-se em seus sentidos. Você percebe que o movimento é previsível, um pulso rítmico. Antecipando os movimentos, você navega rápida e eficientemente, emergindo em um pátio muito à frente dos outros.',
        escolhas: [{ texto: 'Escolher uma das orbes', proximoNodo: 'a1.1' }],
      },
      {
        id: 'a1.1',
        texto:
          'No pátio, você encontra um pedestal com três orbes brilhantes: vermelha, azul e verde. Qual você escolhe?',
        escolhas: [
          { texto: 'Orbe Vermelha', proximoNodo: 'a1.1a' },
          { texto: 'Orbe Azul', proximoNodo: 'a1.1b' },
          { texto: 'Orbe Verde', proximoNodo: 'a1.1c' },
        ],
      },
      {
        id: 'a1.1a',
        texto:
          'Uma explosão de fogo o cerca, concedendo velocidade aprimorada, mas também o tornando mais vulnerável à magia de gelo.',
      },
      {
        id: 'a1.1b',
        texto:
          'Uma onda de frio o envolve, aumentando suas defesas mágicas, mas diminuindo seu movimento.',
      },
      {
        id: 'a1.1c',
        texto:
          'Uma onda de energia vital o revigora, curando quaisquer ferimentos e concedendo resistência menor a todos os elementos.',
      },

      {
        id: 'b1',
        texto:
          'Você nota um estudante nervoso murmurando uma rima baixinho. Eles parecem estar navegando pelas ilusões com facilidade. Você o segue discretamente, imitando suas ações, e contorna com sucesso as ilusões mais perigosas.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'b1.1' }],
      },
      {
        id: 'b1.1',
        texto:
          'O estudante percebe que você está o seguindo. Ele se vira e lhe oferece uma escolha: unir forças ou seguir caminhos separados.',
        escolhas: [
          { texto: 'Unir Forças', proximoNodo: 'fim' },
          { texto: 'Caminhos Separados', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'c1',
        texto:
          'Sua previsão é recompensada. O feitiço de proteção o protege do pior das ilusões, permitindo que você veja através da magia enganosa. O salão se transforma em um caminho tranquilo de jardim, levando você diretamente à saída.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'c1.1' }],
      },
      {
        id: 'c1.1',
        texto:
          'No fim do caminho, você encontra um velho jardineiro sábio cuidando de plantas mágicas. Ele lhe oferece uma única muda de uma de suas plantas. Qual você escolhe?',
        escolhas: [
          { texto: 'Pétala Lunar', proximoNodo: 'fim' },
          { texto: 'Esporo Solar', proximoNodo: 'fim' },
          { texto: 'Flor Sombria', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'd1',
        texto:
          'Sua cautela vale a pena. Você percebe um brilho fraco no ar, revelando uma porta escondida. Essa passagem secreta ignora completamente o Salão das Ilusões.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'd1.1' }],
      },
      {
        id: 'd1.1',
        texto:
          'A passagem leva a uma biblioteca repleta de tomos antigos. Um bibliotecário espectral o saúda e lhe oferece uma escolha de três livros:',
        escolhas: [
          { texto: 'Arcanos dos Antigos', proximoNodo: 'fim' },
          { texto: 'Bestiário da Floresta Proibida', proximoNodo: 'fim' },
          { texto: 'História da Academia Arcanus', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'fim',
        texto:
          'Independentemente do caminho escolhido, todos os estudantes sobreviventes se encontram no anfiteatro com o diretor. O tremor se intensifica, e uma fissura maciça se abre no chão, dividindo o anfiteatro ao meio. O diretor grita um aviso – um poderoso artefato mágico no coração da academia está se desestabilizando! Os estudantes são jogados no caos enquanto o chão desaba sob seus pés. O diretor salta sobre o abismo, aterrissando em uma plataforma estável. Ele aponta para uma série de plataformas flutuantes que oferecem a única fuga do anfiteatro em colapso.',
      },
    ],
  },
  {
    id: 'mistica',
    titulo: 'As Provas da Academia Mística',
    descricao:
      'Entre na lendária Academia Arcanus e enfrente as Provas de Ascensão!',
    progresso: 0,
    bookmark: null,
    nodes: [
      {
        id: 'inicio',
        texto:
          'Você se encontra diante dos imponentes portões da Academia Arcanus, um castelo extenso erguido sobre uma montanha encoberta por névoa. A academia é lendária, suas torres transbordando de poder arcano, visíveis mesmo a quilômetros de distância. As grandes portas duplas brilham fracamente com runas, uma visão acolhedora e intimidante ao mesmo tempo. Ao seu redor, outros candidatos nervosos seguram seus pertences com firmeza, seus rostos refletindo a mistura de excitação e apreensão que você sente.',
        escolhas: [
          {
            texto:
              'Entre ousadamente no salão, preparando-se para quaisquer ilusões que possam surgir.',
            proximoNodo: 'a1',
          },
          {
            texto:
              'Observe os outros estudantes, tentando obter pistas sobre o salão.',
            proximoNodo: 'b1',
          },
          {
            texto:
              'Respire fundo e lance um feitiço de proteção antes de entrar.',
            proximoNodo: 'c1',
          },
          {
            texto: 'Hesite, examinando o ambiente em busca de perigos ocultos.',
            proximoNodo: 'd1',
          },
        ],
      },
      {
        id: 'a1',
        texto:
          'Ao entrar, o salão se move, as paredes parecendo respirar. Você se prepara, concentrando-se em seus sentidos. Você percebe que o movimento é previsível, um pulso rítmico. Antecipando os movimentos, você navega rápida e eficientemente, emergindo em um pátio muito à frente dos outros.',
        escolhas: [{ texto: 'Escolher uma das orbes', proximoNodo: 'a1.1' }],
      },
      {
        id: 'a1.1',
        texto:
          'No pátio, você encontra um pedestal com três orbes brilhantes: vermelha, azul e verde. Qual você escolhe?',
        escolhas: [
          { texto: 'Orbe Vermelha', proximoNodo: 'a1.1a' },
          { texto: 'Orbe Azul', proximoNodo: 'a1.1b' },
          { texto: 'Orbe Verde', proximoNodo: 'a1.1c' },
        ],
      },
      {
        id: 'a1.1a',
        texto:
          'Uma explosão de fogo o cerca, concedendo velocidade aprimorada, mas também o tornando mais vulnerável à magia de gelo.',
      },
      {
        id: 'a1.1b',
        texto:
          'Uma onda de frio o envolve, aumentando suas defesas mágicas, mas diminuindo seu movimento.',
      },
      {
        id: 'a1.1c',
        texto:
          'Uma onda de energia vital o revigora, curando quaisquer ferimentos e concedendo resistência menor a todos os elementos.',
      },

      {
        id: 'b1',
        texto:
          'Você nota um estudante nervoso murmurando uma rima baixinho. Eles parecem estar navegando pelas ilusões com facilidade. Você o segue discretamente, imitando suas ações, e contorna com sucesso as ilusões mais perigosas.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'b1.1' }],
      },
      {
        id: 'b1.1',
        texto:
          'O estudante percebe que você está o seguindo. Ele se vira e lhe oferece uma escolha: unir forças ou seguir caminhos separados.',
        escolhas: [
          { texto: 'Unir Forças', proximoNodo: 'fim' },
          { texto: 'Caminhos Separados', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'c1',
        texto:
          'Sua previsão é recompensada. O feitiço de proteção o protege do pior das ilusões, permitindo que você veja através da magia enganosa. O salão se transforma em um caminho tranquilo de jardim, levando você diretamente à saída.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'c1.1' }],
      },
      {
        id: 'c1.1',
        texto:
          'No fim do caminho, você encontra um velho jardineiro sábio cuidando de plantas mágicas. Ele lhe oferece uma única muda de uma de suas plantas. Qual você escolhe?',
        escolhas: [
          { texto: 'Pétala Lunar', proximoNodo: 'fim' },
          { texto: 'Esporo Solar', proximoNodo: 'fim' },
          { texto: 'Flor Sombria', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'd1',
        texto:
          'Sua cautela vale a pena. Você percebe um brilho fraco no ar, revelando uma porta escondida. Essa passagem secreta ignora completamente o Salão das Ilusões.',
        escolhas: [{ texto: 'Continuar', proximoNodo: 'd1.1' }],
      },
      {
        id: 'd1.1',
        texto:
          'A passagem leva a uma biblioteca repleta de tomos antigos. Um bibliotecário espectral o saúda e lhe oferece uma escolha de três livros:',
        escolhas: [
          { texto: 'Arcanos dos Antigos', proximoNodo: 'fim' },
          { texto: 'Bestiário da Floresta Proibida', proximoNodo: 'fim' },
          { texto: 'História da Academia Arcanus', proximoNodo: 'fim' },
        ],
      },
      {
        id: 'fim',
        texto:
          'Independentemente do caminho escolhido, todos os estudantes sobreviventes se encontram no anfiteatro com o diretor. O tremor se intensifica, e uma fissura maciça se abre no chão, dividindo o anfiteatro ao meio. O diretor grita um aviso – um poderoso artefato mágico no coração da academia está se desestabilizando! Os estudantes são jogados no caos enquanto o chão desaba sob seus pés. O diretor salta sobre o abismo, aterrissando em uma plataforma estável. Ele aponta para uma série de plataformas flutuantes que oferecem a única fuga do anfiteatro em colapso.',
      },
    ],
  },
];
