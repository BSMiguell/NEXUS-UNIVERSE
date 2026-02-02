const charactersData = [
  {
    id: 1,
    name: "MONKEY D. LUFFY",
    category: "One-Piece",
    image: "img/One-Piece/Luffy-1.png",
    description:
      "Capitão dos Piratas do Chapéu de Palha, usuário da Akuma no Mi Gomu Gomu, futuro Rei dos Piratas. Destino: Encontrar o One Piece.",
    details: {
      universo: "One Piece",
      poder: "Gomu Gomu no Mi (Fruta da Borracha)",
      status: "Ativo - Em Busca do One Piece",
      estreia: 1997,
      recompensa: "฿3,000,000,000",
      afinidade: "Haki do Conquistador",
      nível: "S+",
    },
  },

  {
    id: 2,
    name: "SON GOKU",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/gokou-1.png",
    description:
      "O guerreiro Sayajin mais forte, protetor da Terra, mestre das Artes Marciais. Transformações: Super Saiyajin a Deus.",
    details: {
      universo: "Dragon Ball",
      poder: "Ki Divino - Ultra Instinto",
      status: "Lendário - Protetor Universal",
      estreia: 1984,
      transformação: "Super Saiyajin Blue",
      técnica: "Kamehameha",
      nível: "SSS",
    },
  },

  {
    id: 3,
    name: "GUTS",
    category: "Berserk",
    image: "img/Berserk/Guts-1.png",
    description:
      "O Espadachim Negro, caçador de apóstolos, portador da Marca do Sacrifício. Armamento: Dragonslayer.",
    details: {
      universo: "Berserk",
      poder: "Força Sobre-humana",
      status: "Sobrevivente - Caçador de Apóstolos",
      estreia: 1989,
      arma: "Dragonslayer",
      marca: "Marca do Sacrifício",
      nível: "S",
    },
  },

  {
    id: 4,
    name: "MADARA UCHIHA",
    category: "Naruto",
    image: "img/Naruto/Madara-1.png",
    description:
      "Lendário shinobi, co-fundador de Konoha, mestre do Sharingan e Rinnegan. Objetivo: Plano Olho da Lua.",
    details: {
      universo: "Naruto",
      poder: "Sharingan Eterno, Rinnegan",
      status: "Lendário - Reencarnado",
      estreia: 2002,
      aldeia: "Konohagakure (Fundador)",
      jutsu: "Susano'o Completo",
      nível: "SS",
    },
  },

  {
    id: 5,
    name: "CHROLLO LUCILFER",
    category: "HXH",
    image: "hxh/Chrollo.png",
    description:
      "Líder da Tropa Fantasma, usuário de Nen com habilidade de roubar técnicas. Especialidade: Bandit's Secret.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen - Especialista",
      status: "Ativo - Líder da Tropa Fantasma",
      estreia: 1998,
      habilidade: "Skill Hunter",
      grupo: "Phantom Troupe",
      nível: "S+",
    },
  },

  {
    id: 6,
    name: "GYOMEI HIMEJIMA",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/gyomei himejima-2.png",
    description:
      "Pilar da Pedra, o mais forte dos Pilares, mestre da Respiração da Pedra. Arma: Corrente com Machado.",
    details: {
      universo: "Demon Slayer",
      poder: "Respiração da Pedra",
      status: "Pilar - Hashira da Pedra",
      estreia: 2016,
      respiração: "Pedra",
      característica: "Cego - Sentidos Aprimorados",
      nível: "S",
    },
  },

  {
    id: 7,
    name: "ALL MIGHT",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/all might-3.png",
    description:
      'O Símbolo da Paz, portador do One For All, professor de U.A. Frase: "Sou eu que chego!".',
    details: {
      universo: "My Hero Academia",
      poder: "One For All",
      status: "Símbolo da Paz (Aposentado)",
      estreia: 2014,
      escola: "U.A. High School",
      frase: "I AM HERE!",
      nível: "SS",
    },
  },

  {
    id: 8,
    name: "ALUCARD",
    category: "Castlevania",
    image: "img/castlevania/alucard-1.png",
    description:
      "Filho de Drácula, caçador de vampiros, guardião da humanidade. Habilidades: Magia Vampírica e Espadas.",
    details: {
      universo: "Castlevania",
      poder: "Magia Vampírica e Habilidades Sobrenaturais",
      status: "Imortal - Guardião",
      estreia: 1986,
      origem: "Filho de Drácula",
      especialidade: "Caçador de Vampiros",
      nível: "S+",
    },
  },

  {
    id: 9,
    name: "AATROX",
    category: "League of Legend",
    image: "img/lol/Aatrox-1s.png",
    description:
      "A Espada das Trevas, entidade celestial corrompida, destruidor de mundos. Objetivo: Aniquilar tudo.",
    details: {
      universo: "League of Legends",
      poder: "Espada das Trevas - Ascendente Corrompido",
      status: "Ascendente - Aniquilador",
      estreia: 2013,
      título: "A Espada das Trevas",
      objetivo: "Destruição Total",
      nível: "SS",
    },
  },

  {
    id: 10,
    name: "EDWARD ELRIC",
    category: "Fullmetal",
    image: "img/Fullmetal-Alchemist/Edward elric-1.png",
    description:
      "O Alquimista de Aço, mais jovem alquimista estatal da história. Busca: A Pedra Filosofal.",
    details: {
      universo: "Fullmetal Alchemist",
      poder: "Alquimia - Transmutação sem Círculo",
      status: "Alquimista Estatal",
      estreia: 2001,
      título: "Fullmetal Alchemist",
      objetivo: "Recuperar o corpo do irmão",
      nível: "S",
    },
  },

  {
    id: 11,
    name: "Golden Sperm",
    category: "One Punch Man",
    image: "img/One-Punch-Man/golden-sperm-1s.png",
    description:
      "Monstro formado pela fusão de inúmeros espermatozoides monstruosos, uma das criações mais poderosas da Associação de Monstros em One Punch-Man.",
    details: {
      universo: "One Punch Man",
      poder: "Força e velocidade sobre-humanas, transformação corporal",
      status: "Derrotado por Saitama",
      estreia: 2015,
      recompensa: "N/A",
      afinidade: "Monstruosidade",
      nível: "S+",
    },
  },

  {
    id: 12,
    name: "Kenpachi Zaraki",
    category: "Bleach",
    image: "img/Bleach/Zaraki-1.png",
    description:
      "Capitão da 11ª Divisão da Sociedade de Almas, conhecido por sua sede insaciável de batalha e força bruta incomparável.",
    details: {
      universo: "Bleach",
      poder: "Espada Zanpakutō (Nozarashi), força física imensa",
      status: "Ativo - Capitão",
      estreia: 2001,
      recompensa: "N/A",
      afinidade: "Batalha",
      nível: "S",
    },
  },

  {
    id: 13,
    name: "Radahn",
    category: "souls",
    image: "img/souls/radahn-8.png",
    description:
      "General Radahn, o Conquistador das Estrelas, um semideus que detém as estrelas em seu lugar com sua poderosa magia gravitacional.",
    details: {
      universo: "Elden Ring",
      poder: "Magia gravitacional, combate montado",
      status: "Corrompido pela Podridão Escarlate",
      estreia: 2022,
      recompensa: "N/A",
      afinidade: "Gravidade",
      nível: "S+",
    },
  },

  {
    id: 14,
    name: "Keisuke Baji",
    category: "tokyo",
    image: "img/tokyo-revengers/Baji-2.png",
    description:
      "Membro fundador dos Tokyo Manji Gang, conhecido por sua lealdade inabalável e habilidades de combate excepcionais.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Combate corpo a corpo, facas",
      status: "Falecido",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Lealdade",
      nível: "A",
    },
  },

  {
    id: 15,
    name: "Ryomen Sukuna",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/sukana-4s.png",
    description:
      "O Rei das Maldições, uma entidade de poder incomensurável que assombrou a Era de Ouro dos Feiticeiros Jujutsu.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Técnicas Amaldiçoadas, domínio Malevolente",
      status: "Reencarnado em Yuji Itadori",
      estreia: 2018,
      recompensa: "N/A",
      afinidade: "Maldição",
      nível: "S+",
    },
  },

  {
    id: 16,
    name: "Yoriichi Tsugikuni",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/Yoriichi-2.png",
    description:
      "O caçador de demônios mais forte da história, criador da Respiração do Sol e único a quase derrotar Muzan Kibutsuji.",
    details: {
      universo: "Demon Slayer",
      poder: "Respiração do Sol, Marca Solar",
      status: "Falecido",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Sol",
      nível: "S+",
    },
  },

  {
    id: 17,
    name: "Zeldris",
    category: "Nanatsu",
    image: "img/Taizai/zeldris-1.png",
    description:
      "Comandante dos Dez Mandamentos e Príncipe dos Demônios, portador do Mandamento da Piedade e servo do Rei Demônio.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Poder Demoniaco, Mandamento da Piedade",
      status: "Ativo - Comandante",
      estreia: 2014,
      recompensa: "N/A",
      afinidade: "Trevas",
      nível: "S",
    },
  },

  {
    id: 18,
    name: "Dear",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Dear-1.png",
    description:
      "Personagem do mundo de Gachiakuta, envolvido nas complexas dinâmicas de poder e sobrevivência em um ambiente desolado.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades de combate especializadas",
      status: "Ativo",
      estreia: 2022,
      recompensa: "N/A",
      afinidade: "Sobrevivência",
      nível: "B+",
    },
  },

  {
    id: 19,
    name: "Acnologia",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/acnologia-1s.png",
    description:
      "O Dragão Rei, um dragão que se alimenta de outros dragões e é considerado a maior ameaça ao mundo de Fairy Tail.",
    details: {
      universo: "Fairy Tail",
      poder: "Magia de Dragão Slayer, transformação em dragão",
      status: "Derrotado",
      estreia: 2009,
      recompensa: "N/A",
      afinidade: "Dragão",
      nível: "S+",
    },
  },

  {
    id: 20,
    name: "Roronoa Zoro",
    category: "One-Piece",
    image: "img/One-Piece/zoro-1.png",
    description:
      "Espadachim dos Piratas do Chapéu de Palha e futuro maior espadachim do mundo, mestre do estilo de três espadas.",
    details: {
      universo: "One Piece",
      poder: "Estilo de Três Espadas, Haki",
      status: "Ativo - Em busca do One Piece",
      estreia: 1997,
      recompensa: "฿1,111,000,000",
      afinidade: "Espadas",
      nível: "S",
    },
  },

  {
    id: 21,
    name: "Vlad Drácula",
    category: "Castlevania",
    image: "img/castlevania/Vlad Drácula-1.png",
    description:
      "O Lorde das Trevas, um vampiro imortal que governa o Castelo Drácula e é a encarnação do mal na série Castlevania.",
    details: {
      universo: "Castlevania",
      poder: "Magia negra, transformação, imortalidade",
      status: "Ressurge periodicamente",
      estreia: 1986,
      recompensa: "N/A",
      afinidade: "Trevas",
      nível: "S+",
    },
  },

  {
    id: 22,
    name: "Qin Shi Huang",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Qin Shi Huang-1.png",
    description:
      "Primeiro Imperador da China, representante da humanidade no Ragnarok com habilidades baseadas em sua lenda histórica.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Qi, técnicas de imperador",
      status: "Participante do Ragnarok",
      estreia: 2021,
      recompensa: "N/A",
      afinidade: "Realeza",
      nível: "S",
    },
  },

  {
    id: 23,
    name: "Jotaro Kujo",
    category: "jojo",
    image: "img/Jojo/Jotaro-1.png",
    description:
      "Usuário do Stand Star Platinum, protagonista da Parte 3: Stardust Crusaders, neto de Joseph Joestar.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand (Star Platinum), Time Stop",
      status: "Ativo - Feiticeiro Stand",
      estreia: 1989,
      recompensa: "N/A",
      afinidade: "Stand",
      nível: "S",
    },
  },

  {
    id: 24,
    name: "Nosferatu Zodd",
    category: "Berserk",
    image: "img/Berserk/Nosferatu Zodd-1.png",
    description:
      "Apóstolo imortal que busca oponentes dignos em batalha, conhecido por sua forma monstruosa e habilidades de regeneração.",
    details: {
      universo: "Berserk",
      poder: "Transformação apóstolo, regeneração, imortalidade",
      status: "Ativo - Mercenário",
      estreia: 1990,
      recompensa: "N/A",
      afinidade: "Batalha",
      nível: "S",
    },
  },

  {
    id: 25,
    name: "Alphonse Elric",
    category: "Fullmetal",
    image: "img/Fullmetal-Alchemist/Alphonse Elric-1.png",
    description:
      "Irmão mais novo de Edward Elric, cuja alma está ligada a uma armadura de metal após um experimento de alquimia falho.",
    details: {
      universo: "Fullmetal Alchemist",
      poder: "Alquimia sem círculo de transmutação",
      status: "Recuperou seu corpo",
      estreia: 2001,
      recompensa: "N/A",
      afinidade: "Alquimia",
      nível: "A+",
    },
  },

  {
    id: 26,
    name: "Darius",
    category: "League of Legend",
    image: "img/lol/Darius-1.png",
    description:
      "A Mão de Noxus, um comandante implacável cuja presença no campo de batalha inspira tanto terror quanto lealdade.",
    details: {
      universo: "League of Legends",
      poder: "Machadão, execuções",
      status: "Ativo - General de Noxus",
      estreia: 2012,
      recompensa: "N/A",
      afinidade: "Força",
      nível: "S",
    },
  },

  {
    id: 27,
    name: "Kyojuro Rengoku",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/Rengoku-3.png",
    description:
      "Pilar das Chamas, um caçador de demônios entusiasta e poderoso que vive pelo código de proteger os mais fracos.",
    details: {
      universo: "Demon Slayer",
      poder: "Respiração das Chamas",
      status: "Falecido em batalha",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Chamas",
      nível: "S",
    },
  },

  {
    id: 28,
    name: "Satoru Gojo",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Gojo-1.png",
    description:
      "Considerado o feiticeiro jujutsu mais forte da era atual, professor na Escola de Feitiçaria de Tóquio e membro do clã Gojo.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Limitless, Seis Olhos, Domínio Malevolente",
      status: "Selado/Ativo",
      estreia: 2018,
      recompensa: "N/A",
      afinidade: "Espaço",
      nível: "S+",
    },
  },

  {
    id: 29,
    name: "Genryusai Shigekuni Yamamoto",
    category: "Bleach",
    image: "img/Bleach/yamamoto-2.png",
    description:
      "Capitão-Comandante da Sociedade de Almas por mais de mil anos, detentor da Zanpakutō de fogo mais poderosa.",
    details: {
      universo: "Bleach",
      poder: "Zanpakutō Ryujin Jakka (fogo)",
      status: "Falecido",
      estreia: 2001,
      recompensa: "N/A",
      afinidade: "Fogo",
      nível: "S+",
    },
  },

  {
    id: 30,
    name: "Nameless King",
    category: "souls",
    image: "img/souls/Nameless King-1.png",
    description:
      "Deus da Guerra exilado, filho de Gwyn e mestre das tempestades, que se aliou aos dragões ancestrais.",
    details: {
      universo: "Dark Souls III",
      poder: "Raio, combate montado em dragão",
      status: "Chefe opcional",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Raio/Tempestade",
      nível: "S+",
    },
  },

  {
    id: 31,
    name: "Laxus Dreyar",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Laxus-1.png",
    description:
      "Mago do Trovão da Fairy Tail, neto do mestre Makarov, conhecido por seu poder eletrizante e personalidade orgulhosa.",
    details: {
      universo: "Fairy Tail",
      poder: "Magia de Dragon Slayer do Raio",
      status: "Ativo - Mago da Fairy Tail",
      estreia: 2009,
      recompensa: "N/A",
      afinidade: "Raio",
      nível: "S",
    },
  },

  {
    id: 32,
    name: "Saga de Gêmeos",
    category: "Os Zavaleiros do Zodíaco",
    image: "img/Os-Cavaleiros-do-Zodíaco/Saga-1.png",
    description:
      "Cavaleiro de Ouro de Gêmeos, antigo patriarca do Santuário que possui o poder de manipular o espaço e a dimensão.",
    details: {
      universo: "Saint Seiya",
      poder: "Outra Dimensão, Explosão Galáctica",
      status: "Redimido/Falecido",
      estreia: 1986,
      recompensa: "N/A",
      afinidade: "Dimensão",
      nível: "S+",
    },
  },

  {
    id: 33,
    name: "Skull Knight",
    category: "Berserk",
    image: "img/Berserk/Skull Knight-1.png",
    description:
      "Entidade enigmática que vagueia pelo mundo, opondo-se à Mão de Deus e auxiliando Guts em sua jornada.",
    details: {
      universo: "Berserk",
      poder: "Espada da Ativação, premonições",
      status: "Ativo - Viajante dimensional",
      estreia: 1990,
      recompensa: "N/A",
      afinidade: "Justiça",
      nível: "S+",
    },
  },

  {
    id: 34,
    name: "Enjin",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Enjin -1s.png",
    description:
      "Personagem do mundo árido de Gachiakuta, com habilidades únicas adaptadas ao ambiente hostil em que vive.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades específicas do mundo",
      status: "Ativo",
      estreia: 2022,
      recompensa: "N/A",
      afinidade: "Adaptação",
      nível: "B+",
    },
  },

  {
    id: 35,
    name: "Loki",
    category: "One-Piece",
    image: "img/One-Piece/Loki-2.png",
    description:
      "Deus da Trapaça da mitologia nórdica, que faz aparições no mundo de One Piece como uma figura divina.",
    details: {
      universo: "One Piece",
      poder: "Poderes divinos, ilusão",
      status: "Ativo - Entidade Divina",
      estreia: 1997,
      recompessa: "N/A",
      afinidade: "Trapaça",
      nível: "S",
    },
  },

  {
    id: 36,
    name: "Estarossa",
    category: "Nanatsu",
    image: "img/Taizai/estarossa-1.png",
    description:
      "Comandante dos Dez Mandamentos portador do Mandamento do Amor, cuja verdadeira identidade esconde um trágico destino.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Mandamento do Amor, Full Counter",
      status: "Transformado em Mael",
      estreia: 2014,
      recompensa: "N/A",
      afinidade: "Amor",
      nível: "S",
    },
  },

  {
    id: 37,
    name: "Feitan Portor",
    category: "HXH",
    image: "img/hxh/Feitan-1.png",
    description:
      "Membro da Tropa Fantasma, especialista em interrogatório e usuário da habilidade Pain Packer que converte dor em poder.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Pain Packer, Rising Sun",
      status: "Ativo - Membro da Tropa Fantasma",
      estreia: 1999,
      recompensa: "N/A",
      afinidade: "Dor",
      nível: "A+",
    },
  },

  {
    id: 38,
    name: "Kokushibo",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/Kokushibo-1.png",
    description:
      "Lua Superior 1, irmão de Yoriichi Tsugikuni que se tornou demônio em busca de superar seu próprio irmão.",
    details: {
      universo: "Demon Slayer",
      poder: "Respiração da Lua, regeneração demoníaca",
      status: "Derrotado",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Lua",
      nível: "S+",
    },
  },

  {
    id: 39,
    name: "Battle Beast",
    category: "Invencível",
    image: "img/Invencível/Battle Beast-4.png",
    description:
      "Guerreiro leão alienígena que busca oponentes dignos em batalha, considerado um dos lutadores mais habilidosos do universo.",
    details: {
      universo: "Invincible",
      poder: "Força sobre-humana, habilidades de batalha",
      status: "Falecido em combate",
      estreia: 2004,
      recompensa: "N/A",
      afinidade: "Batalha",
      nível: "S",
    },
  },

  {
    id: 40,
    name: "Kakuzu",
    category: "Naruto",
    image: "img/Naruto/Kakuzu-1.png",
    description:
      "Membro da Akatsuki imortal que possui cinco corações e pode utilizar múltiplas naturezas de chakra simultaneamente.",
    details: {
      universo: "Naruto",
      poder: "Jiongu (técnica de fios), múltiplos corações",
      status: "Derrotado",
      estreia: 2002,
      recompensa: "N/A",
      afinidade: "Chakra",
      nível: "S",
    },
  },

  {
    id: 41,
    name: "Blast",
    category: "One Punch Man",
    image: "img/One-Punch-Man/blast-1.png",
    description:
      "Herói Classe S Rank 1, um enigmático herói que raramente aparece mas possui poder suficiente para enfrentar ameaças de nível divino.",
    details: {
      universo: "One Punch Man",
      poder: "Manipulação espacial, velocidade extrema",
      status: "Ativo - Herói Classe S",
      estreia: 2015,
      recompensa: "N/A",
      afinidade: "Espaço",
      nível: "S+",
    },
  },

  {
    id: 42,
    name: "Benimaru Shinmon",
    category: "Fire Force",
    image: "img/Fire Force/benimaru-1.png",
    description:
      "Capitão da 7ª Companhia do Corpo de Bombeiros Especiais, conhecido como o 'Homem Mais Forte de Asakusa' e usuário de duas naturezas de chamas.",
    details: {
      universo: "Fire Force",
      poder: "Chamas de Exorcismo e Assassino",
      status: "Ativo - Capitão",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Fogo",
      nível: "S",
    },
  },

  {
    id: 43,
    name: "Broly",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/Broly-3.png",
    description:
      "O Lendário Super Saiyajin, um guerreiro com poder de crescimento infinito cuja força aumenta exponencialmente durante a batalha.",
    details: {
      universo: "Dragon Ball",
      poder: "Lendário Super Saiyajin, poder crescente",
      status: "Ativo - Guerreiro Saiyajin",
      estreia: 1993,
      recompensa: "N/A",
      afinidade: "Fúria",
      nível: "S+",
    },
  },

  {
    id: 44,
    name: "Erza Scarlet",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Erza Scarlet-1.png",
    description:
      "Mago da Armadura da Fairy Tail, famosa por sua vasta coleção de armaduras mágicas e habilidades de requip.",
    details: {
      universo: "Fairy Tail",
      poder: "Requip - Armadura Mágica",
      status: "Ativo - Mago da Fairy Tail",
      estreia: 2009,
      recompensa: "N/A",
      afinidade: "Armamento",
      nível: "S",
    },
  },

  {
    id: 45,
    name: "Thragg",
    category: "Invencível",
    image: "img/Invencível/Thragg-3.png",
    description:
      "Líder supremo dos Viltrumitas e o guerreiro mais forte de sua espécie, determinado a restaurar o império Viltrumita.",
    details: {
      universo: "Invincible",
      poder: "Força Viltrumita, voo, durabilidade",
      status: "Derrotado",
      estreia: 2004,
      recompensa: "N/A",
      afinidade: "Dominação",
      nível: "S+",
    },
  },

  {
    id: 46,
    name: "Dio Brando",
    category: "jojo",
    image: "img/Jojo/Dio-1.png",
    description:
      "Vampiro imortal e usuário do Stand The World, principal antagonista das Partes 1 e 3 de JoJo's Bizarre Adventure.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand The World, vampirismo, congelamento",
      status: "Derrotado",
      estreia: 1987,
      recompensa: "N/A",
      afinidade: "Tempo",
      nível: "S+",
    },
  },

  {
    id: 47,
    name: "Jiren",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/Jiren-1.png",
    description:
      "Guerreiro do Universo 11 e membro do Pride Troopers, considerado o lutador mais forte entre todos os universos antes do Torneio do Poder.",
    details: {
      universo: "Dragon Ball Super",
      poder: "Puro poder, Meditação",
      status: "Ativo - Pride Trooper",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Poder Puro",
      nível: "S+",
    },
  },

  {
    id: 48,
    name: "Akainu",
    category: "One-Piece",
    image: "img/One-Piece/akainu-1.png",
    description:
      "Almirante da Marinha e posteriormente Almirante-da-Frota, usuário da Akuma no Mi Magu Magu que lhe concede poderes de magma.",
    details: {
      universo: "One Piece",
      poder: "Magu Magu no Mi (Fruta do Magma)",
      status: "Ativo - Almirante-da-Frota",
      estreia: 1999,
      recompensa: "N/A",
      afinidade: "Magma",
      nível: "S+",
    },
  },

  {
    id: 49,
    name: "Yhwach",
    category: "Bleach",
    image: "img/Bleach/yhwach-1.png",
    description:
      "Rei dos Quincy e principal antagonista de Bleach, com a habilidade de ver e alterar todos os futuros possíveis.",
    details: {
      universo: "Bleach",
      poder: "The Almighty, absorção de poderes",
      status: "Derrotado/Selado",
      estreia: 2012,
      recompensa: "N/A",
      afinidade: "Futuro",
      nível: "S+",
    },
  },

  {
    id: 50,
    name: "Kanon de Gêmeos",
    category: "Os Zavaleiros do Zodíaco",
    image: "img/Os-Cavaleiros-do-Zodíaco/kanon-1.png",
    description:
      "Cavaleiro de Ouro de Gêmeos, irmão gêmeo de Saga que inicialmente serve como antagonista mas posteriormente se redime.",
    details: {
      universo: "Saint Seiya",
      poder: "Outra Dimensão, Explosão Galáctica",
      status: "Redimido",
      estreia: 1988,
      recompensa: "N/A",
      afinidade: "Redenção",
      nível: "S",
    },
  },

  {
    id: 51,
    name: "Malenia, A Lâmina de Miquella",
    category: "souls",
    image: "img/souls/Malenia-3.png",
    description:
      "Guerreira mais poderosa de Elden Ring, irmã gêmea de Miquella e portadora da Podridão Escarlate que nunca conheceu a derrota.",
    details: {
      universo: "Elden Ring",
      poder: "Podridão Escarlate, espada protética, habilidades aquáticas",
      status: "Derrotada/Chefe",
      estreia: 2022,
      recompensa: "N/A",
      afinidade: "Podridão",
      nível: "S+",
    },
  },

  {
    id: 52,
    name: "A - Quarto Raikage",
    category: "Naruto",
    image: "img/Naruto/Raikage-1.png",
    description:
      "Quarto Raikage da Vila da Nuvem, conhecido por sua velocidade e força incomparáveis, além de sua liderança firme.",
    details: {
      universo: "Naruto",
      poder: "Estilo de Relâmpago, força física",
      status: "Ativo - Raikage",
      estreia: 2008,
      recompensa: "N/A",
      afinidade: "Relâmpago",
      nível: "S",
    },
  },

  {
    id: 53,
    name: "Gajeel Redfox",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Gajeel Redfox-1.png",
    description:
      "Mago do Ferro Dragon Slayer da Fairy Tail, conhecido por sua personalidade rude e habilidades de manipulação de metal.",
    details: {
      universo: "Fairy Tail",
      poder: "Magia de Dragon Slayer do Ferro",
      status: "Ativo - Mago da Fairy Tail",
      estreia: 2009,
      recompensa: "N/A",
      afinidade: "Ferro",
      nível: "S",
    },
  },

  {
    id: 54,
    name: "Corvus",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Corvus-1.png",
    description:
      "Personagem do universo de Gachiakuta, possuindo habilidades únicas adaptadas ao ambiente desolador do mundo da série.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades específicas do mundo",
      status: "Ativo",
      estreia: 2022,
      recompensa: "N/A",
      afinidade: "Adaptação",
      nível: "B+",
    },
  },

  {
    id: 55,
    name: "Toji Fushiguro",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/fushiguro toji-2.png",
    description:
      "O Assassino Sem Energia Amaldiçoada, conhecido como 'O Exterminador de Feiticeiros' por sua capacidade de anular técnicas de detecção de energia amaldiçoada.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Corpo celestial, arsenal de armas amaldiçoadas",
      status: "Falecido",
      estreia: 2018,
      recompensa: "N/A",
      afinidade: "Física",
      nível: "S",
    },
  },

  {
    id: 56,
    name: "Gon Freecss",
    category: "HXH",
    image: "img/hxh/Gon-1.png",
    description:
      "Protagonista de Hunter x Hunter, um jovem determinado a se tornar um Hunter como seu pai e descobrir os segredos do mundo.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen (Reforço), Jajanken",
      status: "Ativo - Hunter",
      estreia: 1998,
      recompensa: "N/A",
      afinidade: "Determinação",
      nível: "S (pico)",
    },
  },

  {
    id: 57,
    name: "Ogun Montgomery",
    category: "Fire Force",
    image: "img/Fire Force/Ogun Montgomery-1.png",
    description:
      "Membro da 4ª Companhia do Corpo de Bombeiros Especiais, usuário da terceira geração de poderes pirocinéticos com foco em armas.",
    details: {
      universo: "Fire Force",
      poder: "Manipulação de metal quente, criação de armas",
      status: "Ativo - Bombeiro Especial",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Metal",
      nível: "A+",
    },
  },

  {
    id: 58,
    name: "Raiden Tameemon",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Raiden-1.png",
    description:
      "Lutador de sumô lendário representando a humanidade no Ragnarok, conhecido por sua força bruta e técnicas de sumô aprimoradas.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Técnicas de sumô, força sobre-humana",
      status: "Participante do Ragnarok",
      estreia: 2021,
      recompensa: "N/A",
      afinidade: "Força Bruta",
      nível: "S",
    },
  },

  {
    id: 59,
    name: "Garou",
    category: "One Punch Man",
    image: "img/One-Punch-Man/Garou-2.png",
    description:
      "O Herói Caçador, um discípulo das artes marciais que busca se tornar o monstro perfeito para derrotar todos os heróis.",
    details: {
      universo: "One Punch Man",
      poder: "Estilo de Luta Monstro, adaptação em batalha",
      status: "Reabilitado",
      estreia: 2012,
      recompensa: "N/A",
      afinidade: "Artes Marciais",
      nível: "S+",
    },
  },

  {
    id: 60,
    name: "Omni-Man",
    category: "Invencível",
    image: "img/Invencível/omni man-1.png",
    description:
      "Pai de Mark Grayson (Invincible), um Viltrumita enviado à Terra para preparar o planeta para a conquista Viltrumita.",
    details: {
      universo: "Invincible",
      poder: "Força Viltrumita, voo, durabilidade",
      status: "Redimido/Exilado",
      estreia: 2003,
      recompensa: "N/A",
      afinidade: "Viltrum",
      nível: "S+",
    },
  },

  {
    id: 61,
    name: "Soul of Cinder",
    category: "souls",
    image: "img/souls/Soul of Cinder-1.png",
    description:
      "Manifestação física de todos os Lordes das Cinzas que já ligaram a Primeira Chama, chefe final de Dark Souls III.",
    details: {
      universo: "Dark Souls III",
      poder: "Multiplas armas e estilos de luta, magia de chama",
      status: "Chefe Final",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Chama",
      nível: "S+",
    },
  },

  {
    id: 62,
    name: "Escanor",
    category: "Nanatsu",
    image: "img/Taizai/escanor-2.png",
    description:
      "O Leão do Orgulho dos Sete Pecados Capitais, cujo poder aumenta drasticamente ao meio-dia, tornando-o invencível sob o sol.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Sunshine, força crescente com o sol",
      status: "Falecido",
      estreia: 2014,
      recompensa: "N/A",
      afinidade: "Sol",
      nível: "S+ (ao meio-dia)",
    },
  },

  {
    id: 63,
    name: "Naruto Uzumaki",
    category: "Naruto",
    image: "img/Naruto/naruto-1.png",
    description:
      "Sétimo Hokage da Vila da Folha, portador do Chakra da Raposa de Nove Caudas e salvador do Mundo Shinobi.",
    details: {
      universo: "Naruto",
      poder: "Modo Sábio dos Seis Caminhos, Kurama, Rasengan",
      status: "Ativo - Hokage",
      estreia: 1999,
      recompensa: "N/A",
      afinidade: "Vento",
      nível: "S+",
    },
  },

  {
    id: 64,
    name: "Edward Newgate - Barba Branca",
    category: "One-Piece",
    image: "img/One-Piece/barba branca-1.png",
    description:
      "Conhecido como 'O Homem Mais Forte do Mundo' e 'O Pirata Mais Próximo do One Piece', capitão dos Piratas do Barba Branca.",
    details: {
      universo: "One Piece",
      poder: "Gura Gura no Mi (Fruta do Terremoto), Haki",
      status: "Falecido",
      estreia: 1997,
      recompensa: "฿5,046,000,000",
      afinidade: "Terremoto",
      nível: "S+",
    },
  },

  {
    id: 65,
    name: "Irene Belserion",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Irene Belserion-1.png",
    description:
      "Rainha das Dragões, uma das fundadoras da guilda Fairy Tail e uma das magas mais poderosas da história, mãe de Erza Scarlet.",
    details: {
      universo: "Fairy Tail",
      poder: "Alto Encantamento, Magia de Dragon Slayer",
      status: "Falecida",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Encantamento",
      nível: "S+",
    },
  },

  {
    id: 66,
    name: "Tomura Shigaraki",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Tomura Shigaraki-1.png",
    description:
      "Líder da Liga dos Vilões e sucessor de All For One, possuindo a capacidade de desintegrar qualquer coisa que toque.",
    details: {
      universo: "My Hero Academia",
      poder: "Decay (Desintegração), All For One",
      status: "Ativo - Líder da Liga",
      estreia: 2015,
      recompensa: "¥N/A",
      afinidade: "Destruição",
      nível: "S+",
    },
  },

  {
    id: 67,
    name: "Johnny Joestar",
    category: "jojo",
    image: "img/Jojo/Johnny Joestar-1.png",
    description:
      "Protagonista da Parte 7: Steel Ball Run, um jóquei paraplégico que desenvolve o Stand Tusk durante a corrida transcontinental.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand Tusk, Técnica da Roda",
      status: "Ativo - Jóquei",
      estreia: 2004,
      recompensa: "N/A",
      afinidade: "Rotação",
      nível: "S",
    },
  },

  {
    id: 68,
    name: "Guita",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Guita-1.png",
    description:
      "Personagem do mundo distópico de Gachiakuta, possuindo habilidades adaptadas ao ambiente hostil e sistema de castas da série.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades específicas do mundo",
      status: "Ativo",
      estreia: 2022,
      recompensa: "N/A",
      afinidade: "Sobrevivência",
      nível: "B",
    },
  },

  {
    id: 69,
    name: "Maki Zenin",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Maki-1.png",
    description:
      "Feiticeira jujutsu que, após um ritual, obtém um corpo celestial sem energia amaldiçoada, tornando-se igual a Toji Fushiguro.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Corpo celestial, percepção aprimorada",
      status: "Ativo - Feiticeira",
      estreia: 2018,
      recompensa: "N/A",
      afinidade: "Física",
      nível: "S",
    },
  },

  {
    id: 70,
    name: "Ikki de Fênix",
    category: "Os Zavaleiros do Zodíaco",
    image: "img/Os-Cavaleiros-do-Zodíaco/Ikki-1.png",
    description:
      "Cavaleiro de Bronze de Fênix, conhecido por renascer mais forte após cada derrota e por sua capacidade de ilusões.",
    details: {
      universo: "Saint Seiya",
      poder: "Ilusões, renascimento, Fênix Genma Ken",
      status: "Ativo - Cavaleiro de Bronze",
      estreia: 1986,
      recompensa: "N/A",
      afinidade: "Fogo/Renascimento",
      nível: "S+",
    },
  },

  {
    id: 71,
    name: "Saitama",
    category: "One Punch Man",
    image: "img/One-Punch-Man/Saitama-1.png",
    description:
      "Herói por Hobby da Classe B, capaz de derrotar qualquer oponente com um único soco após treinamento intenso que removeu seus limites.",
    details: {
      universo: "One Punch Man",
      poder: "Força infinita, velocidade, invulnerabilidade",
      status: "Ativo - Herói",
      estreia: 2009,
      recompensa: "N/A",
      afinidade: "Quebra de Limites",
      nível: "EX",
    },
  },

  {
    id: 72,
    name: "Apolo",
    category: "Shuumatsu",
    image: "img/Shuumatsu/apolo-1.png",
    description:
      "Deus grego do sol, música, poesia e profecia, representante dos deuses no Ragnarok com habilidades relacionadas à luz e beleza.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Manipulação de luz, profecia, arco solar",
      status: "Participante do Ragnarok",
      estreia: 2023,
      recompensa: "N/A",
      afinidade: "Luz",
      nível: "S+",
    },
  },

  {
    id: 73,
    name: "Ambessa Medarda",
    category: "League of Legend",
    image: "img/lol/Ambessa-1.png",
    description:
      "Matriarca da casa Medarda e uma das figuras mais temidas de Noxus, conhecida por sua força brutal e táticas militares implacáveis.",
    details: {
      universo: "League of Legends/Arcane",
      poder: "Força, liderança, estratégia militar",
      status: "Ativa - Matriarca",
      estreia: 2021,
      recompensa: "N/A",
      afinidade: "Guerra",
      nível: "A+",
    },
  },

  {
    id: 74,
    name: "Pain/Nagato",
    category: "Naruto",
    image: "img/Naruto/Pain-1.png",
    description:
      "Líder da Akatsuki e usuário do Rinnegan, capaz de controlar seis corpos diferentes com habilidades únicas e realizar técnicas divinas.",
    details: {
      universo: "Naruto",
      poder: "Rinnegan, Seis Caminhos da Dor",
      status: "Falecido",
      estreia: 2005,
      recompensa: "N/A",
      afinidade: "Todos os elementos",
      nível: "S+",
    },
  },

  {
    id: 75,
    name: "Kashimo Hajime",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/hajime-1.png",
    description:
      "Feiticeiro jujutsu da Era de Ouro conhecido como 'Deus do Relâmpago', que aguardou séculos para lutar contra Sukuna.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Técnica amaldiçoada: eletricidade",
      status: "Falecido",
      estreia: 2021,
      recompensa: "N/A",
      afinidade: "Relâmpago",
      nível: "S",
    },
  },

  {
    id: 76,
    name: "Meliodas",
    category: "Nanatsu",
    image: "img/Taizai/Meliodas-1.png",
    description:
      "Líder dos Sete Pecados Capitais e portador do Pecado da Ira, filho do Rei Demônio e antigo líder dos Dez Mandamentos.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Poder Demoniaco, Full Counter",
      status: "Ativo - Rei de Liones",
      estreia: 2012,
      recompensa: "N/A",
      afinidade: "Trevas",
      nível: "S+",
    },
  },

  {
    id: 77,
    name: "Shoto Todoroki",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Todoroki shoto-1.png",
    description:
      "Herói em treinamento da U.A. High School, possuindo a habilidade Quirk de gerar gelo pelo lado direito e fogo pelo lado esquerdo.",
    details: {
      universo: "My Hero Academia",
      poder: "Half-Cold Half-Hot (Meio-Frio Meio-Quente)",
      status: "Ativo - Estudante",
      estreia: 2014,
      recompensa: "N/A",
      afinidade: "Gelo/Fogo",
      nível: "A+",
    },
  },

  {
    id: 78,
    name: "Kaido",
    category: "One-Piece",
    image: "img/One-Piece/Kaido-1.png",
    description:
      "Governador-Geral das Feras e um dos Quatro Imperadores, conhecido como 'A Criatura Mais Forte do Mundo' e usuário da Uo Uo no Mi.",
    details: {
      universo: "One Piece",
      poder: "Uo Uo no Mi, Modelo: Dragão Azul, Haki",
      status: "Derrotado",
      estreia: 2011,
      recompensa: "฿4,611,100,000",
      afinidade: "Dragão",
      nível: "S+",
    },
  },

  {
    id: 79,
    name: "Satan Soul",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Satan Soul-1.png",
    description:
      "Forma de Take Over utilizada por Mirajane Strauss que lhe permite assumir características e poderes de demônios.",
    details: {
      universo: "Fairy Tail",
      poder: "Take Over: Satan Soul",
      status: "Ativo - Mago da Fairy Tail",
      estreia: 2009,
      recompensa: "N/A",
      afinidade: "Demônio",
      nível: "S",
    },
  },

  {
    id: 80,
    name: "Darkeater Midir",
    category: "souls",
    image: "img/souls/Darkeater Midir-1.png",
    description:
      "Dragão ancestral que consome a escuridão, um dos últimos descendentes dos dragões imortais e chefe opcional em Dark Souls III.",
    details: {
      universo: "Dark Souls III",
      poder: "Fogo negro, resistência extrema",
      status: "Chefe",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Escuridão",
      nível: "S+",
    },
  },

  {
    id: 81,
    name: "Ken Ryuguji (Draken)",
    category: "tokyo",
    image: "img/tokyo-revengers/draken-2.png",
    description:
      "Vice-Líder dos Tokyo Manji Gang, conhecido por sua habilidade de combate excepcional e lealdade inabalável a Mikey.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Combate corpo a corpo, liderança",
      status: "Falecido",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Lealdade",
      nível: "A+",
    },
  },

  {
    id: 82,
    name: "Hisoka Morow",
    category: "HXH",
    image: "img/hxh/Hisoka-1.png",
    description:
      "Mago e Hunter que vive para encontrar oponentes dignos, usuário das habilidades Bungee Gum e Texture Surprise.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Bungee Gum, Texture Surprise",
      status: "Ativo - Hunter",
      estreia: 1998,
      recompensa: "N/A",
      afinidade: "Batalha",
      nível: "S",
    },
  },

  {
    id: 83,
    name: "Zodyl",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Zodyl-1.png",
    description:
      "Personagem do universo de Gachiakuta, envolvido nas complexas relações de poder e sobrevivência do mundo da série.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades específicas do mundo",
      status: "Ativo",
      estreia: 2022,
      recompensa: "N/A",
      afinidade: "Sobrevivência",
      nível: "B",
    },
  },

  {
    id: 84,
    name: "Kojiro Sasaki",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Kojiro Sasaki-1.png",
    description:
      "Conhecido como 'O Maior Espadachim' e 'Vagabundo', representa a humanidade no Ragnarok com sua técnica de milhares de estilos de espada.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Tsubame Gaeshi, análise de estilos",
      status: "Participante do Ragnarok",
      estreia: 2021,
      recompensa: "N/A",
      afinidade: "Espada",
      nível: "S",
    },
  },

  {
    id: 85,
    name: "Son Gohan",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/gohan-1.png",
    description:
      "Filho mais velho de Goku, possuindo potencial latente maior que qualquer outro Saiyajin e múltiplas transformações únicas.",
    details: {
      universo: "Dragon Ball",
      poder: "Potential Unleashed, Ultimate Form",
      status: "Ativo - Estudioso/Guerreiro",
      estreia: 1989,
      recompensa: "N/A",
      afinidade: "Potencial",
      nível: "S+",
    },
  },

  {
    id: 86,
    name: "Allen, o Alienígena",
    category: "Invencível",
    image: "img/Invencível/allen-1.png",
    description:
      "Aliens da Coalizão que auxiliam os Viltrumitas, conhecidos por sua fisiologia única e habilidades tecnológicas avançadas.",
    details: {
      universo: "Invincible",
      poder: "Tecnologia alienígena, adaptação",
      status: "Ativo - Membro da Coalizão",
      estreia: 2004,
      recompensa: "N/A",
      afinidade: "Tecnologia",
      nível: "B+",
    },
  },

  {
    id: 87,
    name: "Gyro Zeppeli",
    category: "jojo",
    image: "img/Jojo/gyro-zeppeli-1.png",
    description:
      "Cavaleiro de Steel Ball Run e mestre da Técnica da Roda, que compete na corrida para salvar seu país e ensina Johnny Joestar.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Steel Balls, Técnica da Roda",
      status: "Falecido",
      estreia: 2004,
      recompensa: "N/A",
      afinidade: "Rotação",
      nível: "A+",
    },
  },

  {
    id: 88,
    name: "Sasori",
    category: "Naruto",
    image: "img/Naruto/Sasori-1.png",
    description:
      "Membro da Akatsuki conhecido como 'Sasori da Areia Vermelha', mestre de marionetes que transforma corpos em armas.",
    details: {
      universo: "Naruto",
      poder: "Marionetes, venenos, corpo de marionete",
      status: "Derrotado",
      estreia: 2005,
      recompensa: "N/A",
      afinidade: "Marionetes",
      nível: "S",
    },
  },

  {
    id: 89,
    name: "K'Sante",
    category: "League of Legend",
    image: "img/lol/k'sante-1.png",
    description:
      "O Orgulho de Nazumah, um caçador determinado a proteger sua cidade dos monstros do deserto com suas armas únicas.",
    details: {
      universo: "League of Legends",
      poder: "Armas Ntofos, transformação",
      status: "Ativo - Protetor",
      estreia: 2022,
      recompensa: "N/A",
      afinidade: "Terra",
      nível: "A+",
    },
  },

  {
    id: 90,
    name: "Suguru Geto",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/suguru geto-1.png",
    description:
      "Ex-feiticeiro de grau especial e antigo melhor amigo de Satoru Gojo, que se tornou um malditor após absorver milhares de maldições.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Manipulação de Maldições",
      status: "Falecido (corpo usurpado)",
      estreia: 2018,
      recompensa: "N/A",
      afinidade: "Maldição",
      nível: "S",
    },
  },

  {
    id: 91,
    name: "Shanks",
    category: "One-Piece",
    image: "img/One-Piece/Shaks-1.png",
    description:
      "Imperador do Mar e capitão dos Piratas do Ruivo, conhecido por sua influência no mundo e por ser o homem que inspirou Luffy.",
    details: {
      universo: "One Piece",
      poder: "Haki do Conquistador avançado, espadachim",
      status: "Ativo - Imperador",
      estreia: 1997,
      recompensa: "฿4,048,900,000",
      afinidade: "Haki",
      nível: "S+",
    },
  },

  {
    id: 92,
    name: "Fumikage Tokoyami",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Fumikage Tokoyami-1.png",
    description:
      "Herói em treinamento da U.A. com a Quirk Dark Shadow, uma sombra viva que se fortalece na escuridão e enfraquece na luz.",
    details: {
      universo: "My Hero Academia",
      poder: "Dark Shadow (Sombra Escura)",
      status: "Ativo - Estudante",
      estreia: 2014,
      recompensa: "N/A",
      afinidade: "Sombra",
      nível: "A+",
    },
  },

  {
    id: 93,
    name: "Manjiro Sano (Mikey)",
    category: "tokyo",
    image: "img/tokyo-revengers/Makey-2.png",
    description:
      "Líder dos Tokyo Manji Gang, conhecido por sua velocidade e poder de chutes devastadores, além de sua personalidade carismática.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Velocidade extrema, chutes poderosos",
      status: "Ativo - Líder",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Liderança",
      nível: "S",
    },
  },

  {
    id: 94,
    name: "Meruem",
    category: "HXH",
    image: "img/hxh/Meruem-1.png",
    description:
      "Rei das Formigas Quimera, criatura com inteligência e poder incomparáveis que evolui rapidamente ao absorver habilidades de outros.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Força, velocidade, absorção de habilidades",
      status: "Falecido",
      estreia: 2011,
      recompensa: "N/A",
      afinidade: "Evolução",
      nível: "S+",
    },
  },

  {
    id: 95,
    name: "Simo Häyhä",
    category: "Shuumatsu",
    image: "img/Shuumatsu/simo häyhä-1.png",
    description:
      "Conhecido como 'A Morte Branca', atirador de elite finlandês que representa a humanidade no Ragnarok com suas habilidades de sniper.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Precisão extrema, camuflagem, resistência",
      status: "Participante do Ragnarok",
      estreia: 2023,
      recompensa: "N/A",
      afinidade: "Precisão",
      nível: "S",
    },
  },

  {
    id: 96,
    name: "Aoi Todo",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Aoi todo-2.png",
    description:
      "Feiticeiro de grau 1 semi que luta com seu irmão adotivo, possuindo a técnica Boogie Woogie para trocar posições com alvos.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Boogie Woogie, força física",
      status: "Incapacitado",
      estreia: 2018,
      recompensa: "N/A",
      afinidade: "Troca",
      nível: "A+",
    },
  },

  {
    id: 97,
    name: "Leonardo Burns",
    category: "Fire Force",
    image: "img/Fire Force/Leonardo Burns-1.png",
    description:
      "Capitão da 1ª Companhia do Corpo de Bombeiros Especiais, conhecido por sua ética de trabalho rigorosa e poderosas chamas azuis.",
    details: {
      universo: "Fire Force",
      poder: "Chamas azuis, controle preciso",
      status: "Ativo - Capitão",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Chama Azul",
      nível: "S",
    },
  },

  {
    id: 98,
    name: "Bartholomew Kuma",
    category: "One-Piece",
    image: "img/One-Piece/Kuma-1.png",
    description:
      "O Tirano, antigo Shichibukai e revolucionário que foi completamente transformado em ciborgue pelo Governo Mundial.",
    details: {
      universo: "One Piece",
      poder: "Ursus Ursus no Mi, Paw-Paw Fruit, ciborgue",
      status: "Transformado em arma",
      estreia: 2007,
      recompensa: "฿296,000,000",
      afinidade: "Repulsão",
      nível: "S",
    },
  },

  {
    id: 99,
    name: "Kazutora Hanemiya",
    category: "tokyo",
    image: "img/tokyo-revengers/Kazutora Hanemiya-1.png",
    description:
      "Membro dos Tokyo Manji Gang com um passado traumático, conhecido por sua instabilidade emocional e lealdade conflituosa.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Combate agressivo, instabilidade",
      status: "Preso/Redimido",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Conflito",
      nível: "B+",
    },
  },

  {
    id: 100,
    name: "Baby",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/baby-1.png",
    description:
      "Parasita Tuffle criado pelo Dr. Myuu para vingar os Tuffles, capaz de possuir corpos e absorver energia de Saiyajins.",
    details: {
      universo: "Dragon Ball GT",
      poder: "Possessão, absorção de energia",
      status: "Derrotado",
      estreia: 1997,
      recompensa: "N/A",
      afinidade: "Parasita",
      nível: "S",
    },
  },

  {
    id: 101,
    name: "Overhaul (Kai Chisaki)",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/overhaul-1.png",
    description:
      "Líder da yakuza Shie Hassaikai e portador da Quirk Overhaul, permitindo-lhe desmontar e reconstruir matéria com um toque.",
    details: {
      universo: "My Hero Academia",
      poder: "Overhaul (Reconstrução)",
      status: "Preso",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Reconstrução",
      nível: "S",
    },
  },

  {
    id: 102,
    name: "Odin",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Odin-1.png",
    description:
      "Pai dos deuses nórdicos e governante de Asgard, representante dos deuses no Ragnarok com poder sobre o destino e conhecimento.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Poder divino, conhecimento, destino",
      status: "Participante do Ragnarok",
      estreia: 2023,
      recompensa: "N/A",
      afinidade: "Destino",
      nível: "S+",
    },
  },

  {
    id: 103,
    name: "Shisui Uchiha",
    category: "Naruto",
    image: "img/Naruto/Shisui-2.png",
    description:
      "Conhecido como 'Shisui, o Telepata', membro do clã Uchiha com o Mangekyō Sharingan mais avançado e a técnica Kotoamatsukami.",
    details: {
      universo: "Naruto",
      poder: "Kotoamatsukami, Body Flicker",
      status: "Falecido",
      estreia: 2005,
      recompensa: "N/A",
      afinidade: "Ilusão",
      nível: "S",
    },
  },

  {
    id: 104,
    name: "Chandler",
    category: "Nanatsu",
    image: "img/Taizai/chandler-1.png",
    description:
      "O Mago Supremo e servo do Rei Demônio, mestre de magia negra e professor de Meliodas durante sua juventude.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Magia negra, transformação",
      status: "Derrotado",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Magia Negra",
      nível: "S",
    },
  },

  {
    id: 105,
    name: "Takashi Mitsuya (Angry)",
    category: "tokyo",
    image: "img/tokyo-revengers/Angry-1.png",
    description:
      "Membro dos Tokyo Manji Gang conhecido como 'Angry', irmão gêmeo de Smiley e vice-capitão da primeira divisão.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Combate calmo e calculista",
      status: "Ativo - Vice-Capitão",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Controle",
      nível: "B+",
    },
  },

  {
    id: 106,
    name: "Monkey D. Garp",
    category: "One-Piece",
    image: "img/One-Piece/Garp-1.png",
    description:
      "O Herói da Marinha, avô de Luffy e pai de Dragon, conhecido por sua força lendária que rivaliza com a dos Piratas da Época de Ouro.",
    details: {
      universo: "One Piece",
      poder: "Haki avançado, força física",
      status: "Ativo - Vice-Almirante",
      estreia: 1998,
      recompensa: "N/A",
      afinidade: "Justiça",
      nível: "S+",
    },
  },

  {
    id: 107,
    name: "Derieri",
    category: "Nanatsu",
    image: "img/Taizai/Derieri-1.png",
    description:
      "Comandante dos Dez Mandamentos portadora do Mandamento da Piedade, especialista em combate corpo a corpo com ataques combinados.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Combo Star, Mandamento da Piedade",
      status: "Falecida",
      estreia: 2014,
      recompensa: "N/A",
      afinidade: "Combos",
      nível: "S",
    },
  },

  {
    id: 108,
    name: "Tengen Uzui",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/uzui tengen-1.png",
    description:
      "Pilar do Som e ex-ninja, conhecido por suas técnicas musicais de combate e por ser o mais 'extravagante' dos Pilares.",
    details: {
      universo: "Demon Slayer",
      poder: "Respiração do Som, resistência a veneno",
      status: "Aposentado",
      estreia: 2019,
      recompensa: "N/A",
      afinidade: "Som",
      nível: "S",
    },
  },

  {
    id: 109,
    name: "Dabi (Toya Todoroki)",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Dabi-1.png",
    description:
      "Vilão da Liga dos Vilões e filho mais velho de Endeavor, portador da Quirk Cremation que produz chamas azuis superiores.",
    details: {
      universo: "My Hero Academia",
      poder: "Cremation (Chamas Azuis)",
      status: "Ativo - Vilão",
      estreia: 2016,
      recompensa: "¥N/A",
      afinidade: "Chama Azul",
      nível: "S",
    },
  },

  {
    id: 110,
    name: "Messmer, o Empalador",
    category: "souls",
    image: "img/souls/Messmer-1.png",
    description:
      "Filho da Deusa Marika e comandante da Expedição ao continente sombrio, portador de chamas sombrias e habilidades de empalamento.",
    details: {
      universo: "Elden Ring: Shadow of the Erdtree",
      poder: "Chamas sombrias, empalamento, serpente",
      status: "Chefe",
      estreia: 2024,
      recompensa: "N/A",
      afinidade: "Chama Sombria",
      nível: "S+",
    },
  },

  {
    id: 111,
    name: "Neferpitou",
    category: "HXH",
    image: "img/hxh/Neferpitou-2.png",
    description:
      "Guarda Real das Formigas Quimera especializada em habilidades de médico e combate, possuindo o Nen mais refinado entre os Guardas.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Doctor Blythe, Terpsichora",
      status: "Derrotado",
      estreia: 2011,
      recompensa: "N/A",
      afinidade: "Nen",
      nível: "S",
    },
  },

  {
    id: 112,
    name: "Jiraiya",
    category: "Naruto",
    image: "img/Naruto/jiraiya-1.png",
    description:
      "Um dos Três Sannin Lendários, mestre de Naruto e autor da série 'Icha Icha', especialista em invocações e técnicas de selamento.",
    details: {
      universo: "Naruto",
      poder: "Modo Sábio, invocações, Rasengan",
      status: "Falecido",
      estreia: 1999,
      recompensa: "N/A",
      afinidade: "Sapos",
      nível: "S+",
    },
  },

  {
    id: 113,
    name: "Frieza",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/Freeza-1.png",
    description:
      "Imperador do universo e arqui-inimigo dos Saiyajins, possuindo múltiplas transformações e poderes cósmicos.",
    details: {
      universo: "Dragon Ball",
      poder: "Formas de transformação, poderes cósmicos",
      status: "Ativo - Imperador",
      estreia: 1990,
      recompensa: "N/A",
      afinidade: "Destruição",
      nível: "S+",
    },
  },

  {
    id: 114,
    name: "Roy Mustang",
    category: "Fullmetal",
    image: "img/Fullmetal-Alchemist/Roy Mustang-1.png",
    description:
      "Alquimista da Chama e coronel do exército de Amestris, capaz de criar explosões controladas com seus dedos estalados.",
    details: {
      universo: "Fullmetal Alchemist",
      poder: "Alquimia da Chama",
      status: "Ativo - General",
      estreia: 2001,
      recompensa: "N/A",
      afinidade: "Fogo",
      nível: "S",
    },
  },

  {
    id: 115,
    name: "Silvers Rayleigh",
    category: "One-Piece",
    image: "img/One-Piece/Rayleigh-1.png",
    description:
      "O Rei das Trevas e primeiro imediato dos Piratas do Roger, mentor de Luffy no uso do Haki e um dos homens mais fortes do mundo.",
    details: {
      universo: "One Piece",
      poder: "Haki avançado, espadachim",
      status: "Aposentado",
      estreia: 1999,
      recompensa: "Desconhecida",
      afinidade: "Haki",
      nível: "S+",
    },
  },

  {
    id: 116,
    name: "Endeavor (Enji Todoroki)",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Endeavor-1.png",
    description:
      "Herói profissional Número 1 e pai de Shoto Todoroki, portador da poderosa Quirk Hellflame que produz chamas extremamente quentes.",
    details: {
      universo: "My Hero Academia",
      poder: "Hellflame (Chamas do Inferno)",
      status: "Ativo - Herói Número 1",
      estreia: 2014,
      recompensa: "N/A",
      afinidade: "Chama",
      nível: "S+",
    },
  },

  {
    id: 117,
    name: "Leônidas I",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Leonidas-1.png",
    description:
      "Rei de Esparta e representante da humanidade no Ragnarok, conhecido por sua bravura na Batalha das Termópilas e espírito indomável.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Força espartana, escudo e lança",
      status: "Participante do Ragnarok",
      estreia: 2023,
      recompensa: "N/A",
      afinidade: "Bravura",
      nível: "S",
    },
  },

  {
    id: 118,
    name: "Monspiet",
    category: "Nanatsu",
    image: "img/Taizai/Monspiet-1.png",
    description:
      "Comandante dos Dez Mandamentos portador do Mandamento da Fé, companheiro de Derieri e especialista em chamas mágicas.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Chamas mágicas, Mandamento da Fé",
      status: "Falecido",
      estreia: 2014,
      recompensa: "N/A",
      afinidade: "Chama",
      nível: "S",
    },
  },

  {
    id: 119,
    name: "Taiju Shiba",
    category: "tokyo",
    image: "img/tokyo-revengers/taiju shiba-2.png",
    description:
      "Líder da Black Dragons e irmão mais velho de Yuzuha, conhecido por sua força sobre-humana e personalidade extremamente violenta.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Força sobre-humana, resistência",
      status: "Redimido",
      estreia: 2018,
      recompensa: "N/A",
      afinidade: "Força Bruta",
      nível: "A+",
    },
  },

  {
    id: 120,
    name: "Kakashi Hatake",
    category: "Naruto",
    image: "img/Naruto/kakashi-1.png",
    description:
      "O Ninja Copiador, Sexto Hokage e líder do Time 7, famoso por seu Sharingan e pela técnica Chidori.",
    details: {
      universo: "Naruto",
      poder: "Sharingan, Chidori, mil técnicas",
      status: "Aposentado - Ex-Hokage",
      estreia: 1999,
      recompensa: "N/A",
      afinidade: "Cópia",
      nível: "S+",
    },
  },

  {
    id: 121,
    name: "DONQUIXOTE DOFLAMINGO",
    category: "One-Piece",
    image: "img/One-Piece/Domflamingo-1.png",
    description:
      "Ex-Shichibukai conhecido como o Coringa do submundo, manipulador cruel e extremamente poderoso.",
    details: {
      universo: "One Piece",
      poder: "Ito Ito no Mi (Fruta do Fio)",
      status: "Vilão - Ex-Shichibukai",
      estreia: 1997,
      transformação: "Despertar da Akuma no Mi",
      técnica: "Bird Cage",
      nível: "SS",
    },
  },

  {
    id: 122,
    name: "MEREOLEONA VERMILLION",
    category: "Black Clover",
    image: "img/Black Clover/Mereoleona-1.png",
    description:
      "Guerreira feroz e capitã lendária, conhecida por sua força absurda e domínio absoluto da magia de fogo.",
    details: {
      universo: "Black Clover",
      poder: "Magia de Fogo",
      status: "Heroína - Capitã dos Touros Carmesim",
      estreia: 2017,
      transformação: "Mana Zone",
      técnica: "Calidos Brachium",
      nível: "SSS",
    },
  },

  {
    id: 123,
    name: "BUDDHA",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Buddha-1.png",
    description:
      "Deus imprevisível que desafia os céus e luta pela humanidade usando sua iluminação divina.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Iluminação Divina",
      status: "Deus - Traidor dos Deuses",
      estreia: 2018,
      transformação: "Caminhos dos Seis Reinos",
      técnica: "Visão do Futuro",
      nível: "SSS",
    },
  },

  {
    id: 124,
    name: "BALERION",
    category: "Game of Thrones",
    image: "Game-of-Thrones/balerion-1.png",
    description:
      "O maior e mais temido dragão da história de Westeros, montaria de Aegon, o Conquistador.",
    details: {
      universo: "Game of Thrones",
      poder: "Fogo Dracônico Ancestral",
      status: "Lendário - Dragão de Aegon",
      estreia: 1996,
      transformação: "Forma Anciã",
      técnica: "Chamas Negras",
      nível: "SSS",
    },
  },

  {
    id: 125,
    name: "KLED",
    category: "League of Legend",
    image: "lol/Kled-1.png",
    description:
      "Yordle completamente insano, guerreiro de Noxus que luta montado em Skaarl, defendendo seu território com violência extrema.",
    details: {
      universo: "League of Legends",
      poder: "Fúria Noxiana",
      status: "Anti-herói - Guerreiro de Noxus",
      estreia: 2016,
      transformação: "Montado em Skaarl",
      técnica: "CHAAAARGE!!!",
      nível: "SS",
    },
  },

  {
    id: 126,
    name: "JASPER",
    category: "Steven Universo",
    image: "img/Steven-Universo/Jasper-1.png",
    description:
      "Gema guerreira extremamente forte e orgulhosa, criada para combate e leal ao Império Gem.",
    details: {
      universo: "Steven Universe",
      poder: "Força Gem Superior",
      status: "Anti-heroína - Guerreira Gem",
      estreia: 2015,
      transformação: "Forma Corrompida",
      técnica: "Golpe Gem Brutal",
      nível: "SS",
    },
  },

  {
    id: 127,
    name: "PORTGAS D. ACE",
    category: "One-Piece",
    image: "One-Piece/Ace-1.png",
    description:
      "Comandante da 2ª Divisão dos Piratas do Barba Branca, usuário do poder do fogo e irmão de Luffy.",
    details: {
      universo: "One Piece",
      poder: "Mera Mera no Mi (Fruta do Fogo)",
      status: "Herói - Pirata do Barba Branca",
      estreia: 1999,
      transformação: "Forma Logia",
      técnica: "Hiken",
      nível: "SS",
    },
  },

  {
    id: 128,
    name: "MAHORAGA",
    category: "jujutsu kaisen",
    image: "Jujutsu/mahoraga-1.png",
    description:
      "Shikigami supremo da Técnica das Dez Sombras, capaz de se adaptar a qualquer ataque.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Adaptação Absoluta",
      status: "Invocação - Shikigami",
      estreia: 2018,
      transformação: "Roda da Adaptação",
      técnica: "Adaptação Infinita",
      nível: "SSS",
    },
  },

  {
    id: 129,
    name: "ITACHI UCHIHA",
    category: "Naruto",
    image: "Naruto/itachi-1.png",
    description:
      "Gênio do clã Uchiha que sacrificou tudo para proteger Konoha, mestre absoluto do Sharingan.",
    details: {
      universo: "Naruto",
      poder: "Sharingan e Mangekyō Sharingan",
      status: "Anti-herói - Ex-nukenin",
      estreia: 1999,
      transformação: "Susanoo",
      técnica: "Tsukuyomi",
      nível: "SSS",
    },
  },

  {
    id: 130,
    name: "DAENERYS TARGARYEN",
    category: "Game of Thrones",
    image: "Game-of-Thrones/daenerys-targaryen-1.png",
    description:
      "A Mãe dos Dragões, herdeira da Casa Targaryen, determinada a reconquistar o Trono de Ferro.",
    details: {
      universo: "Game of Thrones",
      poder: "Controle de Dragões",
      status: "Heroína - Rainha Targaryen",
      estreia: 1996,
      transformação: "Mãe dos Dragões",
      técnica: "Dracarys",
      nível: "SS",
    },
  },

  {
    id: 131,
    name: "YAMI SUKEHIRO",
    category: "Black Clover",
    image: "Black Clover/Yami-Sukehiro-1.png",
    description:
      "Capitão dos Touros Negros, conhecido por seu poder de Magia de Trevas e personalidade dura, mas justa.",
    details: {
      universo: "Black Clover",
      poder: "Magia das Trevas",
      status: "Herói - Capitão dos Touros Negros",
      estreia: 2015,
      transformação: "Mana Zone",
      técnica: "Dark Cloaked Dimension Slash",
      nível: "SSS",
    },
  },

  {
    id: 132,
    name: "MIRIO TOGATA",
    category: "Boku no Hero",
    image: "Boku-no-Hero/mirio-togata-1.png",
    description:
      "Herói de Classe 1-A da U.A., conhecido como Lemillion, possui a Quirk de Passagem e espírito incansável.",
    details: {
      universo: "Boku no Hero Academia",
      poder: "Quirk: Passagem",
      status: "Herói - Classe 1-A",
      estreia: 2014,
      transformação: "Lemillion",
      técnica: "Golpe de Alta Velocidade",
      nível: "SS",
    },
  },

  {
    id: 133,
    name: "DENJI",
    category: "Chainsaw Man",
    image: "Chainsaw-Man/denji-1.png",
    description:
      "Jovem caçador de demônios que se fundiu com Pochita, tornando-se o Chainsaw Man, lutando por sobrevivência e sonhos simples.",
    details: {
      universo: "Chainsaw Man",
      poder: "Fusão com Pochita",
      status: "Anti-herói - Caçador de Demônios",
      estreia: 2018,
      transformação: "Chainsaw Man",
      técnica: "Chainsaw Punch",
      nível: "SS",
    },
  },

  {
    id: 134,
    name: "ROSE QUARTZO",
    category: "Steven Universo",
    image: "Steven-Universo/Rose-Quartzo-1.png",
    description:
      "Líder das Crystal Gems, protetora da Terra, conhecida por sua compaixão e poder incomparável.",
    details: {
      universo: "Steven Universe",
      poder: "Força Gem e Cura",
      status: "Heroína - Líder das Crystal Gems",
      estreia: 2013,
      transformação: "Forma Completa",
      técnica: "Escudo de Rosa",
      nível: "SSS",
    },
  },

  {
    id: 135,
    name: "JINBE",
    category: "One-Piece",
    image: "One-Piece/jinbe-1.png",
    description:
      "Membro dos Piratas do Chapéu de Palha e mestre em Fish-Man Karate, leal e protetor de seus amigos.",
    details: {
      universo: "One Piece",
      poder: "Fish-Man Karate",
      status: "Herói - Pirata do Chapéu de Palha",
      estreia: 1999,
      transformação: "Forma de Combate Total",
      técnica: "Gyojin Ogi: Hajiki",
      nível: "SS",
    },
  },

  {
    id: 136,
    name: "CHOSO",
    category: "jujutsu kaisen",
    image: "Jujutsu/Choso-1.png",
    description:
      "Irmão mais velho das Maldições Cursed Womb, especialista em manipulação de sangue e combate letal.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Manipulação de Sangue",
      status: "Anti-herói - Maldição",
      estreia: 2018,
      transformação: "Forma de Maldição Pura",
      técnica: "Cursed Blood Technique",
      nível: "SS",
    },
  },

  {
    id: 137,
    name: "SION",
    category: "League of Legend",
    image: "lol/Sion.png",
    description:
      "Guerreiro morto-vivo de Noxus, um colosso de força bruta que avança sem medo da morte.",
    details: {
      universo: "League of Legends",
      poder: "Força Bruta / Imortalidade",
      status: "Anti-herói - Morto-vivo",
      estreia: 2009,
      transformação: "Forma Enfurecida Pós-Morte",
      técnica: "Glory in Death",
      nível: "SS",
    },
  },

  {
    id: 138,
    name: "SIMON BELMONT",
    category: "Castlevania",
    image: "castlevania/simon-belmont-1.png",
    description:
      "Caçador de vampiros do clã Belmont, lendário por enfrentar Drácula usando o chicote sagrado Vampire Killer.",
    details: {
      universo: "Castlevania",
      poder: "Armas Sagradas / Combate Corpo a Corpo",
      status: "Herói - Humano",
      estreia: 1986,
      transformação: "Modo de Caçador Lendário",
      técnica: "Vampire Killer",
      nível: "S",
    },
  },

  {
    id: 139,
    name: "GRIMMJOW JAEGERJAQUEZ",
    category: "Bleach",
    image: "Bleach/Grimmjow-Jaegerjaquez-1.png",
    description:
      "Arrancar extremamente agressivo e orgulhoso, o Sexto Espada busca batalhas intensas para provar sua força absoluta.",
    details: {
      universo: "Bleach",
      poder: "Reiatsu / Combate Espiritual",
      status: "Anti-herói - Arrancar",
      estreia: 2006,
      transformação: "Ressurrección: Pantera",
      técnica: "Desgarrón",
      nível: "SS",
    },
  },

  {
    id: 140,
    name: "ZENON ZOGRATIS",
    category: "Black Clover",
    image: "Black Clover/Zenon-Zogratis-1.png",
    description:
      "Membro da Tríade Negra e hospedeiro de um demônio de alto nível, Zenon luta com frieza absoluta usando magia de ossos e poder demoníaco.",
    details: {
      universo: "Black Clover",
      poder: "Magia de Ossos / Poder Demoníaco",
      status: "Vilão - Humano Possuído",
      estreia: 2019,
      transformação: "Forma de União Demoníaca",
      técnica: "Spatial Domination",
      nível: "SS",
    },
  },

  {
    id: 141,
    name: "SAKATA KINTOKI",
    category: "Shuumatsu",
    image: "Shuumatsu/Sakata-Kintoki-1.png",
    description:
      "Herói lendário do folclore japonês e um dos campeões da humanidade, possuidor de força sobre-humana e espírito indomável.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Força Sobre-humana / Combate Divino",
      status: "Herói - Humano",
      estreia: 2021,
      transformação: "Despertar do Herói Dourado",
      técnica: "Machado Celestial",
      nível: "SS",
    },
  },

  {
    id: 142,
    name: "SANEMI SHINAZUGAWA",
    category: "Kimetsu no Yaiba",
    image: "kimetsu/Sanemi-Shinazugawa-1.png",
    description:
      "Pilar do Vento da Corporação dos Caçadores de Demônios, conhecido por sua personalidade agressiva e técnica mortal com a Respiração do Vento.",
    details: {
      universo: "Kimetsu no Yaiba",
      poder: "Respiração do Vento",
      status: "Herói - Humano",
      estreia: 2017,
      transformação: "Marca do Caçador",
      técnica: "Respiração do Vento – Primeira Forma",
      nível: "S",
    },
  },

  {
    id: 143,
    name: "KOZUKI ODEN",
    category: "One-Piece",
    image: "One-Piece/oden-1.png",
    description:
      "Samurai lendário de Wano, portador de uma força monstruosa e de uma vontade indomável capaz de ferir até imperadores dos mares.",
    details: {
      universo: "One Piece",
      poder: "Haki / Estilo de Duas Espadas",
      status: "Herói - Humano",
      estreia: 1999,
      transformação: "Vontade Ardente de Wano",
      técnica: "Togen Totsuka",
      nível: "SS",
    },
  },

  {
    id: 144,
    name: "SANDOR CLEGANE",
    category: "Game of Thrones",
    image: "Game-of-Thrones/perdigueiro-1.png",
    description:
      "Conhecido como O Perdigueiro, Sandor Clegane é um guerreiro brutal e pragmático, temido por sua ferocidade e desprezo pela cavalaria.",
    details: {
      universo: "Game of Thrones",
      poder: "Combate Corpo a Corpo / Espadas",
      status: "Anti-herói - Humano",
      estreia: 2011,
      transformação: "Modo Fúria de Batalha",
      técnica: "Combate Brutal",
      nível: "A",
    },
  },

  {
    id: 145,
    name: "GRIFFITH",
    category: "Berserk",
    image: "Berserk/Griffith-1.png",
    description:
      "Antigo líder do Bando do Falcão, cuja ambição o levou a um sacrifício impiedoso e à ascensão como uma entidade demoníaca além da humanidade.",
    details: {
      universo: "Berserk",
      poder: "Carisma / Poder Demoníaco",
      status: "Vilão - Membro da Mão de Deus",
      estreia: 1989,
      transformação: "Femto",
      técnica: "Manipulação do Destino",
      nível: "SSS",
    },
  },

  {
    id: 146,
    name: "GARNET",
    category: "Steven Universo",
    image: "Steven-Universo/garnet-1.png",
    description:
      "Líder calma e poderosa das Crystal Gems, Garnet combina força, visão futura e habilidades de fusão para proteger a Terra.",
    details: {
      universo: "Steven Universo",
      poder: "Força Sobre-humana / Visão do Futuro",
      status: "Heroína - Gem",
      estreia: 2013,
      transformação: "Fusão Garnet",
      técnica: "Punch Preciso / Combate Estratégico",
      nível: "S",
    },
  },

  {
    id: 147,
    name: "ULQUIORRA CIFER",
    category: "Bleach",
    image: "Bleach/Ulquiorra-Cifer-1.png",
    description:
      "Quarta Espada do exército de Arrancares de Aizen, conhecido por sua frieza absoluta e força devastadora, capaz de regenerar ferimentos rapidamente.",
    details: {
      universo: "Bleach",
      poder: "Reiatsu / Regeneração / Combate Espiritual",
      status: "Vilão - Arrancar",
      estreia: 2006,
      transformação: "Segunda Forma Resurrección: Murciélago",
      técnica: "Lanza del Relámpago",
      nível: "SS",
    },
  },

  {
    id: 148,
    name: "SHOTA AIZAWA",
    category: "Boku no Hero",
    image: "Boku-no-Hero/Shota-Aizawa-1.png",
    description:
      "Professor da U.A. e herói profissional conhecido como Eraser Head, capaz de anular os poderes de seus oponentes com um simples olhar.",
    details: {
      universo: "Boku no Hero Academia",
      poder: "Anulação de Quirks",
      status: "Herói - Humano",
      estreia: 2014,
      transformação: "Modo Combate Heróico",
      técnica: "Eraser Head Quirk Nullification",
      nível: "S",
    },
  },

  {
    id: 149,
    name: "FUEGOLEON VERMILLION",
    category: "Black Clover",
    image: "Black Clover/Fuegoleon-Vermillion-1.png",
    description:
      "Capitão do Crimson Lion Kingdom e usuário de magia de fogo, Fuegoleon é um líder nobre e estrategista incansável que inspira seus aliados.",
    details: {
      universo: "Black Clover",
      poder: "Magia de Fogo / Liderança Estratégica",
      status: "Herói - Humano",
      estreia: 2015,
      transformação: "Modo Rei do Fogo",
      técnica: "Crimson Blaze",
      nível: "SS",
    },
  },

  {
    id: 150,
    name: "GOL D. ROGER",
    category: "One-Piece",
    image: "One-Piece/Roger-1.png",
    description:
      "Conhecido como o Rei dos Piratas, Gol D. Roger conquistou todos os mares e deixou um legado lendário que inspirou gerações de aventureiros.",
    details: {
      universo: "One Piece",
      poder: "Haki / Espadas / Liderança",
      status: "Herói - Humano",
      estreia: 1997,
      transformação: "Rei dos Piratas",
      técnica: "Golpe de Espada e Haki Supremo",
      nível: "SSS",
    },
  },

  {
    id: 151,
    name: "MAKIMA",
    category: "Chainsaw Man",
    image: "Chainsaw-Man/Makima-1.png",
    description:
      "Enigmática e manipuladora, Makima é uma das figuras mais poderosas do mundo de Chainsaw Man, controlando demônios e humanos com inteligência e força devastadora.",
    details: {
      universo: "Chainsaw Man",
      poder: "Controle Mental / Manipulação de Demônios",
      status: "Vilã - Humana Possuída",
      estreia: 2018,
      transformação: "Forma Suprema",
      técnica: "Domínio Absoluto",
      nível: "SSS",
    },
  },

  {
    id: 152,
    name: "Godspeed",
    category: "Flash",
    image: "Flash/godspeed-1.png",
    description:
      "Godspeed é um dos velocistas mais perigosos do universo Flash. Obcecado por velocidade e justiça distorcida, ele utiliza a Força de Aceleração para alcançar níveis absurdos de rapidez, sendo capaz de enfrentar o próprio Flash em combate direto.",
    details: {
      universo: "DC Comics / The Flash",
      papel: "Antagonista",
      status: "Humano / Velocista",
      poder: "Super Velocidade / Manipulação da Força de Aceleração",
      estreia: 2016,
      técnica: "Speed Force Lightning / Velocidade Relâmpago",
      nível: "SS",
    },
  },

  {
    id: 153,
    name: "MOHG, LORD OF BLOOD",
    category: "souls",
    image: "souls/Mohg-1.png",
    description:
      "Mohg, Lord of Blood é um semideus corrompido pelo Sangue Amaldiçoado, governando nas sombras enquanto busca instaurar uma dinastia profana através de rituais sangrentos e poder arcano.",
    details: {
      universo: "Elden Ring",
      poder: "Manipulação de Sangue / Magia Profana",
      status: "Vilão - Semideus",
      estreia: 2022,
      transformação: "Forma do Senhor do Sangue",
      técnica: "Ritual da Dinastia de Sangue",
      nível: "SSS",
    },
  },

  {
    id: 154,
    name: "AKUMA",
    category: "Street-Fighter",
    image: "Street-Fighter/Akuma-1.png",
    description:
      "Akuma é um mestre supremo do Satsui no Hado, buscando apenas a força absoluta. Seu poder destrutivo e sua filosofia de combate o colocam além dos limites da humanidade.",
    details: {
      universo: "Street Fighter",
      poder: "Satsui no Hado / Energia Demoníaca",
      status: "Anti-herói - Humano Corrompido",
      estreia: 1994,
      transformação: "Shin Akuma",
      técnica: "Shun Goku Satsu",
      nível: "SSS",
    },
  },

  {
    id: 155,
    name: "MAITO GAI",
    category: "Naruto",
    image: "Naruto/Maito-gai-1.png",
    description:
      "Maito Gai é um mestre do taijutsu e símbolo do esforço absoluto. Incapaz de usar ninjutsu ou genjutsu, ele supera todos os limites do corpo humano através de treino extremo e pura determinação.",
    details: {
      universo: "Naruto",
      poder: "Taijutsu / Oito Portões",
      status: "Herói - Ninja",
      estreia: 2002,
      transformação: "Oitavo Portão: Portão da Morte",
      técnica: "Yagai (Chute do Elefante Noturno)",
      nível: "SSS",
    },
  },
  {
    id: 156,
    name: "JOE YABUKI",
    category: "Ashita-no-Joe",
    image: "img/Ashita-no-Joe/Joe-4.png",
    description:
      "Joe Yabuki é um boxeador indomável que luta movido por orgulho, liberdade e autodestruição...",
    details: {
      universo: "Ashita no Joe",
      poder: "Força Física / Resistência Extrema",
      status: "Anti-herói - Humano",
      estreia: 1968,
      técnica: "Cross Counter",
      nível: "S",
    },
  },
  {
    id: 157,
    name: "LEON",
    category: "Pokemon",
    image: "Pokemon/Leon-1.png",
    description:
      "Leon é o Campeão da região de Galar, conhecido por sua incrível habilidade em batalhas Pokémon e por nunca perder uma partida. Carismático e confiante, inspira treinadores a superarem seus limites.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia / Liderança em Batalha",
      status: "Herói - Humano",
      estreia: 2019,
      transformação: "Gigantamax",
      técnica: "Final Showdown",
      nível: "SS",
    },
  },

  {
    id: 158,
    name: "MIYAMOTO MUSASHI",
    category: "Vagabond",
    image: "Vagabond/miyamoto-3.png",
    description:
      "Miyamoto Musashi é um lendário samurai em busca da perfeição na arte da espada. Determinado, introspectivo e implacável, ele enfrenta qualquer oponente para dominar a verdadeira essência do combate.",
    details: {
      universo: "Vagabond",
      poder: "Kenjutsu / Estratégia de Combate",
      status: "Herói - Humano",
      estreia: 1998,
      transformação: "Forma Mestre da Espada",
      técnica: "Dois Céus, Uma Espada",
      nível: "SS",
    },
  },

  {
    id: 159,
    name: "CHARLOTTE KATAKURI",
    category: "One-Piece",
    image: "One-Piece/Katakuri-1.png",
    description:
      "Katakuri é o filho mais poderoso da família Charlotte, conhecido por sua força brutal, velocidade extrema e habilidade única de prever movimentos com o Mochi Mochi no Mi. Um adversário quase imbatível em combate direto.",
    details: {
      universo: "One Piece",
      poder: "Mochi Mochi no Mi / Haki da Observação Avançado",
      status: "Anti-herói - Humano",
      estreia: 2016,
      transformação: "Forma Total Mochi",
      técnica: "Rengoku Mochi",
      nível: "SSS",
    },
  },

  {
    id: 160,
    name: "KENSHIN HIMURA",
    category: "Samurai-X",
    image: "Samurai-X/samurai x-1.png",
    description:
      "Kenshin Himura é um lendário samurai errante, conhecido como Battousai, o Retalhador. Movido por redenção, ele busca proteger os inocentes enquanto luta para superar seu passado violento.",
    details: {
      universo: "Samurai X",
      poder: "Kenjutsu / Battoujutsu",
      status: "Herói - Humano",
      estreia: 1996,
      transformação: "Forma Battousai",
      técnica: "Amakakeru Ryu no Hirameki",
      nível: "SS",
    },
  },

  {
    id: 161,
    name: "SOLARIA BUTTERFLY",
    category: "Star-vs.",
    image: "img/star-vs/solaria-1.png",
    description:
      "Solaria Butterfly é uma princesa guerreira do reino mágico de Mewni, poderosa e estratégica. Conhecida por sua liderança e habilidade em magia de batalha, ela protege seu reino com coragem e determinação.",
    details: {
      universo: "Star vs. the Forces of Evil",
      poder: "Magia de Mewni / Estratégia de Combate",
      status: "Heróina - Mewman",
      estreia: 2015,
      transformação: "Forma de Poder Real",
      técnica: "Feitiço de Combate Supremo",
      nível: "SS",
    },
  },

  {
    id: 162,
    name: "RADAGON OF THE GOLDEN ORDER",
    category: "souls",
    image: "souls/Radagon of the Golden Order-1.png",
    description:
      "Radagon é um semideus lendário de Elden Ring, governando com força absoluta e domínio divino. Sua presença impõe ordem e destruição, combinando poder físico e magia sagrada.",
    details: {
      universo: "Elden Ring",
      poder: "Magia Sagrada / Força Divina",
      status: "Vilão - Semideus",
      estreia: 2022,
      transformação: "Forma Radagon Supremo",
      técnica: "Golpe da Ordem Dourada",
      nível: "SSS",
    },
  },

  {
    id: 163,
    name: "TERCEIRO RAIKAGE",
    category: "Naruto",
    image: "Naruto/Raikage-2.png",
    description:
      "O Terceiro Raikage é conhecido por sua velocidade e força sobre-humanas, além de seu corpo extremamente resistente. Líder respeitado de Kumogakure, ele combina poder físico com uma determinação inabalável.",
    details: {
      universo: "Naruto",
      poder: "Força Sobre-Humana / Velocidade Extrema",
      status: "Herói - Ninja",
      estreia: 2002,
      transformação: "Forma Raikage Suprema",
      técnica: "Lariat Supremo",
      nível: "SSS",
    },
  },

  {
    id: 164,
    name: "TITÃ DE ATAQUE",
    category: "Shingeki-no-Kyojin",
    image: "Shingeki-no-Kyojin/titan-de-ataque-1.png",
    description:
      "O Titã de Ataque é uma poderosa entidade capaz de lutar com agilidade e força sobre-humana. Ele é o símbolo da resistência da humanidade, passando de um portador para outro ao longo da história.",
    details: {
      universo: "Shingeki no Kyojin",
      poder: "Força Titanica / Agilidade Avançada",
      status: "Herói - Titan Shifter",
      estreia: 2009,
      transformação: "Forma Completa do Titã de Ataque",
      técnica: "Ruptura Titanica",
      nível: "SSS",
    },
  },

  {
    id: 165,
    name: "Shinso",
    category: "Pokemon",
    image: "Pokemon/Shinso-2.png",
    description:
      "Shinso é o principal vilão da hack room Pokémon Blue Stars 3 Forces. Frio, estratégico e manipulador, ele atua nos bastidores controlando eventos, treinadores e Pokémon para impor sua própria visão de poder e domínio.",
    details: {
      universo: "Pokémon Blue Stars 3 Forces",
      papel: "Vilão Principal",
      alinhamento: "Antagonista",
      especialidade: "Manipulação Psíquica / Controle Mental",
      status: "Ativo",
      estreia: "Hack Room Blue Stars 3 Forces",
      nível: "SS",
    },
  },

  {
    id: 166,
    name: "Marshall D. Teach",
    category: "One-Piece",
    image: "One-Piece/Marshall-D-Teach-1.png",
    description:
      "Marshall D. Teach, conhecido como Barba Negra, é um dos antagonistas mais perigosos de One Piece. Extremamente ambicioso e imprevisível, ele busca o poder absoluto, sendo o único conhecido a possuir duas Akuma no Mi.",
    details: {
      universo: "One Piece",
      papel: "Vilão",
      status: "Imperador dos Mares (Yonkou)",
      akumaNoMi: "Yami Yami no Mi / Gura Gura no Mi",
      especialidade: "Domínio da Escuridão / Destruição em Massa",
      estreia: 1999,
      nível: "SSS",
    },
  },

  {
    id: 167,
    name: "Ryu",
    category: "Street-Fighter",
    image: "Street-Fighter/Ryu-1.png",
    description:
      "Ryu é um dos maiores guerreiros do mundo em Street Fighter. Dedicado ao caminho do combate e ao aperfeiçoamento pessoal, ele busca constantemente superar seus próprios limites, lutando entre o equilíbrio e o poder do Satsui no Hado.",
    details: {
      universo: "Street Fighter",
      papel: "Protagonista",
      estiloDeLuta: "Ansatsuken",
      poder: "Ki / Artes Marciais Avançadas",
      status: "Guerreiro Errante",
      estreia: 1987,
      técnica: "Hadouken / Shoryuken / Tatsumaki Senpukyaku",
      nível: "SS",
    },
  },

  {
    id: 168,
    name: "Kim Kaphwan",
    category: "The King of Fighters",
    image: "The-King-of-Fighters/Kim.png",
    description:
      "Kim Kaphwan é um mestre de Taekwondo e um dos personagens mais respeitados de The King of Fighters. Famoso por sua disciplina, senso de justiça e técnicas rápidas de chutes, ele busca sempre ensinar aos outros a importância da honra e da moralidade.",
    details: {
      universo: "The King of Fighters",
      papel: "Herói",
      estiloDeLuta: "Taekwondo",
      poder: "Agilidade / Força Física / Técnicas de Chute",
      status: "Lutador Justo",
      estreia: 1992,
      técnica: "Hien Shippuu Kyaku / Hou'ou Kyaku",
      nível: "SS",
    },
  },

  {
    id: 169,
    name: "Hades",
    category: "Os Zavaleiros do Zodíaco",
    image: "Os-Cavaleiros-do-Zodíaco/hades-2.png",
    description:
      "Hades é o deus do submundo em Os Cavaleiros do Zodíaco, governando o mundo dos mortos com poderes divinos. Frio, calculista e implacável, ele busca reorganizar o mundo segundo sua própria visão, sendo uma ameaça suprema para os Cavaleiros de Athena.",
    details: {
      universo: "Os Cavaleiros do Zodíaco",
      papel: "Vilão Supremo",
      status: "Deidade / Antagonista",
      poder: "Imortalidade / Controle do Submundo / Cosmo Divino",
      estreia: 1986,
      técnica: "Seiten Heaven / Hades’ Judgment",
      nível: "SSS",
    },
  },

  {
    id: 170,
    name: "TITÃ BLINDADO",
    category: "Shingeki-no-Kyojin",
    image: "Shingeki-no-Kyojin/titan-blindado-1.png",
    description:
      "O Titã Blindado é uma das armas mais destrutivas do universo de Shingeki no Kyojin. Conhecido por sua couraça praticamente impenetrável, ele é especializado em investidas frontais, atuando como uma verdadeira fortaleza em movimento.",
    details: {
      universo: "Shingeki no Kyojin",
      portador: "Reiner Braun",
      poder: "Defesa Absoluta / Força Titanica",
      status: "Anti-Herói - Titan Shifter",
      estreia: 2009,
      transformação: "Forma Blindada do Titã",
      técnica: "Investida Blindada",
      nível: "SS",
    },
  },

  {
    id: 171,
    name: "Marco Diaz",
    category: "Star-vs.",
    image: "star-vs/marco-diaz-1.png",
    description:
      "Marco Diaz é o melhor amigo e aliado de Star Butterfly em Star vs. the Forces of Evil. Corajoso, leal e sempre racional, ele ajuda a enfrentar as forças do mal enquanto equilibra a vida escolar e aventuras interdimensionais.",
    details: {
      universo: "Star vs. the Forces of Evil",
      papel: "Herói / Aliado",
      status: "Humano / Lutador Treinado",
      poder: "Habilidades de Combate / Estratégia",
      estreia: 2015,
      técnica: "Martial Arts / Estratégias Táticas",
      nível: "A",
    },
  },

  {
    id: 172,
    name: "Godfrey, First Elden Lord",
    category: "souls",
    image: "souls/Godfrey-First-Elden-Lord-1.png",
    description:
      "Godfrey, o Primeiro Elden Lord, é um lendário guerreiro de Elden Ring, conhecido por sua força titânica e habilidades de combate excepcionais. Inicialmente herói e defensor do reino, sua presença impõe respeito absoluto e temor aos inimigos.",
    details: {
      universo: "Elden Ring",
      papel: "Elden Lord / Antagonista opcional",
      status: "Imortal / Guerreiro Supremo",
      poder: "Força Sobre-Humana / Habilidade com Armas",
      estreia: 2022,
      técnica: "Terra Crush / Godslayer Strike",
      nível: "SSS",
    },
  },

  {
    id: 173,
    name: "Sengoku",
    category: "One-Piece",
    image: "One-Piece/Sengoku-1.png",
    description:
      "Sengoku, o antigo Almirante de Frota da Marinha em One Piece, é um estrategista brilhante e um líder respeitado. Possui uma presença imponente e o poder da Hito Hito no Mi, Modelo: Daibutsu, que lhe permite se transformar em um gigante Buda dourado durante a batalha.",
    details: {
      universo: "One Piece",
      papel: "Herói / Marinha",
      status: "Ex-Almirante de Frota",
      akumaNoMi: "Hito Hito no Mi, Modelo: Daibutsu",
      poder: "Força Titânica / Estratégia Militar",
      estreia: 1997,
      técnica: "Gigante Buda / Golpes de Impacto",
      nível: "SSS",
    },
  },

  {
    id: 174,
    name: "Rugal Bernstein",
    category: "The King of Fighters",
    image: "The-King-of-Fighters/Rugal-2.png",
    description:
      "Rugal Bernstein é um dos vilões mais icônicos da franquia The King of Fighters. Extremamente poderoso e cruel, ele busca adversários fortes para derrotar e transformar em troféus de pedra, demonstrando sua obsessão por força absoluta.",
    details: {
      universo: "The King of Fighters",
      papel: "Vilão",
      status: "Humano Aprimorado",
      poder: "Força Sobre-Humana / Energia Sombria",
      estreia: 1994,
      técnica: "Genocide Cutter / Kaiser Wave / Gigantic Pressure",
      nível: "SS",
    },
  },

  {
    id: 175,
    name: "Gregor Clegane",
    category: "Game of Thrones",
    image: "Game-of-Thrones/montanha-1.png",
    description:
      "Gregor Clegane, conhecido como A Montanha, é um dos guerreiros mais temidos de Game of Thrones. Brutal, impiedoso e de força física monstruosa, ele serve fielmente à Casa Lannister, espalhando terror tanto no campo de batalha quanto fora dele.",
    details: {
      universo: "Game of Thrones",
      papel: "Antagonista",
      status: "Humano / Cavaleiro",
      poder: "Força Física Extrema / Resistência Anormal",
      estreia: 2011,
      técnica: "Combate Brutal / Uso de Espada Pesada",
      nível: "A+",
    },
  },

  {
    id: 176,
    name: "Titã Bestial",
    category: "Shingeki-no-Kyojin",
    image: "Shingeki-no-Kyojin/titan-beast-1.png",
    description:
      "O Titã Bestial é um dos Nove Titãs de Shingeki no Kyojin, conhecido por sua aparência animalesca e por sua capacidade devastadora de ataques à distância. Extremamente inteligente entre os titãs, ele utiliza arremessos de precisão mortal para dizimar exércitos inteiros.",
    details: {
      universo: "Shingeki no Kyojin",
      papel: "Antagonista",
      status: "Titã Metamorfo",
      poder: "Força Titânica / Arremesso de Longa Distância",
      estreia: 2013,
      técnica: "Arremesso Devastador / Comando de Titãs",
      nível: "S",
    },
  },

  {
    id: 177,
    name: "Chun-Li",
    category: "Street-Fighter",
    image: "Street-Fighter/chun-li-1.png",
    description:
      "Chun-Li é uma das lutadoras mais icônicas de Street Fighter. Agente da Interpol e mestre em artes marciais chinesas, ela é conhecida por sua velocidade extrema, chutes poderosos e forte senso de justiça, lutando incansavelmente contra o crime organizado.",
    details: {
      universo: "Street Fighter",
      papel: "Heroína",
      status: "Humana / Agente da Interpol",
      poder: "Velocidade Extrema / Técnicas de Chute",
      estreia: 1991,
      técnica: "Hyakuretsukyaku / Kikoken / Spinning Bird Kick",
      nível: "A+",
    },
  },

  {
    id: 179,
    name: "Sasaki Kojirō",
    category: "Vagabond",
    image: "Vagabond/sasaki-kojiro-1.png",
    description:
      "Sasaki Kojirō é um dos espadachins mais talentosos e trágicos de Vagabond. Surdo desde jovem, ele desenvolveu uma percepção única do mundo e um estilo de combate extremamente refinado, tornando-se um rival lendário no caminho da espada.",
    details: {
      universo: "Vagabond",
      papel: "Rival",
      status: "Humano / Espadachim",
      poder: "Habilidade Suprema com Espada / Instinto de Combate",
      estreia: 1998,
      técnica: "Cortes Precisos / Estilo Fluido de Espadas",
      nível: "A+",
    },
  },

  {
    id: 178,
    name: "VEGETA",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/vegeta-1.png",
    description:
      "Orgulhoso príncipe dos Saiyajins, Vegeta é um guerreiro extremamente poderoso que evolui constantemente, movido por rivalidade, honra e o desejo de superar seus próprios limites.",
    details: {
      universo: "Dragon Ball",
      poder: "Manipulação de Ki / Transformações Saiyajin",
      status: "Anti-herói - Saiyajin",
      estreia: 1988,
      transformação: "Super Saiyajin Blue",
      técnica: "Final Flash",
      nível: "SS",
    },
  },

  {
    id: 180,
    name: "Eclipsa Butterfly",
    category: "Star-vs.",
    image: "star-vs/Eclipsa-Butterfly-1.png",
    description:
      "Eclipsa Butterfly é uma das rainhas mais controversas do Reino de Mewni em Star vs. the Forces of Evil. Conhecida por sua magia extremamente poderosa e por desafiar tradições antigas, ela é uma personagem complexa, marcada por escolhas difíceis, amor proibido e um domínio mágico que ultrapassa limites morais.",
    details: {
      universo: "Star vs. the Forces of Evil",
      papel: "Anti-heroína",
      status: "Rainha / Usuária de Magia",
      poder: "Magia Negra Avançada / Feitiços de Alto Nível",
      estreia: 2017,
      técnica: "Feitiços Proibidos / Magia do Livro de Eclipsa",
      nível: "S",
    },
  },

  {
    id: 181,
    name: "Monkey D. Dragon",
    category: "One-Piece",
    image: "One-Piece/dragon-1.png",
    description:
      "Monkey D. Dragon é o líder do Exército Revolucionário e o homem mais procurado do mundo em One Piece. Extremamente enigmático, ele luta contra o Governo Mundial visando derrubar o sistema de opressão global. Sua presença impõe respeito absoluto, e seus poderes misteriosos sugerem um domínio avassalador sobre forças naturais.",
    details: {
      universo: "One Piece",
      papel: "Anti-herói",
      status: "Humano / Revolucionário",
      poder: "Manipulação de Fenômenos Naturais / Liderança Estratégica",
      estreia: 1997,
      técnica: "Habilidades Climáticas Desconhecidas",
      nível: "SSS",
    },
  },

  {
    id: 182,
    name: "Kiyotaka Ayanokōji",
    category: "Classroom-of-the-Elite",
    image: "classroom-of-the-elite/Kiyotaka-Ayanokōji-1.png",
    description:
      "Kiyotaka Ayanokōji é o protagonista de Classroom of the Elite, um estudante aparentemente comum da Classe D, mas que esconde uma mente genial moldada pelo rigoroso programa conhecido como White Room. Frio, calculista e estrategista excepcional, ele manipula situações e pessoas nos bastidores para alcançar seus objetivos sem chamar atenção.",
    details: {
      universo: "Classroom of the Elite",
      papel: "Anti-herói",
      status: "Humano / Estudante",
      poder: "Intelecto Supremo / Manipulação Estratégica",
      estreia: 2017,
      técnica: "Estratégia Psicológica / Combate Corporal Avançado",
      nível: "A+",
    },
  },

  {
    id: 183,
    name: "GILGAMESH",
    category: "Fate",
    image: "img/Fate/gilgamesh-1.png",
    description:
      "O Rei dos Heróis, possuidor do tesouro supremo Gate of Babylon e da poderosa espada Ea. Considerado o mais forte dos Servants.",
    details: {
      universo: "Fate",
      poder: "Gate of Babylon, Noble Phantasm Ea",
      status: "Servant - Rei dos Heróis",
      estreia: 2004,
      recompensa: "N/A",
      afinidade: "Tesouros Heróicos",
      nível: "SSS",
    },
  },

  {
    id: 184,
    name: "HIKIGAYA HACHIMAN",
    category: "OreGairu",
    image: "img/OreGairu/Hikigaya-Hachiman-1.png",
    description:
      "Protagonista cínico e observador de My Teen Romantic Comedy SNAFU, conhecido por seu monólogo interno afiado e abordagem pragmática para resolver problemas.",
    details: {
      universo: "My Teen Romantic Comedy SNAFU",
      poder: "Inteligência Observacional, Pensamento Lógico",
      status: "Estudante - Clube de Serviço",
      estreia: 2011,
      recompensa: "N/A",
      afinidade: "Solução de Problemas",
      nível: "B",
    },
  },

  {
    id: 185,
    name: "RED",
    category: "Pokemon",
    image: "img/Pokemon/Red.png",
    description:
      "O lendário treinador Pokémon de Kanto, primeiro campeão da Liga Pokémon e protagonista dos jogos originais. Conhecido por seu silêncio icônico e time poderoso.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia de Batalha, Vínculo com Pokémon",
      status: "Campeão da Liga Pokémon",
      estreia: 1996,
      recompensa: "N/A",
      afinidade: "Liderança Pokémon",
      nível: "S",
    },
  },

  {
    id: 186,
    name: "HOBBY",
    category: "Marvel-Comics",
    image: "img/Marvel-Comics/hobby-1.png",
    description:
      "Versão punk do Homem-Aranha de uma realidade alternativa, conhecido por sua atitude rebelde, estilo único e luta contra o sistema opressivo.",
    details: {
      universo: "Marvel Comics",
      poder: "Poderes de Aranha, Sentido Aranha, Agilidade Sobre-Humana",
      status: "Herói Alternativo - Spider-Verse",
      estreia: 2014,
      recompensa: "N/A",
      afinidade: "Rebeldia",
      nível: "A+",
    },
  },

  {
    id: 187,
    name: "GUNMAR",
    category: "Trollhunters",
    image: "img/Trollhunters/Gunmar-1.png",
    description:
      "O temível Troll Negro, antigo líder dos Gumm-Gumms e principal antagonista de Trollhunters. Conhecido por sua força colossal e desejo de dominar tanto o mundo dos trolls quanto o humano.",
    details: {
      universo: "Trollhunters",
      poder: "Força Sobre-Humana, Pele Indestrutível, Grito Sônico",
      status: "Vilão - Líder dos Gumm-Gumms",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Guerra",
      nível: "S",
    },
  },

  {
    id: 188, // Continuando a sequência
    name: "RYUEN KAKERU",
    category: "Classroom-of-the-Elite",
    image: "img/classroom-of-the-elite/ryuen-kakeru-1.png",
    description:
      "Líder agressivo e impiedoso da Classe C da Advanced Nurturing High School. Conhecido por sua abordagem violenta para resolver problemas e táticas de intimidação para alcançar objetivos.",
    details: {
      universo: "Classroom of the Elite",
      poder: "Intimidação, Liderança Autoritária, Combate Físico",
      status: "Estudante - Líder da Classe C",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Confronto",
      nível: "B+", // Nível mais baixo que Ayanokōji
    },
  },

  {
    id: 189, // Continuando a sequência
    name: "KORRA",
    category: "Avatar",
    image: "img/Avatar/korra-1.png",
    description:
      "A Avatar sucessora de Aang, nascida na Tribo da Água do Sul. Dominadora dos quatro elementos com personalidade forte e determinada, enfrentando desafios espirituais e políticos na República City.",
    details: {
      universo: "Avatar: The Legend of Korra",
      poder: "Dobra dos Quatro Elementos, Estado Avatar, Dobra de Metal",
      status: "Avatar Ativa - Protetora do Mundo",
      estreia: 2012,
      recompensa: "N/A",
      afinidade: "Água (elemento nativo)",
      nível: "S+", // Nível alto por ser Avatar
    },
  },

  {
    id: 190, // Continuando a sequência
    name: "ARTORIA PENDRAGON",
    category: "Fate",
    image: "img/Fate/Artoria-Pendragon-1.png",
    description:
      "Servant da classe Saber, a lendária Rei Artoria Pendragon do reino de Camelot. Portadora da espada sagrada Excalibur e detentora do Noble Phantasm mais puro, conhecida como a 'King of Knights'.",
    details: {
      universo: "Fate",
      poder: "Excalibur, Avalon, Instinto de Batalha",
      status: "Servant - Rei dos Cavaleiros",
      estreia: 2004,
      recompensa: "N/A",
      afinidade: "Cavaleirismo",
      nível: "SS", // Um nível abaixo de Gilgamesh (SSS)
    },
  },

  {
    id: 191, // Continuando a sequência
    name: "YUKINO YUKINOSHITA",
    category: "OreGairu",
    image: "img/OreGairu/Yukino-Yukinoshita-1.png",
    description:
      "Estudante modelo da escola Sobu High, conhecida por sua inteligência excepcional, personalidade fria e distante, e habilidades analíticas afiadas. Membro do Clube de Serviço.",
    details: {
      universo: "My Teen Romantic Comedy SNAFU",
      poder: "Inteligência Acadêmica, Habilidade Analítica",
      status: "Estudante - Clube de Serviço",
      estreia: 2011,
      recompensa: "N/A",
      afinidade: "Análise",
      nível: "B", // Mesmo nível que Hachiman (série slice of life)
    },
  },

  {
    id: 192,
    name: "JIM LAKE JR.",
    category: "Trollhunters",
    image: "img/Trollhunters/Jim-Lake Jr.-1.png",
    description:
      "O primeiro Trollhunter humano, escolhido pelo Amuleto de Daylight para proteger o mundo humano e troll de ameaças sobrenaturais. Estudante comum que se torna herói.",
    details: {
      universo: "Trollhunters",
      poder: "Armadura Amuleto, Combate com Espadas, Liderança",
      status: "Herói - Trollhunter",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Coragem",
      nível: "A+", // Nível médio-alto para protagonista
    },
  },

  // CHARLOTTE LINLIN (One Piece)
  {
    id: 193,
    name: "CHARLOTTE LINLIN",
    category: "One-Piece",
    image: "img/One-Piece/Charlotte-Linlin-1.png",
    description:
      "Uma das Yonko (Quatro Imperadores) do mar, conhecida como Big Mom. Líder da Família Charlotte e do país Totto Land, usuária da poderosa Soru Soru no Mi.",
    details: {
      universo: "One Piece",
      poder: "Soru Soru no Mi (Fruta da Alma), Haki Conquistador",
      status: "Imperatriz - Yonko",
      estreia: 2011,
      recompensa: "฿4,388,000,000",
      afinidade: "Alma",
      nível: "S+", // Nível de Yonko
    },
  },

  // TOPH BEIFONG (Avatar)
  {
    id: 194,
    name: "TOPH BEIFONG",
    category: "Avatar",
    image: "img/Avatar/Toph-Beifong-1.png",
    description:
      "A maior dobradora de terra da história, apesar de ser cega desde o nascimento. Desenvolveu a dobra de metal e é conhecida por sua personalidade forte e teimosa.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Terra, Dobra de Metal, Visão Sísmica",
      status: "Mestra de Dobra - Fundadora da Polícia de Republic City",
      estreia: 2006,
      recompensa: "N/A",
      afinidade: "Terra",
      nível: "S", // Nível alto como mestre lendária
    },
  },

  {
    id: 195, // Continuando a sequência
    name: "SAVITAR",
    category: "Flash",
    image: "img/Flash/savitar-1.png",
    description:
      "O autoproclamado 'Deus da Velocidade', uma versão futura e corrompida de Barry Allen que retorna ao passado para reescrever seu destino. O primeiro velocista a acessar a Força da Velocidade.",
    details: {
      universo: "DC Comics / The Flash",
      papel: "Antagonista Principal",
      status: "Velocista Corrompido / Barry Allen do Futuro",
      poder: "Força da Velocidade Avançada, Armadura Filosofal",
      estreia: 2016, // The Flash Temporada 3
      técnica: "Time Remnant, Armadura Filosofal",
      nível: "SSS", // Nível mais alto que Godspeed por ser "Deus da Velocidade"
    },
  },

  {
    id: 196,
    name: "ROCK LEE",
    category: "Naruto",
    image: "img/Naruto/rock-lee -1.png",
    description:
      "Ninja especializado exclusivamente em taijutsu, incapaz de usar ninjutsu ou genjutsu. Discípulo de Might Guy, conhecido por seu trabalho duro, espírito de nunca desistir e abertura dos Portões internos.",
    details: {
      universo: "Naruto",
      poder: "Taijutsu Supremo, Oito Portões",
      status: "Ninja de Konoha - Jounin",
      estreia: 2000,
      recompensa: "N/A",
      afinidade: "Esforço",
      nível: "S", // Nível alto quando abre os Portões
    },
  },

  // MAJIN BOO (Dragon Ball)
  {
    id: 197,
    name: "MAJIN BOO",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/majin-boo-1.png",
    description:
      "Entidade mágica criada pelo mago Bibidi há milhões de anos. Possui múltiplas formas com diferentes personalidades e poderes, incluindo habilidades de regeneração, absorção e transformação.",
    details: {
      universo: "Dragon Ball",
      poder: "Regeneração, Absorção, Transformação, Magia",
      status: "Antagonista - Entidade Mágica",
      estreia: 1994,
      transformação: "Multiple Forms (Fat Buu, Kid Buu, etc.)",
      técnica: "Absorção, Regeneração Instantânea",
      nível: "SSS", // Nível de vilão final do arco
    },
  },

  {
    id: 198, // Continuando a sequência
    name: "KAFKA HIBINO",
    category: "Kaiju-No-8", // Categoria específica
    image: "img/Kaiju/kafka-1.png",
    description:
      "Homem de 32 anos que trabalha em limpeza de kaijus e sonha em se juntar à Força de Defesa. Após ser infectado por um kaiju, ganha a habilidade de se transformar no poderoso Kaiju No. 8.",
    details: {
      universo: "Kaiju No. 8",
      poder: "Transformação em Kaiju, Força Sobre-Humana, Regeneração",
      status: "Recruta da Força de Defesa - Portador de Kaiju",
      estreia: 2020,
      recompensa: "N/A",
      afinidade: "Transformação",
      nível: "S+", // Nível alto por ser um kaiju poderoso
    },
  },

  // CYNTHIA (Pokémon)
  {
    id: 199,
    name: "CYNTHIA",
    category: "Pokemon",
    image: "img/Pokemon/cynthia-1.png",
    description:
      "A campeã da região de Sinnoh, conhecida como uma das treinadoras mais fortes do mundo Pokémon. Especialista em Pokémon do tipo Dragão e pesquisadora de mitologia.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia de Batalha, Conhecimento Mitológico",
      status: "Campeã - Pesquisadora",
      estreia: 2006,
      recompensa: "N/A",
      afinidade: "Dragão",
      nível: "SS", // Nível alto por ser uma das campeãs mais fortes
    },
  },

  // OTSU (Vagabond)
  {
    id: 200,
    name: "OTSU",
    category: "Vagabond",
    image: "img/Vagabond/otsu-1.png",
    description:
      "Mulher forte e determinada que trabalha em uma estalagem, conhecida por sua conexão com Takezo/Musashi. Representa a vida pacífica que Musashi poderia ter tido.",
    details: {
      universo: "Vagabond",
      poder: "Resiliência Emocional, Trabalho Duro",
      status: "Trabalhadora - Estalagem",
      estreia: 1999,
      recompensa: "N/A",
      afinidade: "Paz",
      nível: "C", // Nível baixo - personagem não combatente
    },
  },

  // EMIYA (Fate)
  {
    id: 201,
    name: "EMIYA",
    category: "Fate",
    image: "img/Fate/Emiya-1.png",
    description:
      "Servant da classe Archer, verdadeira identidade de Shirou Emiya do futuro. Conhecido como o 'Guardian', utiliza a realidade mágica Unlimited Blade Works para projetar armas.",
    details: {
      universo: "Fate",
      poder: "Unlimited Blade Works, Projeção de Armas",
      status: "Servant - Counter Guardian",
      estreia: 2004,
      recompensa: "N/A",
      afinidade: "Espadas",
      nível: "SS", // Nível alto, abaixo de Artoria e Gilgamesh
    },
  },

  // ROCKS D. XEBEC (One Piece)
  {
    id: 202,
    name: "ROCKS D. XEBEC",
    category: "One-Piece",
    image: "img/One-Piece/Rocks-D-Xebec-1.png",
    description:
      "Lendário capitão pirata da era anterior a Roger, líder dos Piratas Rocks. Tinha em sua tripulação futuros Yonko como Big Mom, Kaido e Barba Branca.",
    details: {
      universo: "One Piece",
      poder: "Força Inigualável, Liderança de Monstros",
      status: "Pirata Lendário - Capitão dos Rocks",
      estreia: 2018, // Mencionado primeiro no Chapter 907
      recompensa: "Desconhecida (provavelmente >฿5,000,000,000)",
      afinidade: "Ambição",
      nível: "SSS", // Nível máximo por ser lenda das lendas
    },
  },

  // NIGHT KING (Game of Thrones)
  {
    id: 203,
    name: "NIGHT KING",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/Night-King-1.png",
    description:
      "Líder supremo dos Caminhantes Brancos, uma antiga raça de seres mágicos que ameaçam extinguir toda a vida em Westeros. Criado pelos Filhos da Floresta para lutar contra os Primeiros Homens.",
    details: {
      universo: "Game of Thrones",
      poder:
        "Criação de Caminhantes Brancos, Ressurreição de Mortos, Imortalidade",
      status: "Antagonista - Rei dos Caminhantes Brancos",
      estreia: 2014, // Game of Thrones Season 4, Episode 4
      recompensa: "N/A",
      afinidade: "Gelo/Morte",
      nível: "SS", // Nível alto como ameaça existencial
    },
  },

  // BULAR (Trollhunters)
  {
    id: 204,
    name: "BULAR",
    category: "Trollhunters",
    image: "img/Trollhunters/burlar-1.png",
    description:
      "Troll Gumm-Gumm feroz e leal a Gunmar, determinado a libertar seu mestre do Submundo. Conhecido por sua força brutal e desejo de destruir o Trollhunter.",
    details: {
      universo: "Trollhunters",
      poder: "Força Sobre-Humana, Combate com Espadas, Resistência",
      status: "Vilão - Líder Gumm-Gumm",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Lealdade",
      nível: "A+", // Nível alto mas abaixo de Gunmar
    },
  },

  // GIORNO GIOVANNA (Jojo)
  {
    id: 205,
    name: "GIORNO GIOVANNA",
    category: "jojo",
    image: "img/Jojo/Giorno-Giovanna-1.png",
    description:
      "Protagonista da Parte 5: Vento Aureo, filho de Dio Brando e herdeiro do Joestar bloodline. Líder da Passione que busca se tornar um 'Gang-Star' para limpar a máfia italiana de corrupção.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand Gold Experience → Gold Experience Requiem",
      status: "Líder da Passione - Gang-Star",
      estreia: 1995, // Manga: 1995, Anime: 2018
      recompensa: "N/A",
      afinidade: "Vida/Criação",
      nível: "SSS", // Nível máximo por ter GER
    },
  },

  // KUSHINA UZUMAKI (Naruto)
  {
    id: 206,
    name: "KUSHINA UZUMAKI",
    category: "Naruto",
    image: "img/Naruto/Kushina.png",
    description:
      "Mãe de Naruto Uzumaki e ex-jinchūriki do Nove-Caudas. Membro do clã Uzumaki conhecida por seu cabelo vermelho vibrante, personalidade forte e habilidades de selamento excepcionais.",
    details: {
      universo: "Naruto",
      poder:
        "Chakra Uzumaki, Técnicas de Selamento, Cadeias de Chakra Adamantinas",
      status: "Ex-Jinchūriki - Falecida",
      estreia: 2005, // Naruto Capítulo 382
      recompensa: "N/A",
      afinidade: "Selamento",
      nível: "S", // Nível alto por ser Uzumaki e ex-jinchūriki
    },
  },

  // STEVE (Pokémon) - Assumindo que seja um treinador genérico
  {
    id: 207,
    name: "STEVE",
    category: "Pokemon",
    image: "img/Pokemon/steve-1.png",
    description:
      "Treinador Pokémon determinado em sua jornada para se tornar um Mestre Pokémon. Conhecido por seu espírito aventureiro e vínculo forte com seus Pokémon.",
    details: {
      universo: "Pokémon",
      poder: "Treinamento Pokémon, Estratégia de Batalha",
      status: "Treinador Pokémon",
      estreia: 1996, // Se for dos jogos originais
      recompensa: "N/A",
      afinidade: "Aventura",
      nível: "B", // Nível médio para treinador
    },
  },

  // GHOST (Marvel Comics)
  {
    id: 208,
    name: "GHOST",
    category: "Marvel-Comics",
    image: "img/Marvel-Comics/Ghost-1.png",
    description:
      "Hacker e sabotador corporativo que usa um traje tecnológico que concede intangibilidade e invisibilidade. Anti-herói/vilão que luta contra corporações corruptas.",
    details: {
      universo: "Marvel Comics",
      poder: "Intangibilidade, Invisibilidade, Hacking Avançado",
      status: "Anti-herói - Hacker Corporativo",
      estreia: 1987, // Iron Man #219
      recompensa: "N/A",
      afinidade: "Tecnologia",
      nível: "A", // Nível médio-alto, vilão street-level
    },
  },

  {
    id: 209, // Continuando a sequência
    name: "HOZOIN INSHUN",
    category: "Vagabond",
    image: "img/Vagabond/hozoin-inshun-1.png",
    description:
      "Monge guerreiro do templo Hozoin e mestre da lança (sōjutsu). Conhecido por seu estilo único de lança e por ser um dos oponentes mais formidáveis enfrentados por Miyamoto Musashi em sua jornada.",
    details: {
      universo: "Vagabond",
      poder: "Sōjutsu (arte da lança), Técnicas de Hozoin-ryu",
      status: "Monge Guerreiro - Mestre de Lança",
      estreia: 1999,
      recompensa: "N/A",
      afinidade: "Lança",
      nível: "A+", // Nível alto como mestre de lança, abaixo de Musashi e Kojiro
    },
  },

  // YUTA OKKOTSU (Jujutsu Kaisen)
  {
    id: 210,
    name: "YUTA OKKOTSU",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Yuta-Okkotsu-1.png",
    description:
      "Feiticeiro de grau especial e protagonista de Jujutsu Kaisen 0. Portador da poderosa maldição Rika e considerado o segundo feiticeiro mais forte após Satoru Gojo.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Maldição Rika, Cópia de Técnicas Amaldiçoadas",
      status: "Feiticeiro de Grau Especial",
      estreia: 2017, // Jujutsu Kaisen 0
      recompensa: "N/A",
      afinidade: "Maldição/Love",
      nível: "SS+", // Nível muito alto, abaixo apenas de Gojo e Sukuna
    },
  },

  // AZULA (Avatar)
  {
    id: 211,
    name: "AZULA",
    category: "Avatar",
    image: "img/Avatar/Azula-1.png",
    description:
      "Princesa da Nação do Fogo, irmã mais nova de Zuko e filha do Senhor do Fogo Ozai. Gênio tático e prodígio na dobra de fogo, conhecida por criar o raro fogo azul e sua busca obsessiva pela perfeição.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Fogo Avançada, Fogo Azul, Eletrocondução",
      status: "Princesa da Nação do Fogo",
      estreia: 2005, // Avatar Season 2
      recompensa: "N/A",
      afinidade: "Fogo/Perfeição",
      nível: "S", // Nível alto como prodígio e antagonista principal
    },
  },

  {
    id: 212, // Continuando a sequência
    name: "MORDEKAISER",
    category: "League of Legend",
    image: "img/lol/Mordekaiser-1.png",
    description:
      "O Revenã de Ferro, um antigo imperador de um reino esquecido que retornou dos mortos através de necromancia. Constrói um reino dos mortos e busca dominar tanto o mundo espiritual quanto o material.",
    details: {
      universo: "League of Legends",
      poder: "Domínio da Morte, Criação do Reino da Morte, Magia Negra",
      status: "Revenã - Imperador dos Mortos",
      estreia: 2010,
      título: "O Revenã de Ferro",
      objetivo: "Dominação dos Reinos Vivos e Mortos",
      nível: "SS", // Mesmo nível que Aatrox
    },
  },

  {
    id: 213, // Continuando a sequência
    name: "KURAPIKA",
    category: "HXH",
    image: "img/hxh/Kurapika-1.png",
    description:
      "Último sobrevivente do clã Kurta, caçador especializado em recuperar os olhos escarlates de seu povo. Desenvolveu habilidades de Nen específicas para combater a Tropa Fantasma.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen - Conjurador, Correntes de Julgamento, Emperor Time",
      status: "Hunter - Caçador da Tropa Fantasma",
      estreia: 1998,
      recompensa: "N/A",
      afinidade: "Vingança",
      nível: "S+", // Nível alto quando usa Emperor Time
    },
  },

  // AAARRRGGHH!!! (Trollhunters)
  {
    id: 214,
    name: "A",
    category: "Trollhunters",
    image: "img/Trollhunters/AAARRRGGHH-2.png",
    description:
      "Troll Krubera gentil e pacífico, melhor amigo de Blinky. Apesar de seu tamanho e aparência intimidante, prefere a paz e protege seus amigos com lealdade inabalável.",
    details: {
      universo: "Trollhunters",
      poder: "Força Sobre-Humana, Resistência, Lealdade",
      status: "Aliado - Troll Krubera",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Amizade",
      nível: "A", // Nível médio-alto, forte mas pacífico
    },
  },

  // ROB LUCCI (One Piece)
  {
    id: 215,
    name: "ROB LUCCI",
    category: "One-Piece",
    image: "img/One-Piece/Rob.png",
    description:
      "Agente do CP9 e posteriormente CP0, considerado o assassino mais letal do Governo Mundial. Usuário da Neko Neko no Mi, Modelo: Leopardo e mestre do Rokushiki.",
    details: {
      universo: "One Piece",
      poder: "Neko Neko no Mi (Fruta do Leopardo), Rokushiki, Haki",
      status: "Agente do CP0",
      estreia: 1999, // One Piece Capítulo 323
      recompensa: "N/A (agente do governo)",
      afinidade: "Assassinato",
      nível: "S+", // Nível alto como um dos agentes mais fortes
    },
  },

  {
    id: 216, // Continuando a sequência
    name: "KIKORU SHINOMIYA",
    category: "Kaiju-No-8",
    image: "img/Kaiju/Kikoru-Shinomiya-1.png",
    description:
      "Oficial prodígio da Força de Defesa contra Kaijus, filha do comandante Isao Shinomiya. Conhecida por suas habilidades excepcionais de combate, disciplina rigorosa e determinação em se tornar a mais forte.",
    details: {
      universo: "Kaiju No. 8",
      poder:
        "Habilidades de Combate de Elite, Traje de Combate Avançado, Estratégia Militar",
      status: "Oficial da Força de Defesa",
      estreia: 2020,
      recompensa: "N/A",
      afinidade: "Disciplina",
      nível: "A+", // Nível alto como oficial prodígio, abaixo de Kafka em forma de Kaiju
    },
  },

  {
    id: 217, // Continuando a sequência
    name: "LANCE",
    category: "Pokemon",
    image: "img/Pokemon/lance-1.png",
    description:
      "Membro da Elite Four das regiões Kanto e Johto, posteriormente promovido a Champion. Especialista em Pokémon do tipo Dragão, conhecido por sua personalidade nobre e habilidades de batalha excepcionais.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia com Pokémon Dragão, Liderança",
      status: "Champion/Elite Four",
      estreia: 1999, // Pokémon Gold/Silver
      recompensa: "N/A",
      afinidade: "Dragão",
      nível: "S", // Nível alto como Champion/Elite Four
    },
  },

  {
    id: 218, // Continuando a sequência
    name: "GOWTHER ORIGINAL",
    category: "Nanatsu",
    image: "img/Taizai/gowther-Original-1.png",
    description:
      "O grande mago que criou o autômato Gowther, mestre supremo da magia mental e emocional. Um dos magos mais poderosos da era dos deuses, responsável por pesquisas proibidas sobre emoções e alma.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Magia Mental Suprema, Criação de Autômatos, Manipulação de Almas",
      status: "Mago Lendário - Criador",
      estreia: 2018, // Aparece mais tarde na série
      recompensa: "N/A",
      afinidade: "Criação/Emoções",
      nível: "SS+", // Nível muito alto como mago lendário da era antiga
    },
  },

  {
    id: 219, // Continuando a sequência (considerando Gowther Original como 218)
    name: "GAARA",
    category: "Naruto",
    image: "img/Naruto/Gaara-1.png",
    description:
      "Quinto Kazekage da Vila Oculta da Areia e ex-jinchūriki da Shukaku (Uma-Cauda). Conhecido por seu controle sobre a areia, evolução de vilão a herói, e forte vínculo de amizade com Naruto Uzumaki.",
    details: {
      universo: "Naruto",
      poder:
        "Controle de Areia, Defesa Automática da Areia, Jutsu de Selamento",
      status: "Kazekage - Líder da Vila da Areia",
      estreia: 2000, // Naruto Capítulo 35
      recompensa: "N/A",
      afinidade: "Areia/Defesa",
      nível: "S+", // Nível alto como Kage e ex-jinchūriki
    },
  },

  {
    id: 220, // Continuando a sequência
    name: "TAMSY",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Tamsy-2.png",
    description:
      "Personagem do mundo distópico de Gachiakuta, envolvido no complexo sistema de castas e sobrevivência do ambiente hostil. Possui habilidades únicas adaptadas ao mundo desolador da série.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades específicas do mundo de Gachiakuta",
      status: "Ativo",
      estreia: 2022,
      recompensa: "N/A",
      afinidade: "Adaptação",
      nível: "B", // Mesmo nível que outros personagens de Gachiakuta
    },
  },

  {
    id: 221, // Continuando a sequência
    name: "ZUKO",
    category: "Avatar",
    image: "img/Avatar/Zuko-1.png",
    description:
      "Príncipe herdeiro da Nação do Fogo que inicia como antagonista caçando o Avatar, mas passa por uma jornada de redenção tornando-se aliado de Aang. Conhecido por sua busca por honra e domínio único do fogo através da raiva e posteriormente da paz interior.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Fogo, Eletrocondução, Dobra de Fogo dos Dragões",
      status: "Lorde do Fogo - Príncipe da Nação do Fogo",
      estreia: 2005, // Avatar Season 1, Episode 1
      recompensa: "N/A",
      afinidade: "Fogo/Redenção",
      nível: "S", // Nível alto como mestre de fogo e personagem principal
    },
  },

  {
    id: 222, // Continuando a sequência
    name: "GIYU TOMIOKA",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/Giyu-Tomioka-1.png",
    description:
      "Pilar da Água da Corporação de Caçadores de Demônios, conhecido por sua personalidade reservada e técnica perfeccionista. Primeiro Pilar a encontrar Tanjiro e Nezuko, desempenhando papel crucial em seu treinamento.",
    details: {
      universo: "Demon Slayer (Kimetsu no Yaiba)",
      poder: "Respiração da Água, 11ª Forma: Calmaria",
      status: "Pilar - Hashira da Água",
      estreia: 2016,
      recompensa: "N/A",
      afinidade: "Água",
      nível: "S", // Nível alto como Pilar/Hashira
    },
  },

  {
    id: 223, // Continuando a sequência
    name: "KAIJU NO. 9",
    category: "Kaiju-No-8",
    image: "img/Kaiju/Kaiju-No-9-1.png",
    description:
      "Kaiju humanoide inteligente e principal antagonista da série, capaz de assumir forma humana, absorver habilidades de outros kaijus e evoluir constantemente. Busca alcançar a forma perfeita de kaiju.",
    details: {
      universo: "Kaiju No. 8",
      poder:
        "Absorção de Habilidades, Transformação, Evolução Rápida, Inteligência Estratégica",
      status: "Antagonista Principal - Kaiju Evolutivo",
      estreia: 2020,
      recompensa: "N/A",
      afinidade: "Evolução/Absorção",
      nível: "SS+", // Nível muito alto como antagonista principal
    },
  },

  // ILLAOI (League of Legends)
  {
    id: 224,
    name: "ILLAOI",
    category: "League of Legend",
    image: "img/lol/illaoi-1.png",
    description:
      "Sacerdotisa do Grande Kraken de Bilgewater, que testa o espírito dos mortais para determinar se são dignos. Utiliza um ídolo divino que invoca tentáculos espirituais para atacar seus inimigos.",
    details: {
      universo: "League of Legends",
      poder: "Invocações do Kraken, Teste do Espírito, Combate com Ídolo",
      status: "Sacerdotisa - Testadora de Espíritos",
      estreia: 2015,
      título: "O Teste do Kraken",
      objetivo: "Testar os Espíritos dos Mortais",
      nível: "A+", // Nível médio-alto, campeã de suporte/dano
    },
  },

  // GRUNBELD (Berserk)
  {
    id: 225,
    name: "GRUNBELD",
    category: "Berserk",
    image: "img/Berserk/grunbeld-1.png",
    description:
      "Um dos apóstolos mais poderosos, comandante da nova Tropa do Falcão sob Griffith. Em sua forma apóstolo, transforma-se em um dragão de cristal praticamente indestrutível.",
    details: {
      universo: "Berserk",
      poder:
        "Transformação em Dragão de Cristal, Força Colossal, Defesa Absoluta",
      status: "Apóstolo - Comandante da Tropa do Falcão",
      estreia: 1999, // Berserk Volume 22
      recompensa: "N/A",
      afinidade: "Cristal/Dragão",
      nível: "S+", // Nível muito alto como um dos apóstolos mais fortes
    },
  },

  {
    id: 226, // Continuando a sequência
    name: "SILVA ZOLDYCK",
    category: "HXH",
    image: "img/hxh/silva-zoldyck-1.png",
    description:
      "Chefe da Família Zoldyck, uma das famílias de assassinos mais temidas do mundo. Pai de Killua Zoldyck e mestre em técnicas de assassinato usando Nen. Conhecido por sua força implacável e ética profissional rigorosa.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen - Emissor, Técnicas de Assassinato, Força Física",
      status: "Assassino - Chefe da Família Zoldyck",
      estreia: 1999, // Hunter x Hunter Capítulo 44
      recompensa: "N/A",
      afinidade: "Assassinato",
      nível: "S+", // Nível muito alto como chefe dos Zoldyck
    },
  },

  {
    id: 227, // Continuando a sequência
    name: "EDDARD STARK",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/Ned-Stark-1.png",
    description:
      "Senhor de Winterfell, Protetor do Norte, e Mão do Rei Robert Baratheon. Conhecido por seu forte senso de honra, justiça e lealdade à família. Sua busca pela verdade sobre a linhagem real desencadeia eventos cruciais em Westeros.",
    details: {
      universo: "Game of Thrones",
      poder: "Liderança, Habilidade com Espada (Gelo), Honra Inabalável",
      status: "Senhor de Winterfell - Executado",
      estreia: 1996, // A Game of Thrones (livro)
      recompensa: "N/A",
      afinidade: "Honra/Justiça",
      nível: "A+", // Nível alto como líder e guerreiro, mas personagem mais político/moral
    },
  },

  {
    id: 228, // Continuando a sequência
    name: "KALGARA",
    category: "One-Piece",
    image: "img/One-Piece/Kalgara-1.png",
    description:
      "Lendário guerreiro chefe da tribo Shandia de Shandora, conhecido como 'Kalgara do Sul'. Fez uma promessa de amizade com o explorador Montblanc Noland e lutou para proteger o Sino de Ouro e a cidade de Shandora.",
    details: {
      universo: "One Piece",
      poder: "Habilidades de Combate Tribal, Força Física, Liderança",
      status: "Chefe Guerreiro - Shandia Lendário",
      estreia: 2002, // One Piece Capítulo 286 (arco Skypiea)
      recompensa: "N/A (era pré-sistema de recompensas)",
      afinidade: "Honra/Promessa",
      nível: "A+", // Nível alto como guerreiro lendário, mas era pré-Haki
    },
  },

  {
    id: 229, // Continuando a sequência
    name: "FUNNY VALENTINE",
    category: "jojo",
    image: "img/Jojo/Funny-Valentine-1.png",
    description:
      "23º Presidente dos Estados Unidos e antagonista principal de Steel Ball Run. Portador do Stand D4C (Dirty Deeds Done Dirt Cheap) que lhe permite viajar entre dimensões paralelas. Movido pelo patriotismo extremo e desejo de garantir a 'felicidade' da América.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand D4C, Travel Between Dimensions, Love Train",
      status: "Antagonista - Presidente dos EUA",
      estreia: 2004, // Steel Ball Run Capítulo 46
      recompensa: "N/A",
      afinidade: "Patriotismo/Dimensões",
      nível: "SSS", // Nível máximo por ter Love Train, considerado um dos Stands mais quebrados
    },
  },

  {
    id: 230, // Continuando a sequência
    name: "TORU RIKIISHI",
    category: "Ashita-no-Joe",
    image: "img/Ashita-no-Joe/Toru-Rikiishi-1.png",
    description:
      "Boxeador profissional e primeiro grande rival de Joe Yabuki. Conhecido por seu estilo técnico e rigoroso, representa o contraste entre o boxe disciplinado e o estilo selvagem de Joe. Sua luta contra Joe se torna lendária no mundo do boxe.",
    details: {
      universo: "Ashita no Joe",
      poder: "Técnica de Boxe Refinada, Disciplina, Estratégia",
      status: "Boxeador Profissional - Rival de Joe",
      estreia: 1968,
      técnica: "Boxe Técnico, Defesa Sólida",
      nível: "A+", // Nível alto como boxeador profissional, mas abaixo de Joe
    },
  },

  {
    id: 231, // Continuando a sequência
    name: "KINJI HAKARI",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Kinji-Hakari-1.png",
    description:
      "Feiticeiro de grau especial e estudante do terceiro ano da Escola de Feitiçaria de Tóquio. Conhecido por sua técnica amaldiçoada única baseada em cassino/pachinko que lhe concede imortalidade temporária quando atinge o 'jackpot'.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Técnica Amaldiçoada: Idle Death Gamble, Imortalidade por Jackpot",
      status: "Feiticeiro de Grau Especial - Estudante",
      estreia: 2021, // Jujutsu Kaisen Capítulo 158
      recompensa: "N/A",
      afinidade: "Sorte/Cassino",
      nível: "SS", // Nível muito alto quando no modo jackpot
    },
  },

  {
    id: 232, // Continuando a sequência
    name: "IROH",
    category: "Avatar",
    image: "img/Avatar/Iroh-1.png",
    description:
      "Conhecido como 'O Dragão do Oeste', ex-general da Nação do Fogo e tio de Zuko. Mestre de dobra de fogo que redescobriu os segredos originais da dobra com os dragões. Sábio, compassivo e guia espiritual, famoso por seu amor ao chá e sabedoria profunda.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Fogo dos Dragões, Eletrocondução, Sabedoria Espiritual",
      status: "Ex-General - Dono da Loja de Chá",
      estreia: 2005, // Avatar Season 1
      recompensa: "N/A",
      afinidade: "Sabedoria/Chá",
      nível: "S+", // Nível muito alto como mestre de fogo dos dragões
    },
  },

  {
    id: 233, // Continuando a sequência
    name: "IRIS",
    category: "Pokemon",
    image: "img/Pokemon/Iris-1.png",
    description:
      "Campeã da região de Unova e especialista em Pokémon do tipo Dragão. Começou como líder de ginásio em Opelucid City e posteriormente se tornou Campeã, conhecida por sua personalidade energética e forte vínculo com seus Pokémon dragão.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia com Pokémon Dragão, Liderança, Conexão com Pokémon",
      status: "Campeã - Região de Unova",
      estreia: 2010, // Pokémon Black/White
      recompensa: "N/A",
      afinidade: "Dragão",
      nível: "S", // Nível alto como Campeã
    },
  },

  {
    id: 234, // Continuando a sequência
    name: "SETT",
    category: "League of Legend",
    image: "img/lol/Sett-2.png",
    description:
      "Conhecido como 'O Chefe', meio-vastaya meio-humano que domina a cena underground de lutas de Ionia. Filho de uma vastaya ioniana e um humano noxiano, usa sua força bruta e habilidades de regeneração para manter seu império ilegal.",
    details: {
      universo: "League of Legends",
      poder: "Força Sobre-Humana, Regeneração Vastaya, Combate Corpo a Corpo",
      status: "Chefe Underground - Dono da Arena de Lutas",
      estreia: 2020,
      título: "O Chefe",
      objetivo: "Manter Seu Império e Cuidar da Mãe",
      nível: "A+", // Nível médio-alto, campeão lutador/tanque
    },
  },

  {
    id: 235, // Continuando a sequência
    name: "HASHIRAMA SENJU",
    category: "Naruto",
    image: "img/Naruto/Hashirama-1.png",
    description:
      "Primeiro Hokage da Vila Oculta da Folha, co-fundador de Konoha com Madara Uchiha. Conhecido como 'Deus Shinobi' e detentor do Kekkei Genkai Mokuton (Estilo Madeira), considerado o shinobi mais forte de sua era.",
    details: {
      universo: "Naruto",
      poder:
        "Mokuton (Estilo Madeira), Regeneração Celular, Senjutsu do Modo Sábio",
      status: "Primeiro Hokage - Lendário",
      estreia: 2002, // Primeira menção no Chapter 120
      recompensa: "N/A (era pré-sistema)",
      afinidade: "Madeira/Vida",
      nível: "SSS", // Nível máximo como "Deus Shinobi"
    },
  },

  {
    id: 236, // Continuando a sequência (considerando Hashirama como 235)
    name: "KEI KARUIZAWA",
    category: "Classroom-of-the-Elite",
    image: "img/classroom-of-the-elite/Kei-Karuizawa-1.png",
    description:
      "Estudante popular da Classe D da Advanced Nurturing High School, conhecida por seu estilo fashion e influência social. Por trás da fachada confiante, esconde traumas de bullying e desenvolve uma complexa relação com Kiyotaka Ayanokōji.",
    details: {
      universo: "Classroom of the Elite",
      poder: "Influência Social, Inteligência Emocional, Adaptação",
      status: "Estudante - Classe D",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Sobrevivência Social",
      nível: "B", // Nível similar aos outros estudantes
    },
  },

  // SCHIERKE (Berserk)
  {
    id: 237, // Continuando a sequência
    name: "SCHIERKE",
    category: "Berserk",
    image: "img/Berserk/Schierke-1.png",
    description:
      "Jovem feiticeira aprendiz da poderosa maga Flora, que se junta ao grupo de Guts. Especialista em magia elemental e espiritual, serve como guia espiritual para o grupo, ajudando a proteger suas almas de influências demoníacas.",
    details: {
      universo: "Berserk",
      poder: "Magia Elemental, Invocação de Espíritos, Proteção Espiritual",
      status: "Feiticeira - Membro do Grupo de Guts",
      estreia: 1999, // Berserk Volume 23
      recompensa: "N/A",
      afinidade: "Magia/Espíritos",
      nível: "A+", // Nível médio-alto como feiticeira talentosa
    },
  },

  // FISHER TIGER (One Piece)
  {
    id: 238,
    name: "FISHER TIGER",
    category: "One-Piece",
    image: "img/One-Piece/Fisher-Tiger-1.png",
    description:
      "Lendário fish-man que conquistou a liberdade sozinho e se tornou o primeiro fish-man a escalar a Red Line. Fundador dos Piratas do Sol e herói para sua raça, conhecido por sua filosofia de não odiar humanos apesar de ter sido escravizado.",
    details: {
      universo: "One Piece",
      poder: "Fish-Man Karate, Força Sobre-Humana, Natação Excepcional",
      status: "Herói Lendário - Ex-escravo, Fundador dos Piratas do Sol",
      estreia: 2010, // One Piece Capítulo 521 (Flashback)
      recompensa: "฿230,000,000 (estimada)",
      afinidade: "Liberdade",
      nível: "S", // Nível alto como herói lendário
    },
  },

  {
    id: 239, // Continuando a sequência
    name: "YONG-BI KIM",
    category: "Ashita-no-Joe",
    image: "img/Ashita-no-Joe/Yong-Bi-Kim-1.png",
    description:
      "Boxeador profissional coreano que enfrenta Joe Yabuki em uma luta internacional. Conhecido por seu estilo técnico e experiência, representa um desafio significativo para Joe em sua jornada no boxe profissional.",
    details: {
      universo: "Ashita no Joe",
      poder: "Técnica de Boxe Avançada, Experiência Internacional, Estratégia",
      status: "Boxeador Profissional - Internacional",
      estreia: 1970, // Ashita no Joe Parte 2
      técnica: "Boxe Técnico, Defesa Sólida",
      nível: "A", // Nível alto como boxeador profissional experiente
    },
  },

  // KITE (Hunter x Hunter)
  {
    id: 240, // Continuando a sequência
    name: "KITE",
    category: "HXH",
    image: "img/hxh/kite-1.png",
    description:
      "Hunter profissional e ex-aluno de Ging Freecss, que se torna mentor de Gon. Portador de uma habilidade de Nen única com sua arma 'Crazy Slots' que gira aleatoriamente para diferentes armas. Conhecido por seu senso de responsabilidade e ética como hunter.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen - Crazy Slots (9 armas aleatórias), Habilidade de Caçador",
      status: "Hunter Profissional - Mentor",
      estreia: 1999, // Hunter x Hunter Capítulo 1
      recompensa: "N/A",
      afinidade: "Responsabilidade",
      nível: "S", // Nível alto como hunter experiente
    },
  },

  // TYRION LANNISTER (Game of Thrones)
  {
    id: 241,
    name: "TYRION LANNISTER",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/Tyrion-Lannister-1.png",
    description:
      "Membro da Casa Lannister, conhecido como 'O Anão' ou 'Meio-Homem'. Inteligência afiada, habilidade política excepcional e sagacidade verbal fazem dele um dos estrategistas mais astutos de Westeros, apesar de seu físico.",
    details: {
      universo: "Game of Thrones",
      poder: "Inteligência Estratégica, Habilidade Política, Oratória",
      status: "Mão do Rei - Conselheiro Real",
      estreia: 1996, // A Game of Thrones (livro)
      recompensa: "N/A",
      afinidade: "Estratégia/Inteligência",
      nível: "A+", // Nível alto como estrategista, baixo combate físico
    },
  },

  {
    id: 242, // Continuando a sequência
    name: "YUKI TSUKUMO",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Yuki-Tsukumo-1.png",
    description:
      "Uma das quatro feiticeiras de grau especial do mundo, ao lado de Satoru Gojo. Mestre de Todo e ex-mentor de Geto. Possui a rara técnica amaldiçoada 'Star Plasma' que lhe concede habilidades de manipulação de massa e gravidade.",
    details: {
      universo: "Jujutsu Kaisen",
      poder:
        "Técnica Amaldiçoada: Star Plasma, Manipulação de Massa, Pseudo-Cinemática",
      status: "Feiticeira de Grau Especial - Star Plasma Vessel",
      estreia: 2021, // Jujutsu Kaisen Capítulo 143
      recompensa: "N/A",
      afinidade: "Massa/Gravidade",
      nível: "SS+", // Nível muito alto como feiticeira de grau especial
    },
  },

  {
    id: 243, // Continuando a sequência
    name: "ROKUSUKE KOENJI",
    category: "Classroom-of-the-Elite",
    image: "img/classroom-of-the-elite/Rokusuke-Koenji-1.png",
    description:
      "Estudante extremamente confiante e excêntrico da Classe D, conhecido por suas habilidades físicas excepcionais e personalidade narcisista. Age de acordo com seus próprios interesses, muitas vezes ignorando regras e hierarquias, mas demonstrando capacidades impressionantes quando motivado.",
    details: {
      universo: "Classroom of the Elite",
      poder:
        "Habilidades Físicas Excepcionais, Inteligência, Autoconfiança Extrema",
      status: "Estudante - Classe D",
      estreia: 2017,
      recompensa: "N/A",
      afinidade: "Individualismo",
      nível: "A", // Nível médio-alto por habilidades físicas, mas comportamento imprevisível
    },
  },

  {
    id: 244, // Continuando a sequência
    name: "MARK GRAYSON",
    category: "Invencível",
    image: "img/Invencível/Mark-Grayson-1.png",
    description:
      "Protagonista da série Invincible, filho de Omni-Man (Nolan Grayson) e herdeiro dos poderes Viltrumitas. Adolescente que desenvolve superpoderes e adota o codinome 'Invencível', aprendendo a ser um herói enquanto enfrenta o legado complicado de seu pai.",
    details: {
      universo: "Invincible",
      poder: "Força Viltrumita, Voo, Durabilidade, Velocidade Sobre-Humana",
      status: "Herói - Invencível",
      estreia: 2003, // Invincible #1
      recompensa: "N/A",
      afinidade: "Herança Viltrumita",
      nível: "S+", // Nível muito alto como Viltrumita puro-sangue
    },
  },

  {
    id: 245, // Continuando a sequência
    name: "OZAI",
    category: "Avatar",
    image: "img/Avatar/Ozai.png",
    description:
      "Senhor do Fogo da Nação do Fogo durante a Guerra dos Cem Anos e principal antagonista da série. Pai de Zuko e Azula, conhecido por sua crueldade, ambição desmedida e desejo de dominar o mundo. Considerado um dos dobradores de fogo mais poderosos da história.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Fogo Poderosa, Eletrocondução, Agilidade em Combate",
      status: "Antagonista - Senhor do Fogo",
      estreia: 2006, // Avatar Season 2, Episode 1 (primeira menção)
      recompensa: "N/A",
      afinidade: "Poder/Dominação",
      nível: "S+", // Nível muito alto como vilão final e mestre de fogo
    },
  },

  // YRUL (Black Clover)
  {
    id: 246, // Continuando a sequência
    name: "YRUL",
    category: "Black Clover",
    image: "img/Black Clover/yrul-1.png",
    description:
      "Personagem do universo de Black Clover, envolvido nas batalhas mágicas do Reino do Trifolium. Utiliza magia única dentro do sistema de magia do mundo, participando dos conflitos entre os reinos mágicos.",
    details: {
      universo: "Black Clover",
      poder: "Magia Específica de Yrul",
      status: "Ativo - Usuário de Magia",
      estreia: 2015, // Black Clover início
      recompensa: "N/A",
      afinidade: "Magia",
      nível: "A", // Nível médio-alto para personagem de Black Clover
    },
  },

  // IRVINE (Berserk)
  {
    id: 247,
    name: "IRVINE",
    category: "Berserk",
    image: "img/Berserk/Irvine-1.png",
    description:
      "Apóstolo que serve a Griffith na nova Tropa do Falcão, conhecido como o 'Arqueiro Silencioso'. Em sua forma apóstolo, transforma-se em um centauro com habilidades de arqueiro excepcionais, capaz de atirar flechas a distâncias extremas com precisão mortal.",
    details: {
      universo: "Berserk",
      poder: "Arqueiro Supremo, Transformação em Centauro, Sentidos Aguçados",
      status: "Apóstolo - Arqueiro da Tropa do Falcão",
      estreia: 1999, // Berserk Volume 27
      recompensa: "N/A",
      afinidade: "Arco/Flecha",
      nível: "S", // Nível alto como apóstolo especializado
    },
  },
];
