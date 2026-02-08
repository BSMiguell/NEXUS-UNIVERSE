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
    stats: {
      forca: 95,
      velocidade: 90,
      defesa: 85,
      energia: 100,
      habilidade: 88,
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
    stats: {
      forca: 100,
      velocidade: 95,
      defesa: 90,
      energia: 100,
      habilidade: 95,
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
    stats: {
      forca: 98,
      velocidade: 80,
      defesa: 92,
      energia: 95,
      habilidade: 85,
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
    stats: {
      forca: 96,
      velocidade: 92,
      defesa: 88,
      energia: 97,
      habilidade: 99,
    },
  },

  {
    id: 5,
    name: "CHROLLO LUCILFER",
    category: "HXH",
    image: "img/hxh/Chrollo.png",
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
    stats: {
      forca: 85,
      velocidade: 90,
      defesa: 80,
      energia: 88,
      habilidade: 100,
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
      universo: "Kimetsu no Yaiba",
      poder: "Respiração da Pedra",
      status: "Pilar - Hashira da Pedra",
      estreia: 2016,
      caracteristica: "Cego - Sentidos Aprimorados",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 75,
      defesa: 95,
      energia: 85,
      habilidade: 88,
    },
  },

  {
    id: 7,
    name: "ALL MIGHT",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/all might-3.png",
    description:
      "O Símbolo da Paz, portador do One For All, professor de U.A. Frase: 'Sou eu que chego!'.",
    details: {
      universo: "My Hero Academia",
      poder: "One For All",
      status: "Símbolo da Paz (Aposentado)",
      estreia: 2014,
      afiliacao: "U.A. High School",
      caracteristica: "I AM HERE!",
      nivel: "SS",
    },
    stats: {
      forca: 98,
      velocidade: 90,
      defesa: 88,
      energia: 95,
      habilidade: 82,
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
      afiliacao: "Filho de Drácula",
      caracteristica: "Caçador de Vampiros",
      nivel: "S+",
    },
    stats: {
      forca: 87,
      velocidade: 94,
      defesa: 83,
      energia: 90,
      habilidade: 92,
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
      titulo: "A Espada das Trevas",
      caracteristica: "Destruição Total",
      nivel: "SS",
    },
    stats: {
      forca: 96,
      velocidade: 80,
      defesa: 90,
      energia: 94,
      habilidade: 85,
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
      titulo: "Fullmetal Alchemist",
      caracteristica: "Recuperar o corpo do irmão",
      nivel: "S",
    },
    stats: {
      forca: 82,
      velocidade: 88,
      defesa: 78,
      energia: 85,
      habilidade: 95,
    },
  },

  {
    id: 11,
    name: "GOLDEN SPERM",
    category: "One Punch Man",
    image: "img/One-Punch-Man/golden-sperm-1s.png",
    description:
      "Monstro formado pela fusão de inúmeros espermatozoides monstruosos, uma das criações mais poderosas da Associação de Monstros.",
    details: {
      universo: "One Punch Man",
      poder: "Força e velocidade sobre-humanas, transformação corporal",
      status: "Derrotado por Saitama",
      estreia: 2015,
      afiliacao: "Associação de Monstros",
      caracteristica: "Fusão Biológica",
      nivel: "S+",
    },
    stats: {
      forca: 97,
      velocidade: 89,
      defesa: 93,
      energia: 88,
      habilidade: 75,
    },
  },

  {
    id: 12,
    name: "KENPACHI ZARAKI",
    category: "Bleach",
    image: "img/Bleach/Zaraki-1.png",
    description:
      "Capitão da 11ª Divisão da Sociedade de Almas, conhecido por sua sede insaciável de batalha e força bruta incomparável.",
    details: {
      universo: "Bleach",
      poder: "Zanpakutō Nozarashi, Força Física Imensa",
      status: "Ativo - Capitão",
      estreia: 2001,
      afiliacao: "Gotei 13 - 11ª Divisão",
      caracteristica: "Amante da Batalha",
      nivel: "S",
    },
    stats: {
      forca: 99,
      velocidade: 85,
      defesa: 90,
      energia: 92,
      habilidade: 82,
    },
  },

  {
    id: 13,
    name: "RADAHN",
    category: "souls",
    image: "img/souls/radahn-8.png",
    description:
      "General Radahn, o Conquistador das Estrelas, um semideus que detém as estrelas em seu lugar com sua poderosa magia gravitacional.",
    details: {
      universo: "Elden Ring",
      poder: "Magia Gravitacional, Combate Montado",
      status: "Corrompido pela Podridão Escarlate",
      estreia: 2022,
      titulo: "Conquistador das Estrelas",
      caracteristica: "Controle Gravitacional",
      nivel: "S+",
    },
    stats: {
      forca: 98,
      velocidade: 70,
      defesa: 96,
      energia: 94,
      habilidade: 80,
    },
  },

  {
    id: 14,
    name: "KEISUKE BAJI",
    category: "tokyo",
    image: "img/tokyo-revengers/Baji-2.png",
    description:
      "Membro fundador dos Tokyo Manji Gang, conhecido por sua lealdade inabalável e habilidades de combate excepcionais.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Combate Corpo a Corpo, Facas",
      status: "Falecido",
      estreia: 2017,
      afiliacao: "Tokyo Manji Gang",
      caracteristica: "Lealdade Inabalável",
      nivel: "A",
    },
    stats: {
      forca: 78,
      velocidade: 85,
      defesa: 72,
      energia: 80,
      habilidade: 88,
    },
  },

  {
    id: 15,
    name: "RYOMEN SUKUNA",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/sukana-4s.png",
    description:
      "O Rei das Maldições, uma entidade de poder incomensurável que assombrou a Era de Ouro dos Feiticeiros Jujutsu.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Técnicas Amaldiçoadas, Domínio Malevolente",
      status: "Reencarnado em Yuji Itadori",
      estreia: 2018,
      titulo: "Rei das Maldições",
      caracteristica: "Poder Incomensurável",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 92,
      defesa: 90,
      energia: 100,
      habilidade: 98,
    },
  },

  {
    id: 16,
    name: "YORIICHI TSUGIKUNI",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/Yoriichi-2.png",
    description:
      "O caçador de demônios mais forte da história, criador da Respiração do Sol e único a quase derrotar Muzan Kibutsuji.",
    details: {
      universo: "Kimetsu no Yaiba",
      poder: "Respiração do Sol, Marca Solar",
      status: "Falecido",
      estreia: 2016,
      titulo: "Caçador Mais Forte",
      caracteristica: "Criador da Respiração do Sol",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 100,
      defesa: 88,
      energia: 95,
      habilidade: 100,
    },
  },

  {
    id: 17,
    name: "ZELDRIS",
    category: "Nanatsu",
    image: "img/Taizai/zeldris-1.png",
    description:
      "Comandante dos Dez Mandamentos e Príncipe dos Demônios, portador do Mandamento da Piedade e servo do Rei Demônio.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Poder Demoniaco, Mandamento da Piedade",
      status: "Ativo - Comandante",
      estreia: 2014,
      afiliacao: "Dez Mandamentos",
      caracteristica: "Príncipe dos Demônios",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 87,
      defesa: 85,
      energia: 88,
      habilidade: 86,
    },
  },

  {
    id: 18,
    name: "DEAR",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Dear-1.png",
    description:
      "Personagem do mundo de Gachiakuta, envolvido nas complexas dinâmicas de poder e sobrevivência em um ambiente desolado.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades de Combate Especializadas",
      status: "Ativo",
      estreia: 2022,
      afiliacao: "Mundo de Gachiakuta",
      caracteristica: "Sobrevivente",
      nivel: "B+",
    },
    stats: {
      forca: 72,
      velocidade: 78,
      defesa: 70,
      energia: 75,
      habilidade: 80,
    },
  },

  {
    id: 19,
    name: "ACNOLOGIA",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/acnologia-1s.png",
    description:
      "O Dragão Rei, um dragão que se alimenta de outros dragões e é considerado a maior ameaça ao mundo de Fairy Tail.",
    details: {
      universo: "Fairy Tail",
      poder: "Magia de Dragon Slayer, Transformação em Dragão",
      status: "Derrotado",
      estreia: 2009,
      titulo: "Dragão Rei",
      caracteristica: "Alimenta-se de Dragões",
      nivel: "S+",
    },
    stats: {
      forca: 99,
      velocidade: 85,
      defesa: 97,
      energia: 98,
      habilidade: 88,
    },
  },

  {
    id: 20,
    name: "RORONOA ZORO",
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
      caracteristica: "Futuro Maior Espadachim",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 86,
      defesa: 85,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 21,
    name: "VLAD DRÁCULA",
    category: "Castlevania",
    image: "img/castlevania/Vlad Drácula-1.png",
    description:
      "O Lorde das Trevas, um vampiro imortal que governa o Castelo Drácula e é a encarnação do mal na série Castlevania.",
    details: {
      universo: "Castlevania",
      poder: "Magia Negra, Transformação, Imortalidade",
      status: "Ressurge Periodicamente",
      estreia: 1986,
      titulo: "Lorde das Trevas",
      caracteristica: "Encarnação do Mal",
      nivel: "S+",
    },
    stats: {
      forca: 95,
      velocidade: 90,
      defesa: 92,
      energia: 100,
      habilidade: 93,
    },
  },

  {
    id: 22,
    name: "QIN SHI HUANG",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Qin Shi Huang-1.png",
    description:
      "Primeiro Imperador da China, representante da humanidade no Ragnarok com habilidades baseadas em sua lenda histórica.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Qi, Técnicas de Imperador",
      status: "Participante do Ragnarok",
      estreia: 2021,
      titulo: "Primeiro Imperador da China",
      caracteristica: "Técnicas Reais",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 82,
      defesa: 85,
      energia: 90,
      habilidade: 95,
    },
  },

  {
    id: 23,
    name: "JOTARO KUJO",
    category: "jojo",
    image: "img/Jojo/Jotaro-1.png",
    description:
      "Usuário do Stand Star Platinum, protagonista da Parte 3: Stardust Crusaders, neto de Joseph Joestar.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand (Star Platinum), Time Stop",
      status: "Ativo - Feiticeiro Stand",
      estreia: 1989,
      titulo: "Portador de Star Platinum",
      caracteristica: "Parada no Tempo",
      nivel: "S",
    },
    stats: {
      forca: 89,
      velocidade: 92,
      defesa: 84,
      energia: 88,
      habilidade: 90,
    },
  },

  {
    id: 24,
    name: "NOSFERATU ZODD",
    category: "Berserk",
    image: "img/Berserk/Nosferatu Zodd-1.png",
    description:
      "Apóstolo imortal que busca oponentes dignos em batalha, conhecido por sua forma monstruosa e habilidades de regeneração.",
    details: {
      universo: "Berserk",
      poder: "Transformação Apóstolo, Regeneração, Imortalidade",
      status: "Ativo - Mercenário",
      estreia: 1990,
      titulo: "O Apóstolo Imortal",
      caracteristica: "Busca por Oponentes Dignos",
      nivel: "S",
    },
    stats: {
      forca: 96,
      velocidade: 78,
      defesa: 94,
      energia: 92,
      habilidade: 82,
    },
  },

  {
    id: 25,
    name: "ALPHONSE ELRIC",
    category: "Fullmetal",
    image: "img/Fullmetal-Alchemist/Alphonse Elric-1.png",
    description:
      "Irmão mais novo de Edward Elric, cuja alma está ligada a uma armadura de metal após um experimento de alquimia falho.",
    details: {
      universo: "Fullmetal Alchemist",
      poder: "Alquimia sem Círculo de Transmutação",
      status: "Recuperou seu Corpo",
      estreia: 2001,
      titulo: "Fullmetal Alchemist (Irmão)",
      caracteristica: "Alma em Armadura",
      nivel: "A+",
    },
    stats: {
      forca: 80,
      velocidade: 70,
      defesa: 95,
      energia: 85,
      habilidade: 88,
    },
  },

  {
    id: 26,
    name: "DARIUS",
    category: "League of Legend",
    image: "img/lol/Darius-1.png",
    description:
      "A Mão de Noxus, um comandante implacável cuja presença no campo de batalha inspira tanto terror quanto lealdade.",
    details: {
      universo: "League of Legends",
      poder: "Machadão, Execuções",
      status: "Ativo - General de Noxus",
      estreia: 2012,
      titulo: "A Mão de Noxus",
      caracteristica: "Executor Implacável",
      nivel: "S",
    },
    stats: {
      forca: 94,
      velocidade: 75,
      defesa: 88,
      energia: 85,
      habilidade: 82,
    },
  },

  {
    id: 27,
    name: "KYOJURU RENGOKU",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/Rengoku-3.png",
    description:
      "Pilar das Chamas, um caçador de demônios entusiasta e poderoso que vive pelo código de proteger os mais fracos.",
    details: {
      universo: "Kimetsu no Yaiba",
      poder: "Respiração das Chamas",
      status: "Falecido em Batalha",
      estreia: 2016,
      titulo: "Pilar das Chamas",
      caracteristica: "Código de Proteção",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 88,
      defesa: 85,
      energia: 92,
      habilidade: 89,
    },
  },

  {
    id: 28,
    name: "SATORU GOJO",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Gojo-1.png",
    description:
      "Considerado o feiticeiro jujutsu mais forte da era atual, professor na Escola de Feitiçaria de Tóquio e membro do clã Gojo.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Limitless, Seis Olhos, Domínio Malevolente",
      status: "Selado/Ativo",
      estreia: 2018,
      titulo: "O Mais Forte",
      caracteristica: "Técnica Ilimitada",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 95,
      defesa: 99,
      energia: 98,
      habilidade: 100,
    },
  },

  {
    id: 29,
    name: "GENRYUSAI SHIGEKUNI YAMAMOTO",
    category: "Bleach",
    image: "img/Bleach/yamamoto-2.png",
    description:
      "Capitão-Comandante da Sociedade de Almas por mais de mil anos, detentor da Zanpakutō de fogo mais poderosa.",
    details: {
      universo: "Bleach",
      poder: "Zanpakutō Ryujin Jakka (Fogo)",
      status: "Falecido",
      estreia: 2001,
      titulo: "Capitão-Comandante",
      caracteristica: "Zanpakutō Mais Poderosa",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 85,
      defesa: 90,
      energia: 99,
      habilidade: 95,
    },
  },

  {
    id: 30,
    name: "NAMELESS KING",
    category: "souls",
    image: "img/souls/Nameless King-1.png",
    description:
      "Deus da Guerra exilado, filho de Gwyn e mestre das tempestades, que se aliou aos dragões ancestrais.",
    details: {
      universo: "Dark Souls III",
      poder: "Raio, Combate Montado em Dragão",
      status: "Chefe Opcional",
      estreia: 2016,
      titulo: "Deus da Guerra Exilado",
      caracteristica: "Mestre das Tempestades",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 88,
      defesa: 92,
      energia: 95,
      habilidade: 90,
    },
  },

  {
    id: 31,
    name: "LAXUS DREYAR",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Laxus-1.png",
    description:
      "Mago do Trovão da Fairy Tail, neto do mestre Makarov, conhecido por seu poder eletrizante e personalidade orgulhosa.",
    details: {
      universo: "Fairy Tail",
      poder: "Magia de Dragon Slayer do Raio",
      status: "Ativo - Mago da Fairy Tail",
      estreia: 2009,
      afiliacao: "Fairy Tail",
      caracteristica: "Neto do Mestre Makarov",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 87,
      defesa: 85,
      energia: 94,
      habilidade: 88,
    },
  },

  {
    id: 32,
    name: "SAGA DE GÊMEOS",
    category: "Os Zavaleiros do Zodíaco",
    image: "img/Os-Cavaleiros-do-Zodíaco/Saga-1.png",
    description:
      "Cavaleiro de Ouro de Gêmeos, antigo patriarca do Santuário que possui o poder de manipular o espaço e a dimensão.",
    details: {
      universo: "Saint Seiya",
      poder: "Outra Dimensão, Explosão Galáctica",
      status: "Redimido/Falecido",
      estreia: 1986,
      titulo: "Cavaleiro de Ouro de Gêmeos",
      caracteristica: "Manipulação Dimensional",
      nivel: "S+",
    },
    stats: {
      forca: 95,
      velocidade: 92,
      defesa: 90,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 33,
    name: "SKULL KNIGHT",
    category: "Berserk",
    image: "img/Berserk/Skull Knight-1.png",
    description:
      "Entidade enigmática que vagueia pelo mundo, opondo-se à Mão de Deus e auxiliando Guts em sua jornada.",
    details: {
      universo: "Berserk",
      poder: "Espada da Ativação, Premonições",
      status: "Ativo - Viajante Dimensional",
      estreia: 1990,
      titulo: "O Cavaleiro Crânio",
      caracteristica: "Opositor da Mão de Deus",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 88,
      defesa: 90,
      energia: 95,
      habilidade: 93,
    },
  },

  {
    id: 34,
    name: "ENJIN",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Enjin -1s.png",
    description:
      "Personagem do mundo árido de Gachiakuta, com habilidades únicas adaptadas ao ambiente hostil em que vive.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades Específicas do Mundo",
      status: "Ativo",
      estreia: 2022,
      afiliacao: "Mundo de Gachiakuta",
      caracteristica: "Adaptação ao Ambiente",
      nivel: "B+",
    },
    stats: {
      forca: 75,
      velocidade: 80,
      defesa: 72,
      energia: 78,
      habilidade: 82,
    },
  },

  {
    id: 35,
    name: "LOKI",
    category: "One-Piece",
    image: "img/One-Piece/Loki-5.png",
    description:
      "Deus da Trapaça da mitologia nórdica, que faz aparições no mundo de One Piece como uma figura divina.",
    details: {
      universo: "One Piece",
      poder: "Poderes Divinos, Ilusão",
      status: "Ativo - Entidade Divina",
      estreia: 1997,
      titulo: "Deus da Trapaça",
      caracteristica: "Mestre das Ilusões",
      nivel: "S",
    },
    stats: {
      forca: 95,
      velocidade: 88,
      defesa: 92,
      energia: 90,
      habilidade: 95,
    },
  },

  {
    id: 36,
    name: "ESTAROSSA",
    category: "Nanatsu",
    image: "img/Taizai/estarossa-1.png",
    description:
      "Comandante dos Dez Mandamentos portador do Mandamento do Amor, cuja verdadeira identidade esconde um trágico destino.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Mandamento do Amor, Full Counter",
      status: "Transformado em Mael",
      estreia: 2014,
      afiliacao: "Dez Mandamentos",
      caracteristica: "Identidade Dupla",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 86,
      energia: 90,
      habilidade: 87,
    },
  },

  {
    id: 37,
    name: "FEITAN PORTOR",
    category: "HXH",
    image: "img/hxh/Feitan-1.png",
    description:
      "Membro da Tropa Fantasma, especialista em interrogatório e usuário da habilidade Pain Packer que converte dor em poder.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Pain Packer, Rising Sun",
      status: "Ativo - Membro da Tropa Fantasma",
      estreia: 1999,
      afiliacao: "Phantom Troupe",
      caracteristica: "Conversor de Dor",
      nivel: "A+",
    },
    stats: {
      forca: 82,
      velocidade: 95,
      defesa: 78,
      energia: 85,
      habilidade: 92,
    },
  },

  {
    id: 38,
    name: "KOKUSHIBO",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/Kokushibo-1.png",
    description:
      "Lua Superior 1, irmão de Yoriichi Tsugikuni que se tornou demônio em busca de superar seu próprio irmão.",
    details: {
      universo: "Kimetsu no Yaiba",
      poder: "Respiração da Lua, Regeneração Demoníaca",
      status: "Derrotado",
      estreia: 2016,
      titulo: "Lua Superior 1",
      caracteristica: "Irmão de Yoriichi",
      nivel: "S+",
    },
    stats: {
      forca: 95,
      velocidade: 92,
      defesa: 90,
      energia: 94,
      habilidade: 96,
    },
  },

  {
    id: 39,
    name: "BATTLE BEAST",
    category: "Invencível",
    image: "img/Invencível/Battle Beast-4.png",
    description:
      "Guerreiro leão alienígena que busca oponentes dignos em batalha, considerado um dos lutadores mais habilidosos do universo.",
    details: {
      universo: "Invincible",
      poder: "Força Sobre-humana, Habilidades de Batalha",
      status: "Falecido em Combate",
      estreia: 2004,
      titulo: "A Fera da Batalha",
      caracteristica: "Buscador de Desafios",
      nivel: "S",
    },
    stats: {
      forca: 96,
      velocidade: 85,
      defesa: 94,
      energia: 90,
      habilidade: 88,
    },
  },

  {
    id: 40,
    name: "KAKUZU",
    category: "Naruto",
    image: "img/Naruto/Kakuzu-1.png",
    description:
      "Membro da Akatsuki imortal que possui cinco corações e pode utilizar múltiplas naturezas de chakra simultaneamente.",
    details: {
      universo: "Naruto",
      poder: "Jiongu (Técnica de Fios), Múltiplos Corações",
      status: "Derrotado",
      estreia: 2002,
      afiliacao: "Akatsuki",
      caracteristica: "Cinco Corações",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 80,
      defesa: 92,
      energia: 95,
      habilidade: 85,
    },
  },

  {
    id: 41,
    name: "BLAST",
    category: "One Punch Man",
    image: "img/One-Punch-Man/blast-1.png",
    description:
      "Herói Classe S Rank 1, um enigmático herói que raramente aparece mas possui poder suficiente para enfrentar ameaças de nível divino.",
    details: {
      universo: "One Punch Man",
      poder: "Manipulação Espacial, Velocidade Extrema",
      status: "Ativo - Herói Classe S",
      estreia: 2015,
      titulo: "Rank 1 Classe S",
      caracteristica: "Herói Enigmático",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 96,
      defesa: 92,
      energia: 95,
      habilidade: 93,
    },
  },

  {
    id: 42,
    name: "BENIMARU SHINMON",
    category: "Fire Force",
    image: "img/Fire Force/benimaru-1.png",
    description:
      "Capitão da 7ª Companhia do Corpo de Bombeiros Especiais, conhecido como o 'Homem Mais Forte de Asakusa'.",
    details: {
      universo: "Fire Force",
      poder: "Chamas de Exorcismo e Assassino",
      status: "Ativo - Capitão",
      estreia: 2016,
      titulo: "Homem Mais Forte de Asakusa",
      caracteristica: "Dualidade de Chamas",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 88,
      defesa: 85,
      energia: 92,
      habilidade: 94,
    },
  },

  {
    id: 43,
    name: "BROLY",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/Broly-3.png",
    description:
      "O Lendário Super Saiyajin, um guerreiro com poder de crescimento infinito cuja força aumenta exponencialmente durante a batalha.",
    details: {
      universo: "Dragon Ball",
      poder: "Lendário Super Saiyajin, Poder Crescente",
      status: "Ativo - Guerreiro Saiyajin",
      estreia: 1993,
      titulo: "Lendário Super Saiyajin",
      caracteristica: "Poder Infinito",
      nivel: "S+",
    },
    stats: {
      forca: 99,
      velocidade: 85,
      defesa: 97,
      energia: 100,
      habilidade: 80,
    },
  },

  {
    id: 44,
    name: "ERZA SCARLET",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Erza Scarlet-1.png",
    description:
      "Mago da Armadura da Fairy Tail, famosa por sua vasta coleção de armaduras mágicas e habilidades de requip.",
    details: {
      universo: "Fairy Tail",
      poder: "Requip - Armadura Mágica",
      status: "Ativo - Mago da Fairy Tail",
      estreia: 2009,
      afiliacao: "Fairy Tail",
      caracteristica: "Rainha das Armaduras",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 82,
      defesa: 92,
      energia: 90,
      habilidade: 95,
    },
  },

  {
    id: 45,
    name: "THRAGG",
    category: "Invencível",
    image: "img/Invencível/Thragg-3.png",
    description:
      "Líder supremo dos Viltrumitas e o guerreiro mais forte de sua espécie, determinado a restaurar o império Viltrumita.",
    details: {
      universo: "Invincible",
      poder: "Força Viltrumita, Voo, Durabilidade",
      status: "Derrotado",
      estreia: 2004,
      titulo: "Líder dos Viltrumitas",
      caracteristica: "Supremo Guerreiro",
      nivel: "S+",
    },
    stats: {
      forca: 98,
      velocidade: 94,
      defesa: 96,
      energia: 97,
      habilidade: 92,
    },
  },

  {
    id: 46,
    name: "DIO BRANDO",
    category: "jojo",
    image: "img/Jojo/Dio-1.png",
    description:
      "Vampiro imortal e usuário do Stand The World, principal antagonista das Partes 1 e 3 de JoJo's Bizarre Adventure.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand The World, Vampirismo, Congelamento",
      status: "Derrotado",
      estreia: 1987,
      titulo: "Lord Vampiro",
      caracteristica: "Parada no Tempo",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 95,
      defesa: 90,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 47,
    name: "JIREN",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/Jiren-1.png",
    description:
      "Guerreiro do Universo 11 e membro do Pride Troopers, considerado o lutador mais forte entre todos os universos.",
    details: {
      universo: "Dragon Ball Super",
      poder: "Puro Poder, Meditação",
      status: "Ativo - Pride Trooper",
      estreia: 2017,
      afiliacao: "Pride Troopers",
      caracteristica: "Poder Puro Absoluto",
      nivel: "S+",
    },
    stats: {
      forca: 98,
      velocidade: 92,
      defesa: 97,
      energia: 99,
      habilidade: 90,
    },
  },

  {
    id: 48,
    name: "AKAINU",
    category: "One-Piece",
    image: "img/One-Piece/akainu-1.png",
    description:
      "Almirante da Marinha e posteriormente Almirante-da-Frota, usuário da Akuma no Mi Magu Magu no Mi.",
    details: {
      universo: "One Piece",
      poder: "Magu Magu no Mi (Fruta do Magma)",
      status: "Ativo - Almirante-da-Frota",
      estreia: 1999,
      afiliacao: "Marinha",
      caracteristica: "Justiça Absoluta",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 85,
      defesa: 92,
      energia: 95,
      habilidade: 88,
    },
  },

  {
    id: 49,
    name: "YHWACH",
    category: "Bleach",
    image: "img/Bleach/yhwach-1.png",
    description:
      "Rei dos Quincy e principal antagonista de Bleach, com a habilidade de ver e alterar todos os futuros possíveis.",
    details: {
      universo: "Bleach",
      poder: "The Almighty, Absorção de Poderes",
      status: "Derrotado/Selado",
      estreia: 2012,
      titulo: "Rei dos Quincy",
      caracteristica: "Visão do Futuro",
      nivel: "S+",
    },
    stats: {
      forca: 97,
      velocidade: 90,
      defesa: 94,
      energia: 100,
      habilidade: 98,
    },
  },

  {
    id: 50,
    name: "KANON DE GÊMEOS",
    category: "Os Zavaleiros do Zodíaco",
    image: "img/Os-Cavaleiros-do-Zodíaco/kanon-1.png",
    description:
      "Cavaleiro de Ouro de Gêmeos, irmão gêmeo de Saga que inicialmente serve como antagonista mas posteriormente se redime.",
    details: {
      universo: "Saint Seiya",
      poder: "Outra Dimensão, Explosão Galáctica",
      status: "Redimido",
      estreia: 1988,
      titulo: "Cavaleiro de Ouro de Gêmeos",
      caracteristica: "Irmão Gêmeo de Saga",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 90,
      defesa: 88,
      energia: 94,
      habilidade: 91,
    },
  },

  {
    id: 51,
    name: "MALENIA, A LÂMINA DE MIQUELLA",
    category: "souls",
    image: "img/souls/Malenia-3.png",
    description:
      "Guerreira mais poderosa de Elden Ring, irmã gêmea de Miquella e portadora da Podridão Escarlate.",
    details: {
      universo: "Elden Ring",
      poder: "Podridão Escarlate, Espada Protética",
      status: "Derrotada/Chefe",
      estreia: 2022,
      titulo: "Lâmina de Miquella",
      caracteristica: "Nunca Derrotada (até então)",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 97,
      defesa: 85,
      energia: 92,
      habilidade: 99,
    },
  },

  {
    id: 52,
    name: "A - QUARTO RAIKAGE",
    category: "Naruto",
    image: "img/Naruto/Raikage-1.png",
    description:
      "Quarto Raikage da Vila da Nuvem, conhecido por sua velocidade e força incomparáveis, além de sua liderança firme.",
    details: {
      universo: "Naruto",
      poder: "Estilo de Relâmpago, Força Física",
      status: "Ativo - Raikage",
      estreia: 2008,
      titulo: "Quarto Raikage",
      caracteristica: "Velocidade Relâmpago",
      nivel: "S",
    },
    stats: {
      forca: 94,
      velocidade: 96,
      defesa: 90,
      energia: 92,
      habilidade: 85,
    },
  },

  {
    id: 53,
    name: "GAJEEL REDFOX",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Gajeel-Redfox-1.png",
    description:
      "Mago do Ferro Dragon Slayer da Fairy Tail, conhecido por sua personalidade rude e habilidades de manipulação de metal.",
    details: {
      universo: "Fairy Tail",
      poder: "Magia de Dragon Slayer do Ferro",
      status: "Ativo - Mago da Fairy Tail",
      estreia: 2009,
      afiliacao: "Fairy Tail",
      caracteristica: "Manipulação de Metal",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 80,
      defesa: 95,
      energia: 88,
      habilidade: 84,
    },
  },

  {
    id: 54,
    name: "CORVUS",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Corvus-1.png",
    description:
      "Personagem do universo de Gachiakuta, possuindo habilidades únicas adaptadas ao ambiente desolador do mundo da série.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades Específicas do Mundo",
      status: "Ativo",
      estreia: 2022,
      afiliacao: "Mundo de Gachiakuta",
      caracteristica: "Adaptação Extrema",
      nivel: "B+",
    },
    stats: {
      forca: 78,
      velocidade: 82,
      defesa: 75,
      energia: 80,
      habilidade: 85,
    },
  },

  {
    id: 55,
    name: "TOJI FUSHIGURO",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/fushiguro toji-2.png",
    description:
      "O Assassino Sem Energia Amaldiçoada, conhecido como 'O Exterminador de Feiticeiros'.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Corpo Celestial, Arsenal de Armas Amaldiçoadas",
      status: "Falecido",
      estreia: 2018,
      titulo: "Exterminador de Feiticeiros",
      caracteristica: "Sem Energia Amaldiçoada",
      nivel: "S",
    },
    stats: {
      forca: 94,
      velocidade: 98,
      defesa: 88,
      energia: 85,
      habilidade: 96,
    },
  },

  {
    id: 56,
    name: "GON FREECSS",
    category: "HXH",
    image: "img/hxh/Gon-1.png",
    description:
      "Protagonista de Hunter x Hunter, um jovem determinado a se tornar um Hunter como seu pai.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen (Reforço), Jajanken",
      status: "Ativo - Hunter",
      estreia: 1998,
      titulo: "Hunter Promissor",
      caracteristica: "Determinação Absoluta",
      nivel: "S (pico)",
    },
    stats: {
      forca: 90,
      velocidade: 88,
      defesa: 82,
      energia: 95,
      habilidade: 85,
    },
  },

  {
    id: 57,
    name: "OGUN MONTGOMERY",
    category: "Fire Force",
    image: "img/Fire Force/Ogun Montgomery-1.png",
    description:
      "Membro da 4ª Companhia do Corpo de Bombeiros Especiais, usuário da terceira geração de poderes pirocinéticos.",
    details: {
      universo: "Fire Force",
      poder: "Manipulação de Metal Quente, Criação de Armas",
      status: "Ativo - Bombeiro Especial",
      estreia: 2016,
      afiliacao: "4ª Companhia",
      caracteristica: "Manipulação de Metal",
      nivel: "A+",
    },
    stats: {
      forca: 85,
      velocidade: 82,
      defesa: 80,
      energia: 84,
      habilidade: 90,
    },
  },

  {
    id: 58,
    name: "RAIDEN TAMEEMON",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Raiden-1.png",
    description:
      "Lutador de sumô lendário representando a humanidade no Ragnarok, conhecido por sua força bruta.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Técnicas de Sumô, Força Sobre-humana",
      status: "Participante do Ragnarok",
      estreia: 2021,
      titulo: "Lendário Lutador de Sumô",
      caracteristica: "Força Bruta Pura",
      nivel: "S",
    },
    stats: {
      forca: 98,
      velocidade: 75,
      defesa: 92,
      energia: 90,
      habilidade: 88,
    },
  },

  {
    id: 59,
    name: "GAROU",
    category: "One Punch Man",
    image: "img/One-Punch-Man/Garou-2.png",
    description:
      "O Herói Caçador, um discípulo das artes marciais que busca se tornar o monstro perfeito.",
    details: {
      universo: "One Punch Man",
      poder: "Estilo de Luta Monstro, Adaptação em Batalha",
      status: "Reabilitado",
      estreia: 2012,
      titulo: "Herói Caçador",
      caracteristica: "Evolução em Batalha",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 96,
      defesa: 90,
      energia: 92,
      habilidade: 98,
    },
  },

  {
    id: 60,
    name: "OMNI-MAN",
    category: "Invencível",
    image: "img/Invencível/omni man-1.png",
    description:
      "Pai de Mark Grayson, um Viltrumita enviado à Terra para preparar o planeta para a conquista Viltrumita.",
    details: {
      universo: "Invincible",
      poder: "Força Viltrumita, Voo, Durabilidade",
      status: "Redimido/Exilado",
      estreia: 2003,
      titulo: "O Viltrumita Original",
      caracteristica: "Pai Protetor",
      nivel: "S+",
    },
    stats: {
      forca: 97,
      velocidade: 95,
      defesa: 96,
      energia: 94,
      habilidade: 90,
    },
  },

  {
    id: 61,
    name: "SOUL OF CINDER",
    category: "souls",
    image: "img/souls/Soul of Cinder-1.png",
    description:
      "Manifestação física de todos os Lordes das Cinzas que já ligaram a Primeira Chama, chefe final de Dark Souls III.",
    details: {
      universo: "Dark Souls III",
      poder: "Múltiplas Armas e Estilos de Luta, Magia de Chama",
      status: "Chefe Final",
      estreia: 2016,
      titulo: "Manifestação dos Lordes",
      caracteristica: "Soma de Todos os Guerreiros",
      nivel: "S+",
    },
    stats: {
      forca: 95,
      velocidade: 88,
      defesa: 92,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 62,
    name: "ESCANOR",
    category: "Nanatsu",
    image: "img/Taizai/escanor-2.png",
    description:
      "O Leão do Orgulho dos Sete Pecados Capitais, cujo poder aumenta drasticamente ao meio-dia.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Sunshine, Força Crescente com o Sol",
      status: "Falecido",
      estreia: 2014,
      titulo: "Leão do Orgulho",
      caracteristica: "Poder Solar Crescente",
      nivel: "S+ (ao meio-dia)",
    },
    stats: {
      forca: 99,
      velocidade: 85,
      defesa: 90,
      energia: 95,
      habilidade: 82,
    },
  },

  {
    id: 63,
    name: "NARUTO UZUMAKI",
    category: "Naruto",
    image: "img/Naruto/naruto-1.png",
    description:
      "Sétimo Hokage da Vila da Folha, portador do Chakra da Raposa de Nove Caudas e salvador do Mundo Shinobi.",
    details: {
      universo: "Naruto",
      poder: "Modo Sábio dos Seis Caminhos, Kurama, Rasengan",
      status: "Ativo - Hokage",
      estreia: 1999,
      titulo: "Sétimo Hokage",
      caracteristica: "Portador do Kurama",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 96,
      defesa: 90,
      energia: 99,
      habilidade: 92,
    },
  },

  {
    id: 64,
    name: "EDWARD NEWGATE - BARBA BRANCA",
    category: "One-Piece",
    image: "img/One-Piece/barba branca-1.png",
    description:
      "Conhecido como 'O Homem Mais Forte do Mundo', capitão dos Piratas do Barba Branca.",
    details: {
      universo: "One Piece",
      poder: "Gura Gura no Mi (Fruta do Terremoto), Haki",
      status: "Falecido",
      estreia: 1997,
      recompensa: "฿5,046,000,000",
      caracteristica: "Homem Mais Forte do Mundo",
      nivel: "S+",
    },
    stats: {
      forca: 99,
      velocidade: 85,
      defesa: 96,
      energia: 98,
      habilidade: 90,
    },
  },

  {
    id: 65,
    name: "IRENE BELSERION",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Irene Belserion-1.png",
    description:
      "Rainha das Dragões, uma das fundadoras da guilda Fairy Tail e mãe de Erza Scarlet.",
    details: {
      universo: "Fairy Tail",
      poder: "Alto Encantamento, Magia de Dragon Slayer",
      status: "Falecida",
      estreia: 2016,
      titulo: "Rainha das Dragões",
      caracteristica: "Mestre do Encantamento",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 88,
      defesa: 90,
      energia: 96,
      habilidade: 98,
    },
  },

  {
    id: 66,
    name: "TOMURA SHIGARAKI",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Tomura Shigaraki-1.png",
    description:
      "Líder da Liga dos Vilões e sucessor de All For One, possuindo a capacidade de desintegrar qualquer coisa.",
    details: {
      universo: "My Hero Academia",
      poder: "Decay (Desintegração), All For One",
      status: "Ativo - Líder da Liga",
      estreia: 2015,
      afiliacao: "Liga dos Vilões",
      caracteristica: "Desintegração Completa",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 88,
      defesa: 85,
      energia: 95,
      habilidade: 92,
    },
  },

  {
    id: 67,
    name: "JOHNNY JOESTAR",
    category: "jojo",
    image: "img/Jojo/Johnny Joestar-1.png",
    description:
      "Protagonista da Parte 7: Steel Ball Run, um jóquei paraplégico que desenvolve o Stand Tusk.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand Tusk, Técnica da Roda",
      status: "Ativo - Jóquei",
      estreia: 2004,
      titulo: "Portador do Tusk",
      caracteristica: "Técnica da Roda Dourada",
      nivel: "S",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 78,
      energia: 88,
      habilidade: 94,
    },
  },

  {
    id: 68,
    name: "GUITA",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Guita-1.png",
    description:
      "Personagem do mundo distópico de Gachiakuta, possuindo habilidades adaptadas ao ambiente hostil.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades Específicas do Mundo",
      status: "Ativo",
      estreia: 2022,
      afiliacao: "Mundo de Gachiakuta",
      caracteristica: "Sobrevivente Adaptado",
      nivel: "B",
    },
    stats: {
      forca: 72,
      velocidade: 75,
      defesa: 70,
      energia: 74,
      habilidade: 78,
    },
  },

  {
    id: 69,
    name: "MAKI ZENIN",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Maki-1.png",
    description:
      "Feiticeira jujutsu que obtém um corpo celestial sem energia amaldiçoada, tornando-se igual a Toji Fushiguro.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Corpo Celestial, Percepção Aprimorada",
      status: "Ativo - Feiticeira",
      estreia: 2018,
      afiliacao: "Clã Zenin",
      caracteristica: "Corpo Celestial Perfeito",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 96,
      defesa: 86,
      energia: 84,
      habilidade: 94,
    },
  },

  {
    id: 70,
    name: "IKKI DE FÊNIX",
    category: "Os Zavaleiros do Zodíaco",
    image: "img/Os-Cavaleiros-do-Zodíaco/Ikki-1.png",
    description:
      "Cavaleiro de Bronze de Fênix, conhecido por renascer mais forte após cada derrota.",
    details: {
      universo: "Saint Seiya",
      poder: "Ilusões, Renascimento, Fênix Genma Ken",
      status: "Ativo - Cavaleiro de Bronze",
      estreia: 1986,
      titulo: "Cavaleiro de Fênix",
      caracteristica: "Renascimento Contínuo",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 92,
      defesa: 85,
      energia: 95,
      habilidade: 94,
    },
  },

  {
    id: 71,
    name: "SAITAMA",
    category: "One Punch Man",
    image: "img/One-Punch-Man/Saitama-1.png",
    description:
      "Herói por Hobby da Classe B, capaz de derrotar qualquer oponente com um único soco.",
    details: {
      universo: "One Punch Man",
      poder: "Força Infinita, Velocidade, Invulnerabilidade",
      status: "Ativo - Herói",
      estreia: 2009,
      titulo: "Herói por Hobby",
      caracteristica: "Quebra de Limites",
      nivel: "EX",
    },
    stats: {
      forca: 100,
      velocidade: 100,
      defesa: 100,
      energia: 100,
      habilidade: 70,
    },
  },

  {
    id: 72,
    name: "APOLO",
    category: "Shuumatsu",
    image: "img/Shuumatsu/apolo-1.png",
    description:
      "Deus grego do sol, música, poesia e profecia, representante dos deuses no Ragnarok.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Manipulação de Luz, Profecia, Arco Solar",
      status: "Participante do Ragnarok",
      estreia: 2023,
      titulo: "Deus do Sol",
      caracteristica: "Beleza e Luz Divina",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 95,
      defesa: 88,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 73,
    name: "AMBESSA MEDARDA",
    category: "League of Legend",
    image: "img/lol/Ambessa-1.png",
    description:
      "Matriarca da casa Medarda e uma das figuras mais temidas de Noxus.",
    details: {
      universo: "League of Legends/Arcane",
      poder: "Força, Liderança, Estratégia Militar",
      status: "Ativa - Matriarca",
      estreia: 2021,
      titulo: "Matriarca de Medarda",
      caracteristica: "Estrategista Implacável",
      nivel: "A+",
    },
    stats: {
      forca: 88,
      velocidade: 75,
      defesa: 85,
      energia: 82,
      habilidade: 90,
    },
  },

  {
    id: 74,
    name: "PAIN/NAGATO",
    category: "Naruto",
    image: "img/Naruto/Pain-1.png",
    description:
      "Líder da Akatsuki e usuário do Rinnegan, capaz de controlar seis corpos diferentes.",
    details: {
      universo: "Naruto",
      poder: "Rinnegan, Seis Caminhos da Dor",
      status: "Falecido",
      estreia: 2005,
      afiliacao: "Akatsuki",
      caracteristica: "Seis Caminhos",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 88,
      defesa: 85,
      energia: 97,
      habilidade: 95,
    },
  },

  {
    id: 75,
    name: "KASHIMO HAJIME",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/hajime-1.png",
    description:
      "Feiticeiro jujutsu da Era de Ouro conhecido como 'Deus do Relâmpago'.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Técnica Amaldiçoada: Eletricidade",
      status: "Falecido",
      estreia: 2021,
      titulo: "Deus do Relâmpago",
      caracteristica: "Eletricidade Pura",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 96,
      defesa: 82,
      energia: 92,
      habilidade: 90,
    },
  },

  {
    id: 76,
    name: "MELIODAS",
    category: "Nanatsu",
    image: "img/Taizai/Meliodas-1.png",
    description:
      "Líder dos Sete Pecados Capitais e portador do Pecado da Ira, filho do Rei Demônio.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Poder Demoniaco, Full Counter",
      status: "Ativo - Rei de Liones",
      estreia: 2012,
      titulo: "Líder dos Pecados",
      caracteristica: "Poder Demoniaco Total",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 94,
      defesa: 92,
      energia: 95,
      habilidade: 93,
    },
  },

  {
    id: 77,
    name: "SHOTO TODOROKI",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Todoroki shoto-1.png",
    description:
      "Herói em treinamento da U.A., possuindo a habilidade Quirk de gerar gelo e fogo.",
    details: {
      universo: "My Hero Academia",
      poder: "Half-Cold Half-Hot (Meio-Frio Meio-Quente)",
      status: "Ativo - Estudante",
      estreia: 2014,
      afiliacao: "U.A. High School",
      caracteristica: "Dualidade de Elementos",
      nivel: "A+",
    },
    stats: {
      forca: 86,
      velocidade: 82,
      defesa: 84,
      energia: 90,
      habilidade: 92,
    },
  },

  {
    id: 78,
    name: "KAIDO",
    category: "One-Piece",
    image: "img/One-Piece/Kaido-4.png",
    description:
      "Governador-Geral das Feras e um dos Quatro Imperadores, conhecido como 'A Criatura Mais Forte do Mundo'.",
    details: {
      universo: "One Piece",
      poder: "Uo Uo no Mi, Modelo: Dragão Azul, Haki",
      status: "Derrotado",
      estreia: 2011,
      recompensa: "฿4,611,100,000",
      caracteristica: "Criatura Mais Forte",
      nivel: "S+",
    },
    stats: {
      forca: 99,
      velocidade: 85,
      defesa: 98,
      energia: 97,
      habilidade: 88,
    },
  },

  {
    id: 79,
    name: "SATAN SOUL",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/Satan Soul-1.png",
    description:
      "Forma de Take Over utilizada por Mirajane Strauss que lhe permite assumir características de demônios.",
    details: {
      universo: "Fairy Tail",
      poder: "Take Over: Satan Soul",
      status: "Ativo - Mago da Fairy Tail",
      estreia: 2009,
      afiliacao: "Fairy Tail",
      caracteristica: "Transformação Demoníaca",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 86,
      defesa: 88,
      energia: 92,
      habilidade: 89,
    },
  },

  {
    id: 80,
    name: "DARKEATER MIDIR",
    category: "souls",
    image: "img/souls/Darkeater Midir-1.png",
    description:
      "Dragão ancestral que consome a escuridão, um dos últimos descendentes dos dragões imortais.",
    details: {
      universo: "Dark Souls III",
      poder: "Fogo Negro, Resistência Extrema",
      status: "Chefe",
      estreia: 2017,
      titulo: "Dragão das Trevas",
      caracteristica: "Consumidor de Escuridão",
      nivel: "S+",
    },
    stats: {
      forca: 98,
      velocidade: 78,
      defesa: 99,
      energia: 96,
      habilidade: 80,
    },
  },

  {
    id: 81,
    name: "KEN RYUGUJI (DRAKEN)",
    category: "tokyo",
    image: "img/tokyo-revengers/draken-2.png",
    description:
      "Vice-Líder dos Tokyo Manji Gang, conhecido por sua habilidade de combate e lealdade inabalável.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Combate Corpo a Corpo, Liderança",
      status: "Falecido",
      estreia: 2017,
      afiliacao: "Tokyo Manji Gang",
      caracteristica: "Vice-Líder Leal",
      nivel: "A+",
    },
    stats: {
      forca: 85,
      velocidade: 82,
      defesa: 84,
      energia: 86,
      habilidade: 88,
    },
  },

  {
    id: 82,
    name: "HISOKA MOROW",
    category: "HXH",
    image: "img/hxh/Hisoka-1.png",
    description:
      "Mago e Hunter que vive para encontrar oponentes dignos, usuário das habilidades Bungee Gum.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Bungee Gum, Texture Surprise",
      status: "Ativo - Hunter",
      estreia: 1998,
      afiliacao: "Independente",
      caracteristica: "Caçador de Talentos",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 92,
      defesa: 84,
      energia: 90,
      habilidade: 96,
    },
  },

  {
    id: 83,
    name: "ZODYL",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Zodyl-1.png",
    description:
      "Personagem do universo de Gachiakuta, envolvido nas complexas relações de poder e sobrevivência.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades Específicas do Mundo",
      status: "Ativo",
      estreia: 2022,
      afiliacao: "Mundo de Gachiakuta",
      caracteristica: "Sobrevivente Urbano",
      nivel: "B",
    },
    stats: {
      forca: 74,
      velocidade: 78,
      defesa: 72,
      energia: 76,
      habilidade: 80,
    },
  },

  {
    id: 84,
    name: "KOJIRO SASAKI",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Kojiro Sasaki-1.png",
    description:
      "Conhecido como 'O Maior Espadachim', representa a humanidade no Ragnarok.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Tsubame Gaeshi, Análise de Estilos",
      status: "Participante do Ragnarok",
      estreia: 2021,
      titulo: "Maior Espadachim",
      caracteristica: "Técnica Perfeita",
      nivel: "S",
    },
    stats: {
      forca: 85,
      velocidade: 90,
      defesa: 82,
      energia: 88,
      habilidade: 99,
    },
  },

  {
    id: 85,
    name: "SON GOHAN",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/gohan-1.png",
    description:
      "Filho mais velho de Goku, possuindo potencial latente maior que qualquer outro Saiyajin.",
    details: {
      universo: "Dragon Ball",
      poder: "Potential Unleashed, Ultimate Form",
      status: "Ativo - Estudioso/Guerreiro",
      estreia: 1989,
      titulo: "Portador do Potencial",
      caracteristica: "Potencial Ilimitado",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 92,
      defesa: 88,
      energia: 97,
      habilidade: 90,
    },
  },

  {
    id: 86,
    name: "ALLEN, O ALIENÍGENA",
    category: "Invencível",
    image: "img/Invencível/allen-1.png",
    description:
      "Alien da Coalizão que auxilia os Viltrumitas, conhecido por sua tecnologia avançada.",
    details: {
      universo: "Invincible",
      poder: "Tecnologia Alienígena, Adaptação",
      status: "Ativo - Membro da Coalizão",
      estreia: 2004,
      afiliacao: "Coalizão",
      caracteristica: "Tecnologia Avançada",
      nivel: "B+",
    },
    stats: {
      forca: 75,
      velocidade: 80,
      defesa: 78,
      energia: 82,
      habilidade: 85,
    },
  },

  {
    id: 87,
    name: "GYRO ZEPPELI",
    category: "jojo",
    image: "img/Jojo/gyro-zeppeli-1.png",
    description:
      "Cavaleiro de Steel Ball Run e mestre da Técnica da Roda, que compete na corrida para salvar seu país.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Steel Balls, Técnica da Roda",
      status: "Falecido",
      estreia: 2004,
      titulo: "Mestre da Roda",
      caracteristica: "Técnica da Roda",
      nivel: "A+",
    },
    stats: {
      forca: 84,
      velocidade: 86,
      defesa: 80,
      energia: 85,
      habilidade: 92,
    },
  },

  {
    id: 88,
    name: "SASORI",
    category: "Naruto",
    image: "img/Naruto/Sasori-1.png",
    description:
      "Membro da Akatsuki conhecido como 'Sasori da Areia Vermelha', mestre de marionetes.",
    details: {
      universo: "Naruto",
      poder: "Marionetes, Venenos, Corpo de Marionete",
      status: "Derrotado",
      estreia: 2005,
      afiliacao: "Akatsuki",
      caracteristica: "Mestre de Marionetes",
      nivel: "S",
    },
    stats: {
      forca: 80,
      velocidade: 82,
      defesa: 85,
      energia: 88,
      habilidade: 94,
    },
  },

  {
    id: 89,
    name: "K'SANTE",
    category: "League of Legend",
    image: "img/lol/k'sante-1.png",
    description:
      "O Orgulho de Nazumah, um caçador determinado a proteger sua cidade dos monstros do deserto.",
    details: {
      universo: "League of Legends",
      poder: "Armas Ntofos, Transformação",
      status: "Ativo - Protetor",
      estreia: 2022,
      titulo: "Orgulho de Nazumah",
      caracteristica: "Guardião do Deserto",
      nivel: "A+",
    },
    stats: {
      forca: 88,
      velocidade: 80,
      defesa: 92,
      energia: 85,
      habilidade: 86,
    },
  },

  {
    id: 90,
    name: "SUGURU GETO",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/suguru geto-1.png",
    description:
      "Ex-feiticeiro de grau especial e antigo melhor amigo de Satoru Gojo.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Manipulação de Maldições",
      status: "Falecido (corpo usurpado)",
      estreia: 2018,
      afiliacao: "Ex-Jujutsu High",
      caracteristica: "Colecionador de Maldições",
      nivel: "S",
    },
    stats: {
      forca: 86,
      velocidade: 84,
      defesa: 82,
      energia: 95,
      habilidade: 92,
    },
  },

  {
    id: 91,
    name: "SHANKS",
    category: "One-Piece",
    image: "img/One-Piece/Shaks-1.png",
    description:
      "Imperador do Mar e capitão dos Piratas do Ruivo, conhecido por sua influência no mundo.",
    details: {
      universo: "One Piece",
      poder: "Haki do Conquistador Avançado, Espadachim",
      status: "Ativo - Imperador",
      estreia: 1997,
      recompensa: "฿4,048,900,000",
      caracteristica: "Haki Supremo",
      nivel: "S+",
    },
    stats: {
      forca: 95,
      velocidade: 94,
      defesa: 90,
      energia: 96,
      habilidade: 98,
    },
  },

  {
    id: 92,
    name: "FUMIKAGE TOKOYAMI",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Fumikage Tokoyami-1.png",
    description:
      "Herói em treinamento da U.A. com a Quirk Dark Shadow, uma sombra viva.",
    details: {
      universo: "My Hero Academia",
      poder: "Dark Shadow (Sombra Escura)",
      status: "Ativo - Estudante",
      estreia: 2014,
      afiliacao: "U.A. High School",
      caracteristica: "Controle de Sombra",
      nivel: "A+",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 80,
      energia: 88,
      habilidade: 90,
    },
  },

  {
    id: 93,
    name: "MANJIRO SANO (MIKEY)",
    category: "tokyo",
    image: "img/tokyo-revengers/Makey-2.png",
    description:
      "Líder dos Tokyo Manji Gang, conhecido por sua velocidade e poder de chutes devastadores.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Velocidade Extrema, Chutes Poderosos",
      status: "Ativo - Líder",
      estreia: 2017,
      afiliacao: "Tokyo Manji Gang",
      caracteristica: "Líder Carismático",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 96,
      defesa: 85,
      energia: 88,
      habilidade: 92,
    },
  },

  {
    id: 94,
    name: "MERUEM",
    category: "HXH",
    image: "img/hxh/Meruem-1.png",
    description:
      "Rei das Formigas Quimera, criatura com inteligência e poder incomparáveis.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Força, Velocidade, Absorção de Habilidades",
      status: "Falecido",
      estreia: 2011,
      titulo: "Rei das Formigas",
      caracteristica: "Evolução Rápida",
      nivel: "S+",
    },
    stats: {
      forca: 98,
      velocidade: 95,
      defesa: 96,
      energia: 97,
      habilidade: 94,
    },
  },

  {
    id: 95,
    name: "SIMO HÄYHÄ",
    category: "Shuumatsu",
    image: "img/Shuumatsu/simo häyhä-1.png",
    description:
      "Conhecido como 'A Morte Branca', atirador de elite finlandês no Ragnarok.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Precisão Extrema, Camuflagem, Resistência",
      status: "Participante do Ragnarok",
      estreia: 2023,
      titulo: "A Morte Branca",
      caracteristica: "Atirador de Elite",
      nivel: "S",
    },
    stats: {
      forca: 80,
      velocidade: 85,
      defesa: 78,
      energia: 82,
      habilidade: 99,
    },
  },

  {
    id: 96,
    name: "AOI TODO",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Aoi todo-2.png",
    description:
      "Feiticeiro de grau 1 semi que luta com seu irmão adotivo, possuindo a técnica Boogie Woogie.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Boogie Woogie, Força Física",
      status: "Incapacitado",
      estreia: 2018,
      afiliacao: "Jujutsu High",
      caracteristica: "Troca de Posições",
      nivel: "A+",
    },
    stats: {
      forca: 90,
      velocidade: 84,
      defesa: 86,
      energia: 88,
      habilidade: 92,
    },
  },

  {
    id: 97,
    name: "LEONARDO BURNS",
    category: "Fire Force",
    image: "img/Fire Force/Leonardo Burns-1.png",
    description:
      "Capitão da 1ª Companhia do Corpo de Bombeiros Especiais, conhecido por suas chamas azuis.",
    details: {
      universo: "Fire Force",
      poder: "Chamas Azuis, Controle Preciso",
      status: "Ativo - Capitão",
      estreia: 2016,
      afiliacao: "1ª Companhia",
      caracteristica: "Chamas Azuis Purificadoras",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 85,
      defesa: 88,
      energia: 94,
      habilidade: 90,
    },
  },

  {
    id: 98,
    name: "BARTHOLOMEW KUMA",
    category: "One-Piece",
    image: "img/One-Piece/Kuma-1.png",
    description:
      "O Tirano, antigo Shichibukai e revolucionário transformado em ciborgue.",
    details: {
      universo: "One Piece",
      poder: "Ursus Ursus no Mi, Paw-Paw Fruit, Ciborgue",
      status: "Transformado em Arma",
      estreia: 2007,
      recompensa: "฿296,000,000",
      caracteristica: "Mãos que Repelam Tudo",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 85,
      defesa: 94,
      energia: 90,
      habilidade: 88,
    },
  },

  {
    id: 99,
    name: "KAZUTORA HANEMIYA",
    category: "tokyo",
    image: "img/tokyo-revengers/Kazutora Hanemiya-1.png",
    description:
      "Membro dos Tokyo Manji Gang com um passado traumático e lealdade conflituosa.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Combate Agressivo, Instabilidade",
      status: "Preso/Redimido",
      estreia: 2017,
      afiliacao: "Tokyo Manji Gang",
      caracteristica: "Conflito Interno",
      nivel: "B+",
    },
    stats: {
      forca: 80,
      velocidade: 82,
      defesa: 78,
      energia: 85,
      habilidade: 84,
    },
  },

  {
    id: 100,
    name: "BABY",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/baby-1.png",
    description:
      "Parasita Tuffle criado para vingar os Tuffles, capaz de possuir corpos e absorver energia.",
    details: {
      universo: "Dragon Ball GT",
      poder: "Possessão, Absorção de Energia",
      status: "Derrotado",
      estreia: 1997,
      afiliacao: "Tuffles",
      caracteristica: "Parasita Vingativo",
      nivel: "S",
    },
    stats: {
      forca: 85,
      velocidade: 88,
      defesa: 82,
      energia: 92,
      habilidade: 90,
    },
  },

  {
    id: 101,
    name: "OVERHAUL (KAI CHISAKI)",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/overhaul-1.png",
    description:
      "Líder da yakuza Shie Hassaikai e portador da Quirk Overhaul, permitindo-lhe desmontar e reconstruir matéria com um toque.",
    details: {
      universo: "My Hero Academia",
      poder: "Overhaul (Reconstrução)",
      status: "Preso",
      estreia: 2017,
      afiliacao: "Shie Hassaikai",
      caracteristica: "Reconstrução Molecular",
      nivel: "S",
    },
    stats: {
      forca: 85,
      velocidade: 80,
      defesa: 82,
      energia: 88,
      habilidade: 94,
    },
  },

  {
    id: 102,
    name: "ODIN",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Odin-1.png",
    description:
      "Pai dos deuses nórdicos e governante de Asgard, representante dos deuses no Ragnarok com poder sobre o destino e conhecimento.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Poder Divino, Conhecimento, Destino",
      status: "Participante do Ragnarok",
      estreia: 2023,
      titulo: "Pai dos Deuses",
      caracteristica: "Controle do Destino",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 90,
      defesa: 94,
      energia: 98,
      habilidade: 97,
    },
  },

  {
    id: 103,
    name: "SHISUI UCHIHA",
    category: "Naruto",
    image: "img/Naruto/Shisui-2.png",
    description:
      "Conhecido como 'Shisui, o Telepata', membro do clã Uchiha com o Mangekyō Sharingan mais avançado e a técnica Kotoamatsukami.",
    details: {
      universo: "Naruto",
      poder: "Kotoamatsukami, Body Flicker",
      status: "Falecido",
      estreia: 2005,
      afiliacao: "Clã Uchiha",
      caracteristica: "Telepatia Avançada",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 95,
      defesa: 84,
      energia: 90,
      habilidade: 96,
    },
  },

  {
    id: 104,
    name: "CHANDLER",
    category: "Nanatsu",
    image: "img/Taizai/chandler-1.png",
    description:
      "O Mago Supremo e servo do Rei Demônio, mestre de magia negra e professor de Meliodas durante sua juventude.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Magia Negra, Transformação",
      status: "Derrotado",
      estreia: 2016,
      titulo: "Mago Supremo",
      caracteristica: "Mestre de Magia Negra",
      nivel: "S",
    },
    stats: {
      forca: 86,
      velocidade: 82,
      defesa: 84,
      energia: 94,
      habilidade: 92,
    },
  },

  {
    id: 105,
    name: "TAKASHI MITSUYA (ANGRY)",
    category: "tokyo",
    image: "img/tokyo-revengers/Angry-1.png",
    description:
      "Membro dos Tokyo Manji Gang conhecido como 'Angry', irmão gêmeo de Smiley e vice-capitão da primeira divisão.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Combate Calmo e Calculista",
      status: "Ativo - Vice-Capitão",
      estreia: 2017,
      afiliacao: "Tokyo Manji Gang",
      caracteristica: "Controle Emocional",
      nivel: "B+",
    },
    stats: {
      forca: 78,
      velocidade: 80,
      defesa: 76,
      energia: 82,
      habilidade: 88,
    },
  },

  {
    id: 106,
    name: "MONKEY D. GARP",
    category: "One-Piece",
    image: "img/One-Piece/Garp-1.png",
    description:
      "O Herói da Marinha, avô de Luffy e pai de Dragon, conhecido por sua força lendária que rivaliza com a dos Piratas da Época de Ouro.",
    details: {
      universo: "One Piece",
      poder: "Haki Avançado, Força Física",
      status: "Ativo - Vice-Almirante",
      estreia: 1998,
      afiliacao: "Marinha",
      caracteristica: "Punhos de Aço",
      nivel: "S+",
    },
    stats: {
      forca: 98,
      velocidade: 85,
      defesa: 95,
      energia: 92,
      habilidade: 88,
    },
  },

  {
    id: 107,
    name: "DERIERI",
    category: "Nanatsu",
    image: "img/Taizai/Derieri-1.png",
    description:
      "Comandante dos Dez Mandamentos portadora do Mandamento da Piedade, especialista em combate corpo a corpo com ataques combinados.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Combo Star, Mandamento da Piedade",
      status: "Falecida",
      estreia: 2014,
      afiliacao: "Dez Mandamentos",
      caracteristica: "Especialista em Combos",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 88,
      defesa: 85,
      energia: 90,
      habilidade: 86,
    },
  },

  {
    id: 108,
    name: "TENGEN UZUI",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/uzui tengen-1.png",
    description:
      "Pilar do Som e ex-ninja, conhecido por suas técnicas musicais de combate e por ser o mais 'extravagante' dos Pilares.",
    details: {
      universo: "Kimetsu no Yaiba",
      poder: "Respiração do Som, Resistência a Veneno",
      status: "Aposentado",
      estreia: 2019,
      titulo: "Pilar do Som",
      caracteristica: "Estilo de Combate Musical",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 90,
      defesa: 85,
      energia: 87,
      habilidade: 89,
    },
  },

  {
    id: 109,
    name: "DABI (TOYA TODOROKI)",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Dabi-1.png",
    description:
      "Vilão da Liga dos Vilões e filho mais velho de Endeavor, portador da Quirk Cremation que produz chamas azuis superiores.",
    details: {
      universo: "My Hero Academia",
      poder: "Cremation (Chamas Azuis)",
      status: "Ativo - Vilão",
      estreia: 2016,
      afiliacao: "Liga dos Vilões",
      caracteristica: "Chamas Azuis Crematórias",
      nivel: "S",
    },
    stats: {
      forca: 85,
      velocidade: 82,
      defesa: 80,
      energia: 92,
      habilidade: 88,
    },
  },

  {
    id: 110,
    name: "MESSMER, O EMPALADOR",
    category: "souls",
    image: "img/souls/Messmer-1.png",
    description:
      "Filho da Deusa Marika e comandante da Expedição ao continente sombrio, portador de chamas sombrias e habilidades de empalamento.",
    details: {
      universo: "Elden Ring: Shadow of the Erdtree",
      poder: "Chamas Sombrias, Empalamento, Serpente",
      status: "Chefe",
      estreia: 2024,
      titulo: "O Empalador",
      caracteristica: "Portador das Chamas Sombrias",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 86,
      defesa: 92,
      energia: 95,
      habilidade: 90,
    },
  },

  {
    id: 111,
    name: "NEFERPITOU",
    category: "HXH",
    image: "img/hxh/Neferpitou-2.png",
    description:
      "Guarda Real das Formigas Quimera especializada em habilidades de médico e combate, possuindo o Nen mais refinado entre os Guardas.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Doctor Blythe, Terpsichora",
      status: "Derrotado",
      estreia: 2011,
      afiliacao: "Guarda Real",
      caracteristica: "Nen Médico Avançado",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 96,
      defesa: 88,
      energia: 92,
      habilidade: 94,
    },
  },

  {
    id: 112,
    name: "JIRAIYA",
    category: "Naruto",
    image: "img/Naruto/jiraiya-1.png",
    description:
      "Um dos Três Sannin Lendários, mestre de Naruto e autor da série 'Icha Icha', especialista em invocações e técnicas de selamento.",
    details: {
      universo: "Naruto",
      poder: "Modo Sábio, Invocações, Rasengan",
      status: "Falecido",
      estreia: 1999,
      titulo: "Sannin Lendário",
      caracteristica: "Mestre dos Sapos",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 88,
      defesa: 85,
      energia: 94,
      habilidade: 95,
    },
  },

  {
    id: 113,
    name: "FRIEZA",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/Freeza-1.png",
    description:
      "Imperador do universo e arqui-inimigo dos Saiyajins, possuindo múltiplas transformações e poderes cósmicos.",
    details: {
      universo: "Dragon Ball",
      poder: "Formas de Transformação, Poderes Cósmicos",
      status: "Ativo - Imperador",
      estreia: 1990,
      titulo: "Imperador do Universo",
      caracteristica: "Transformações Múltiplas",
      nivel: "S+",
    },
    stats: {
      forca: 95,
      velocidade: 94,
      defesa: 90,
      energia: 96,
      habilidade: 92,
    },
  },

  {
    id: 114,
    name: "ROY MUSTANG",
    category: "Fullmetal",
    image: "img/Fullmetal-Alchemist/Roy Mustang-1.png",
    description:
      "Alquimista da Chama e coronel do exército de Amestris, capaz de criar explosões controladas com seus dedos estalados.",
    details: {
      universo: "Fullmetal Alchemist",
      poder: "Alquimia da Chama",
      status: "Ativo - General",
      estreia: 2001,
      afiliacao: "Exército de Amestris",
      caracteristica: "Alquimia de Fogo",
      nivel: "S",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 78,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 115,
    name: "SILVERS RAYLEIGH",
    category: "One-Piece",
    image: "img/One-Piece/Rayleigh-1.png",
    description:
      "O Rei das Trevas e primeiro imediato dos Piratas do Roger, mentor de Luffy no uso do Haki e um dos homens mais fortes do mundo.",
    details: {
      universo: "One Piece",
      poder: "Haki Avançado, Espadachim",
      status: "Aposentado",
      estreia: 1999,
      titulo: "Rei das Trevas",
      caracteristica: "Mestre do Haki",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 92,
      defesa: 90,
      energia: 94,
      habilidade: 97,
    },
  },

  {
    id: 116,
    name: "ENDEAVOR (ENJI TODOROKI)",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Endeavor-1.png",
    description:
      "Herói profissional Número 1 e pai de Shoto Todoroki, portador da poderosa Quirk Hellflame que produz chamas extremamente quentes.",
    details: {
      universo: "My Hero Academia",
      poder: "Hellflame (Chamas do Inferno)",
      status: "Ativo - Herói Número 1",
      estreia: 2014,
      titulo: "Herói Número 1",
      caracteristica: "Chamas Infernais",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 86,
      defesa: 88,
      energia: 95,
      habilidade: 90,
    },
  },

  {
    id: 117,
    name: "LEÔNIDAS I",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Leonidas-1.png",
    description:
      "Rei de Esparta e representante da humanidade no Ragnarok, conhecido por sua bravura na Batalha das Termópilas e espírito indomável.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Força Espartana, Escudo e Lança",
      status: "Participante do Ragnarok",
      estreia: 2023,
      titulo: "Rei de Esparta",
      caracteristica: "Espírito Indomável",
      nivel: "S",
    },
    stats: {
      forca: 95,
      velocidade: 82,
      defesa: 96,
      energia: 90,
      habilidade: 88,
    },
  },

  {
    id: 118,
    name: "MONSPIET",
    category: "Nanatsu",
    image: "img/Taizai/Monspiet-1.png",
    description:
      "Comandante dos Dez Mandamentos portador do Mandamento da Fé, companheiro de Derieri e especialista em chamas mágicas.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Chamas Mágicas, Mandamento da Fé",
      status: "Falecido",
      estreia: 2014,
      afiliacao: "Dez Mandamentos",
      caracteristica: "Especialista em Chamas",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 84,
      defesa: 86,
      energia: 92,
      habilidade: 85,
    },
  },

  {
    id: 119,
    name: "TAIJU SHIBA",
    category: "tokyo",
    image: "img/tokyo-revengers/taiju shiba-2.png",
    description:
      "Líder da Black Dragons e irmão mais velho de Yuzuha, conhecido por sua força sobre-humana e personalidade extremamente violenta.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Força Sobre-humana, Resistência",
      status: "Redimido",
      estreia: 2018,
      afiliacao: "Black Dragons",
      caracteristica: "Força Bruta Descomunal",
      nivel: "A+",
    },
    stats: {
      forca: 92,
      velocidade: 75,
      defesa: 90,
      energia: 85,
      habilidade: 78,
    },
  },

  {
    id: 120,
    name: "KAKASHI HATAKE",
    category: "Naruto",
    image: "img/Naruto/kakashi-1.png",
    description:
      "O Ninja Copiador, Sexto Hokage e líder do Time 7, famoso por seu Sharingan e pela técnica Chidori.",
    details: {
      universo: "Naruto",
      poder: "Sharingan, Chidori, Mil Técnicas",
      status: "Aposentado - Ex-Hokage",
      estreia: 1999,
      titulo: "Sexto Hokage",
      caracteristica: "Ninja Copiador",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 94,
      defesa: 86,
      energia: 92,
      habilidade: 98,
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
      status: "Preso - Ex-Shichibukai",
      estreia: 1997,
      afiliacao: "Donquixote Pirates",
      caracteristica: "Controle de Fios",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 88,
      defesa: 85,
      energia: 94,
      habilidade: 95,
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
      titulo: "Rainha das Chamas",
      caracteristica: "Domínio Absoluto do Fogo",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 90,
      defesa: 92,
      energia: 97,
      habilidade: 91,
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
      titulo: "O Iluminado",
      caracteristica: "Visão do Futuro",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 94,
      defesa: 88,
      energia: 96,
      habilidade: 99,
    },
  },

  {
    id: 124,
    name: "BALERION",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/balerion-1.png",
    description:
      "O maior e mais temido dragão da história de Westeros, montaria de Aegon, o Conquistador.",
    details: {
      universo: "Game of Thrones",
      poder: "Fogo Dracônico Ancestral",
      status: "Lendário - Dragão de Aegon",
      estreia: 1996,
      titulo: "Dragão do Terror",
      caracteristica: "Chamas Negras",
      nivel: "S+",
    },
    stats: {
      forca: 98,
      velocidade: 82,
      defesa: 96,
      energia: 95,
      habilidade: 80,
    },
  },

  {
    id: 125,
    name: "KLED",
    category: "League of Legend",
    image: "img/lol/Kled-1.png",
    description:
      "Yordle completamente insano, guerreiro de Noxus que luta montado em Skaarl, defendendo seu território com violência extrema.",
    details: {
      universo: "League of Legends",
      poder: "Fúria Noxiana",
      status: "Anti-herói - Guerreiro de Noxus",
      estreia: 2016,
      afiliacao: "Noxus",
      caracteristica: "Montado em Skaarl",
      nivel: "A+",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 90,
      energia: 92,
      habilidade: 84,
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
      afiliacao: "Império Gem",
      caracteristica: "Guerreira Orgulhosa",
      nivel: "S",
    },
    stats: {
      forca: 94,
      velocidade: 82,
      defesa: 92,
      energia: 88,
      habilidade: 85,
    },
  },

  {
    id: 127,
    name: "PORTGAS D. ACE",
    category: "One-Piece",
    image: "img/One-Piece/Ace-1.png",
    description:
      "Comandante da 2ª Divisão dos Piratas do Barba Branca, usuário do poder do fogo e irmão de Luffy.",
    details: {
      universo: "One Piece",
      poder: "Mera Mera no Mi (Fruta do Fogo)",
      status: "Herói - Pirata do Barba Branca",
      estreia: 1999,
      afiliacao: "Piratas do Barba Branca",
      caracteristica: "Fogo da Vontade",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 92,
      defesa: 85,
      energia: 94,
      habilidade: 88,
    },
  },

  {
    id: 128,
    name: "MAHORAGA",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/mahoraga-1.png",
    description:
      "Shikigami supremo da Técnica das Dez Sombras, capaz de se adaptar a qualquer ataque.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Adaptação Absoluta",
      status: "Invocação - Shikigami",
      estreia: 2018,
      afiliacao: "Técnica das Dez Sombras",
      caracteristica: "Adaptação Infinita",
      nivel: "S+",
    },
    stats: {
      forca: 95,
      velocidade: 88,
      defesa: 96,
      energia: 94,
      habilidade: 92,
    },
  },

  {
    id: 129,
    name: "ITACHI UCHIHA",
    category: "Naruto",
    image: "img/Naruto/itachi-1.png",
    description:
      "Gênio do clã Uchiha que sacrificou tudo para proteger Konoha, mestre absoluto do Sharingan.",
    details: {
      universo: "Naruto",
      poder: "Sharingan e Mangekyō Sharingan",
      status: "Anti-herói - Ex-nukenin",
      estreia: 1999,
      afiliacao: "Clã Uchiha",
      caracteristica: "Mestre do Sharingan",
      nivel: "S+",
    },
    stats: {
      forca: 88,
      velocidade: 94,
      defesa: 85,
      energia: 92,
      habilidade: 99,
    },
  },

  {
    id: 130,
    name: "DAENERYS TARGARYEN",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/daenerys-targaryen-1.png",
    description:
      "A Mãe dos Dragões, herdeira da Casa Targaryen, determinada a reconquistar o Trono de Ferro.",
    details: {
      universo: "Game of Thrones",
      poder: "Controle de Dragões",
      status: "Heroína - Rainha Targaryen",
      estreia: 1996,
      titulo: "Mãe dos Dragões",
      caracteristica: "Herdeira Targaryen",
      nivel: "A+",
    },
    stats: {
      forca: 75,
      velocidade: 78,
      defesa: 72,
      energia: 85,
      habilidade: 90,
    },
  },

  {
    id: 131,
    name: "YAMI SUKEHIRO",
    category: "Black Clover",
    image: "img/Black Clover/Yami-Sukehiro-1.png",
    description:
      "Capitão dos Touros Negros, conhecido por seu poder de Magia de Trevas e personalidade dura, mas justa.",
    details: {
      universo: "Black Clover",
      poder: "Magia das Trevas",
      status: "Herói - Capitão dos Touros Negros",
      estreia: 2015,
      afiliacao: "Touros Negros",
      caracteristica: "Cortador de Dimensões",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 88,
      defesa: 90,
      energia: 94,
      habilidade: 92,
    },
  },

  {
    id: 132,
    name: "MIRIO TOGATA",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/mirio-togata-1.png",
    description:
      "Herói de Classe 1-A da U.A., conhecido como Lemillion, possui a Quirk de Passagem e espírito incansável.",
    details: {
      universo: "My Hero Academia",
      poder: "Quirk: Passagem",
      status: "Herói - Classe 1-A",
      estreia: 2014,
      titulo: "Lemillion",
      caracteristica: "Intangibilidade",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 94,
      defesa: 82,
      energia: 90,
      habilidade: 95,
    },
  },

  {
    id: 133,
    name: "DENJI",
    category: "Chainsaw Man",
    image: "img/Chainsaw-Man/denji-1.png",
    description:
      "Jovem caçador de demônios que se fundiu com Pochita, tornando-se o Chainsaw Man, lutando por sobrevivência e sonhos simples.",
    details: {
      universo: "Chainsaw Man",
      poder: "Fusão com Pochita",
      status: "Anti-herói - Caçador de Demônios",
      estreia: 2018,
      afiliacao: "Caçadores Públicos",
      caracteristica: "Chainsaw Man",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 90,
      defesa: 88,
      energia: 94,
      habilidade: 85,
    },
  },

  {
    id: 134,
    name: "ROSE QUARTZO",
    category: "Steven Universo",
    image: "img/Steven-Universo/Rose-Quartzo-1.png",
    description:
      "Líder das Crystal Gems, protetora da Terra, conhecida por sua compaixão e poder incomparável.",
    details: {
      universo: "Steven Universe",
      poder: "Força Gem e Cura",
      status: "Heroína - Líder das Crystal Gems",
      estreia: 2013,
      afiliacao: "Crystal Gems",
      caracteristica: "Protetora da Terra",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 85,
      defesa: 88,
      energia: 95,
      habilidade: 94,
    },
  },

  {
    id: 135,
    name: "JINBE",
    category: "One-Piece",
    image: "img/One-Piece/jinbe-1.png",
    description:
      "Membro dos Piratas do Chapéu de Palha e mestre em Fish-Man Karate, leal e protetor de seus amigos.",
    details: {
      universo: "One Piece",
      poder: "Fish-Man Karate",
      status: "Herói - Pirata do Chapéu de Palha",
      estreia: 1999,
      afiliacao: "Piratas do Chapéu de Palha",
      caracteristica: "Mestre do Fish-Man Karate",
      nivel: "S",
    },
    stats: {
      forca: 94,
      velocidade: 80,
      defesa: 96,
      energia: 90,
      habilidade: 88,
    },
  },

  {
    id: 136,
    name: "CHOSO",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Choso-1.png",
    description:
      "Irmão mais velho das Maldições Cursed Womb, especialista em manipulação de sangue e combate letal.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Manipulação de Sangue",
      status: "Anti-herói - Maldição",
      estreia: 2018,
      afiliacao: "Irmãos da Maldição",
      caracteristica: "Manipulação Sanguínea",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 84,
      energia: 92,
      habilidade: 90,
    },
  },

  {
    id: 137,
    name: "SION",
    category: "League of Legend",
    image: "img/lol/Sion.png",
    description:
      "Guerreiro morto-vivo de Noxus, um colosso de força bruta que avança sem medo da morte.",
    details: {
      universo: "League of Legends",
      poder: "Força Bruta / Imortalidade",
      status: "Anti-herói - Morto-vivo",
      estreia: 2009,
      afiliacao: "Noxus",
      caracteristica: "Colosso Morto-Vivo",
      nivel: "S",
    },
    stats: {
      forca: 96,
      velocidade: 70,
      defesa: 95,
      energia: 88,
      habilidade: 75,
    },
  },

  {
    id: 138,
    name: "SIMON BELMONT",
    category: "Castlevania",
    image: "img/castlevania/simon-belmont-1.png",
    description:
      "Caçador de vampiros do clã Belmont, lendário por enfrentar Drácula usando o chicote sagrado Vampire Killer.",
    details: {
      universo: "Castlevania",
      poder: "Armas Sagradas / Combate Corpo a Corpo",
      status: "Herói - Humano",
      estreia: 1986,
      titulo: "Caçador de Vampiros",
      caracteristica: "Portador do Vampire Killer",
      nivel: "A+",
    },
    stats: {
      forca: 88,
      velocidade: 82,
      defesa: 85,
      energia: 90,
      habilidade: 86,
    },
  },

  {
    id: 139,
    name: "GRIMMJOW JAEGERJAQUEZ",
    category: "Bleach",
    image: "img/Bleach/Grimmjow-Jaegerjaquez-1.png",
    description:
      "Arrancar extremamente agressivo e orgulhoso, o Sexto Espada busca batalhas intensas para provar sua força absoluta.",
    details: {
      universo: "Bleach",
      poder: "Reiatsu / Combate Espiritual",
      status: "Anti-herói - Arrancar",
      estreia: 2006,
      afiliacao: "Espada",
      caracteristica: "Espada Orgulhosa",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 94,
      defesa: 88,
      energia: 90,
      habilidade: 86,
    },
  },

  {
    id: 140,
    name: "ZENON ZOGRATIS",
    category: "Black Clover",
    image: "img/Black Clover/Zenon-Zogratis-1.png",
    description:
      "Membro da Tríade Negra e hospedeiro de um demônio de alto nível, Zenon luta com frieza absoluta usando magia de ossos e poder demoníaco.",
    details: {
      universo: "Black Clover",
      poder: "Magia de Ossos / Poder Demoníaco",
      status: "Vilão - Humano Possuído",
      estreia: 2019,
      afiliacao: "Tríade Negra",
      caracteristica: "Domínio Espacial",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 88,
      defesa: 92,
      energia: 95,
      habilidade: 94,
    },
  },

  {
    id: 141,
    name: "SAKATA KINTOKI",
    category: "Shuumatsu",
    image: "img/Shuumatsu/Sakata-Kintoki-1.png",
    description:
      "Herói lendário do folclore japonês e um dos campeões da humanidade, possuidor de força sobre-humana e espírito indomável.",
    details: {
      universo: "Shuumatsu no Valkyrie",
      poder: "Força Sobre-humana / Combate Divino",
      status: "Herói - Humano",
      estreia: 2021,
      titulo: "Herói Dourado",
      caracteristica: "Herói Folclórico Japonês",
      nivel: "S",
    },
    stats: {
      forca: 95,
      velocidade: 86,
      defesa: 90,
      energia: 92,
      habilidade: 88,
    },
  },

  {
    id: 142,
    name: "SANEMI SHINAZUGAWA",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/Sanemi-Shinazugawa-1.png",
    description:
      "Pilar do Vento da Corporação dos Caçadores de Demônios, conhecido por sua personalidade agressiva e técnica mortal com a Respiração do Vento.",
    details: {
      universo: "Kimetsu no Yaiba",
      poder: "Respiração do Vento",
      status: "Herói - Humano",
      estreia: 2017,
      titulo: "Pilar do Vento",
      caracteristica: "Estilo de Combate Agressivo",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 92,
      defesa: 85,
      energia: 88,
      habilidade: 89,
    },
  },

  {
    id: 143,
    name: "KOZUKI ODEN",
    category: "One-Piece",
    image: "img/One-Piece/oden-1.png",
    description:
      "Samurai lendário de Wano, portador de uma força monstruosa e de uma vontade indomável capaz de ferir até imperadores dos mares.",
    details: {
      universo: "One Piece",
      poder: "Haki / Estilo de Duas Espadas",
      status: "Herói - Humano",
      estreia: 1999,
      titulo: "Samurai de Wano",
      caracteristica: "Vontade Indomável",
      nivel: "S+",
    },
    stats: {
      forca: 97,
      velocidade: 88,
      defesa: 92,
      energia: 95,
      habilidade: 90,
    },
  },

  {
    id: 144,
    name: "SANDOR CLEGANE",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/perdigueiro-1.png",
    description:
      "Conhecido como O Perdigueiro, Sandor Clegane é um guerreiro brutal e pragmático, temido por sua ferocidade e desprezo pela cavalaria.",
    details: {
      universo: "Game of Thrones",
      poder: "Combate Corpo a Corpo / Espadas",
      status: "Anti-herói - Humano",
      estreia: 2011,
      titulo: "O Perdigueiro",
      caracteristica: "Guerreiro Pragmático",
      nivel: "A",
    },
    stats: {
      forca: 92,
      velocidade: 78,
      defesa: 90,
      energia: 85,
      habilidade: 86,
    },
  },

  {
    id: 145,
    name: "GRIFFITH",
    category: "Berserk",
    image: "img/Berserk/Griffith-1.png",
    description:
      "Antigo líder do Bando do Falcão, cuja ambição o levou a um sacrifício impiedoso e à ascensão como uma entidade demoníaca além da humanidade.",
    details: {
      universo: "Berserk",
      poder: "Carisma / Poder Demoníaco",
      status: "Vilão - Membro da Mão de Deus",
      estreia: 1989,
      titulo: "Membro da Mão de Deus",
      caracteristica: "Ambição Sem Limites",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 92,
      defesa: 88,
      energia: 96,
      habilidade: 95,
    },
  },

  {
    id: 146,
    name: "GARNET",
    category: "Steven Universo",
    image: "img/Steven-Universo/garnet-1.png",
    description:
      "Líder calma e poderosa das Crystal Gems, Garnet combina força, visão futura e habilidades de fusão para proteger a Terra.",
    details: {
      universo: "Steven Universe",
      poder: "Força Sobre-humana / Visão do Futuro",
      status: "Heroína - Gem",
      estreia: 2013,
      afiliacao: "Crystal Gems",
      caracteristica: "Fusão de Ruby e Sapphire",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 86,
      energia: 90,
      habilidade: 92,
    },
  },

  {
    id: 147,
    name: "ULQUIORRA CIFER",
    category: "Bleach",
    image: "img/Bleach/Ulquiorra-Cifer-1.png",
    description:
      "Quarta Espada do exército de Arrancares de Aizen, conhecido por sua frieza absoluta e força devastadora, capaz de regenerar ferimentos rapidamente.",
    details: {
      universo: "Bleach",
      poder: "Reiatsu / Regeneração / Combate Espiritual",
      status: "Vilão - Arrancar",
      estreia: 2006,
      afiliacao: "Espada",
      caracteristica: "Frieza Absoluta",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 92,
      defesa: 90,
      energia: 96,
      habilidade: 88,
    },
  },

  {
    id: 148,
    name: "SHOTA AIZAWA",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Shota-Aizawa-1.png",
    description:
      "Professor da U.A. e herói profissional conhecido como Eraser Head, capaz de anular os poderes de seus oponentes com um simples olhar.",
    details: {
      universo: "My Hero Academia",
      poder: "Anulação de Quirks",
      status: "Herói - Humano",
      estreia: 2014,
      afiliacao: "U.A. High School",
      caracteristica: "Anulador de Quirks",
      nivel: "S",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 80,
      energia: 84,
      habilidade: 94,
    },
  },

  {
    id: 149,
    name: "FUEGOLEON VERMILLION",
    category: "Black Clover",
    image: "img/Black Clover/Fuegoleon-Vermillion-1.png",
    description:
      "Capitão do Crimson Lion Kingdom e usuário de magia de fogo, Fuegoleon é um líder nobre e estrategista incansável que inspira seus aliados.",
    details: {
      universo: "Black Clover",
      poder: "Magia de Fogo / Liderança Estratégica",
      status: "Herói - Humano",
      estreia: 2015,
      afiliacao: "Reino do Leão Carmesim",
      caracteristica: "Líder Nobre",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 86,
      defesa: 88,
      energia: 94,
      habilidade: 90,
    },
  },

  {
    id: 150,
    name: "GOL D. ROGER",
    category: "One-Piece",
    image: "img/One-Piece/Roger-1.png",
    description:
      "Conhecido como o Rei dos Piratas, Gol D. Roger conquistou todos os mares e deixou um legado lendário que inspirou gerações de aventureiros.",
    details: {
      universo: "One Piece",
      poder: "Haki / Espadas / Liderança",
      status: "Herói - Humano",
      estreia: 1997,
      titulo: "Rei dos Piratas",
      caracteristica: "Lenda dos Mares",
      nivel: "S+",
    },
    stats: {
      forca: 99,
      velocidade: 92,
      defesa: 96,
      energia: 98,
      habilidade: 97,
    },
  },

  {
    id: 151,
    name: "MAKIMA",
    category: "Chainsaw Man",
    image: "img/Chainsaw-Man/Makima-1.png",
    description:
      "Enigmática e manipuladora, Makima é uma das figuras mais poderosas do mundo de Chainsaw Man, controlando demônios e humanos com inteligência e força devastadora.",
    details: {
      universo: "Chainsaw Man",
      poder: "Controle Mental / Manipulação de Demônios",
      status: "Vilã - Humana Possuída",
      estreia: 2018,
      afiliacao: "Agência de Segurança Pública",
      caracteristica: "Domínio Absoluto",
      nivel: "SSS",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 82,
      energia: 95,
      habilidade: 99,
    },
  },

  {
    id: 152,
    name: "GODSPEED",
    category: "Flash",
    image: "img/Flash/godspeed-1.png",
    description:
      "Godspeed é um dos velocistas mais perigosos do universo Flash. Obcecado por velocidade e justiça distorcida, ele utiliza a Força de Aceleração para alcançar níveis absurdos de rapidez.",
    details: {
      universo: "DC Comics / The Flash",
      poder: "Super Velocidade / Manipulação da Força de Aceleração",
      status: "Humano / Velocista",
      estreia: 2016,
      afiliacao: "Velocistas Corrompidos",
      caracteristica: "Speed Force Lightning",
      nivel: "SS",
    },
    stats: {
      forca: 85,
      velocidade: 99,
      defesa: 80,
      energia: 92,
      habilidade: 90,
    },
  },

  {
    id: 153,
    name: "MOHG, LORD OF BLOOD",
    category: "souls",
    image: "img/souls/Mohg-1.png",
    description:
      "Mohg, Lord of Blood é um semideus corrompido pelo Sangue Amaldiçoado, governando nas sombras enquanto busca instaurar uma dinastia profana através de rituais sangrentos.",
    details: {
      universo: "Elden Ring",
      poder: "Manipulação de Sangue / Magia Profana",
      status: "Vilão - Semideus",
      estreia: 2022,
      afiliacao: "Dinastia de Sangue",
      caracteristica: "Ritual da Dinastia de Sangue",
      nivel: "SSS",
    },
    stats: {
      forca: 94,
      velocidade: 80,
      defesa: 92,
      energia: 96,
      habilidade: 88,
    },
  },

  {
    id: 154,
    name: "AKUMA",
    category: "Street-Fighter",
    image: "img/Street-Fighter/Akuma-1.png",
    description:
      "Akuma é um mestre supremo do Satsui no Hado, buscando apenas a força absoluta. Seu poder destrutivo e sua filosofia de combate o colocam além dos limites da humanidade.",
    details: {
      universo: "Street Fighter",
      poder: "Satsui no Hado / Energia Demoníaca",
      status: "Anti-herói - Humano Corrompido",
      estreia: 1994,
      afiliacao: "Mestre das Artes Marciais",
      caracteristica: "Shun Goku Satsu",
      nivel: "SSS",
    },
    stats: {
      forca: 98,
      velocidade: 92,
      defesa: 90,
      energia: 96,
      habilidade: 95,
    },
  },

  {
    id: 155,
    name: "MAITO GAI",
    category: "Naruto",
    image: "img/Naruto/Maito-gai-1.png",
    description:
      "Maito Gai é um mestre do taijutsu e símbolo do esforço absoluto. Incapaz de usar ninjutsu ou genjutsu, ele supera todos os limites do corpo humano através de treino extremo.",
    details: {
      universo: "Naruto",
      poder: "Taijutsu / Oito Portões",
      status: "Herói - Ninja",
      estreia: 2002,
      afiliacao: "Konohagakure",
      caracteristica: "Oitavo Portão: Portão da Morte",
      nivel: "SSS",
    },
    stats: {
      forca: 99,
      velocidade: 98,
      defesa: 85,
      energia: 100,
      habilidade: 88,
    },
  },

  {
    id: 156,
    name: "JOE YABUKI",
    category: "Ashita no Joe",
    image: "img/Ashita-no-Joe/Joe-4.png",
    description:
      "Joe Yabuki é um boxeador indomável que luta movido por orgulho, liberdade e autodestruição.",
    details: {
      universo: "Ashita no Joe",
      poder: "Força Física / Resistência Extrema",
      status: "Anti-herói - Humano",
      estreia: 1968,
      afiliacao: "Boxeador Profissional",
      caracteristica: "Cross Counter",
      nivel: "S",
    },
    stats: {
      forca: 85,
      velocidade: 88,
      defesa: 82,
      energia: 90,
      habilidade: 92,
    },
  },

  {
    id: 157,
    name: "LEON",
    category: "Pokemon",
    image: "img/Pokemon/Leon-1.png",
    description:
      "Leon é o Campeão da região de Galar, conhecido por sua incrível habilidade em batalhas Pokémon e por nunca perder uma partida.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia / Liderança em Batalha",
      status: "Herói - Humano",
      estreia: 2019,
      afiliacao: "Liga Pokémon de Galar",
      caracteristica: "Final Showdown",
      nivel: "SS",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 80,
      energia: 88,
      habilidade: 95,
    },
  },

  {
    id: 158,
    name: "MIYAMOTO MUSASHI",
    category: "Vagabond",
    image: "img/Vagabond/miyamoto-3.png",
    description:
      "Miyamoto Musashi é um lendário samurai em busca da perfeição na arte da espada. Determinado, introspectivo e implacável.",
    details: {
      universo: "Vagabond",
      poder: "Kenjutsu / Estratégia de Combate",
      status: "Herói - Humano",
      estreia: 1998,
      afiliacao: "Samurai Errante",
      caracteristica: "Dois Céus, Uma Espada",
      nivel: "SS",
    },
    stats: {
      forca: 90,
      velocidade: 88,
      defesa: 85,
      energia: 92,
      habilidade: 98,
    },
  },

  {
    id: 159,
    name: "CHARLOTTE KATAKURI",
    category: "One-Piece",
    image: "img/One-Piece/Katakuri-1.png",
    description:
      "Katakuri é o filho mais poderoso da família Charlotte, conhecido por sua força brutal, velocidade extrema e habilidade única de prever movimentos.",
    details: {
      universo: "One Piece",
      poder: "Mochi Mochi no Mi / Haki da Observação Avançado",
      status: "Anti-herói - Humano",
      estreia: 2016,
      afiliacao: "Piratas da Big Mom",
      caracteristica: "Rengoku Mochi",
      nivel: "SSS",
    },
    stats: {
      forca: 94,
      velocidade: 96,
      defesa: 92,
      energia: 95,
      habilidade: 97,
    },
  },

  {
    id: 160,
    name: "KENSHIN HIMURA",
    category: "Samurai-X",
    image: "img/Samurai-X/samurai x-1.png",
    description:
      "Kenshin Himura é um lendário samurai errante, conhecido como Battousai, o Retalhador. Movido por redenção, ele busca proteger os inocentes.",
    details: {
      universo: "Samurai X",
      poder: "Kenjutsu / Battoujutsu",
      status: "Herói - Humano",
      estreia: 1996,
      afiliacao: "Samurai Errante",
      caracteristica: "Amakakeru Ryu no Hirameki",
      nivel: "SS",
    },
    stats: {
      forca: 88,
      velocidade: 95,
      defesa: 85,
      energia: 90,
      habilidade: 96,
    },
  },

  {
    id: 161,
    name: "SOLARIA BUTTERFLY",
    category: "Star-vs.",
    image: "img/star-vs/solaria-1.png",
    description:
      "Solaria Butterfly é uma princesa guerreira do reino mágico de Mewni, poderosa e estratégica.",
    details: {
      universo: "Star vs. the Forces of Evil",
      poder: "Magia de Mewni / Estratégia de Combate",
      status: "Heróina - Mewman",
      estreia: 2015,
      afiliacao: "Reino de Mewni",
      caracteristica: "Feitiço de Combate Supremo",
      nivel: "SS",
    },
    stats: {
      forca: 85,
      velocidade: 82,
      defesa: 88,
      energia: 92,
      habilidade: 90,
    },
  },

  {
    id: 162,
    name: "RADAGON OF THE GOLDEN ORDER",
    category: "souls",
    image: "img/souls/Radagon of the Golden Order-1.png",
    description:
      "Radagon é um semideus lendário de Elden Ring, governando com força absoluta e domínio divino.",
    details: {
      universo: "Elden Ring",
      poder: "Magia Sagrada / Força Divina",
      status: "Vilão - Semideus",
      estreia: 2022,
      afiliacao: "Ordem Dourada",
      caracteristica: "Golpe da Ordem Dourada",
      nivel: "SSS",
    },
    stats: {
      forca: 96,
      velocidade: 88,
      defesa: 94,
      energia: 98,
      habilidade: 92,
    },
  },

  {
    id: 163,
    name: "TERCEIRO RAIKAGE",
    category: "Naruto",
    image: "img/Naruto/Raikage-2.png",
    description:
      "O Terceiro Raikage é conhecido por sua velocidade e força sobre-humanas, além de seu corpo extremamente resistente.",
    details: {
      universo: "Naruto",
      poder: "Força Sobre-Humana / Velocidade Extrema",
      status: "Herói - Ninja",
      estreia: 2002,
      afiliacao: "Kumogakure",
      caracteristica: "Lariat Supremo",
      nivel: "SSS",
    },
    stats: {
      forca: 97,
      velocidade: 95,
      defesa: 96,
      energia: 94,
      habilidade: 88,
    },
  },

  {
    id: 164,
    name: "TITÃ DE ATAQUE",
    category: "Shingeki-no-Kyojin",
    image: "img/Shingeki-no-Kyojin/titan-de-ataque-1.png",
    description:
      "O Titã de Ataque é uma poderosa entidade capaz de lutar com agilidade e força sobre-humana.",
    details: {
      universo: "Shingeki no Kyojin",
      poder: "Força Titanica / Agilidade Avançada",
      status: "Herói - Titan Shifter",
      estreia: 2009,
      afiliacao: "Portadores do Titã de Ataque",
      caracteristica: "Ruptura Titanica",
      nivel: "SSS",
    },
    stats: {
      forca: 95,
      velocidade: 92,
      defesa: 88,
      energia: 94,
      habilidade: 90,
    },
  },

  {
    id: 165,
    name: "SHINSO",
    category: "Pokemon",
    image: "img/Pokemon/Shinso-2.png",
    description:
      "Shinso é o principal vilão da hack room Pokémon Blue Stars 3 Forces, manipulador e estrategista.",
    details: {
      universo: "Pokémon Blue Stars 3 Forces",
      poder: "Manipulação Psíquica / Controle Mental",
      status: "Vilão Principal",
      estreia: "Hack Room Blue Stars 3 Forces",
      afiliacao: "Forças Antagonistas",
      caracteristica: "Manipulação Estratégica",
      nivel: "SS",
    },
    stats: {
      forca: 78,
      velocidade: 82,
      defesa: 75,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 166,
    name: "MARSHALL D. TEACH",
    category: "One-Piece",
    image: "img/One-Piece/Marshall-D-Teach-1.png",
    description:
      "Marshall D. Teach, conhecido como Barba Negra, é um dos antagonistas mais perigosos de One Piece.",
    details: {
      universo: "One Piece",
      poder: "Yami Yami no Mi / Gura Gura no Mi",
      status: "Imperador dos Mares (Yonkou)",
      estreia: 1999,
      afiliacao: "Piratas do Barba Negra",
      caracteristica: "Domínio da Escuridão",
      nivel: "SSS",
    },
    stats: {
      forca: 96,
      velocidade: 85,
      defesa: 92,
      energia: 98,
      habilidade: 90,
    },
  },

  {
    id: 167,
    name: "RYU",
    category: "Street-Fighter",
    image: "img/Street-Fighter/Ryu-1.png",
    description:
      "Ryu é um dos maiores guerreiros do mundo em Street Fighter, dedicado ao caminho do combate.",
    details: {
      universo: "Street Fighter",
      poder: "Ki / Artes Marciais Avançadas",
      status: "Guerreiro Errante",
      estreia: 1987,
      afiliacao: "Estilo Ansatsuken",
      caracteristica: "Hadouken / Shoryuken",
      nivel: "SS",
    },
    stats: {
      forca: 92,
      velocidade: 90,
      defesa: 88,
      energia: 94,
      habilidade: 95,
    },
  },

  {
    id: 168,
    name: "KIM KAPHWAN",
    category: "The King of Fighters",
    image: "img/The-King-of-Fighters/Kim.png",
    description:
      "Kim Kaphwan é um mestre de Taekwondo e um dos personagens mais respeitados de The King of Fighters.",
    details: {
      universo: "The King of Fighters",
      poder: "Agilidade / Força Física / Técnicas de Chute",
      status: "Lutador Justo",
      estreia: 1992,
      afiliacao: "Time Coreano",
      caracteristica: "Hien Shippuu Kyaku",
      nivel: "SS",
    },
    stats: {
      forca: 88,
      velocidade: 94,
      defesa: 85,
      energia: 90,
      habilidade: 92,
    },
  },

  {
    id: 169,
    name: "HADES",
    category: "Os Zavaleiros do Zodíaco",
    image: "img/Os-Cavaleiros-do-Zodíaco/hades-2.png",
    description:
      "Hades é o deus do submundo em Os Cavaleiros do Zodíaco, governando o mundo dos mortos.",
    details: {
      universo: "Os Cavaleiros do Zodíaco",
      poder: "Imortalidade / Controle do Submundo / Cosmo Divino",
      status: "Deidade / Antagonista",
      estreia: 1986,
      afiliacao: "Deus do Submundo",
      caracteristica: "Seiten Heaven",
      nivel: "SSS",
    },
    stats: {
      forca: 98,
      velocidade: 90,
      defesa: 96,
      energia: 100,
      habilidade: 94,
    },
  },

  {
    id: 170,
    name: "TITÃ BLINDADO",
    category: "Shingeki-no-Kyojin",
    image: "img/Shingeki-no-Kyojin/titan-blindado-1.png",
    description:
      "O Titã Blindado é uma das armas mais destrutivas do universo de Shingeki no Kyojin.",
    details: {
      universo: "Shingeki no Kyojin",
      poder: "Defesa Absoluta / Força Titanica",
      status: "Anti-Herói - Titan Shifter",
      estreia: 2009,
      afiliacao: "Marley",
      caracteristica: "Investida Blindada",
      nivel: "SS",
    },
    stats: {
      forca: 94,
      velocidade: 75,
      defesa: 99,
      energia: 90,
      habilidade: 82,
    },
  },

  {
    id: 171,
    name: "MARCO DIAZ",
    category: "Star-vs.",
    image: "img/star-vs/marco-diaz-1.png",
    description:
      "Marco Diaz é o melhor amigo e aliado de Star Butterfly em Star vs. the Forces of Evil.",
    details: {
      universo: "Star vs. the Forces of Evil",
      poder: "Habilidades de Combate / Estratégia",
      status: "Humano / Lutador Treinado",
      estreia: 2015,
      afiliacao: "Mewni High School",
      caracteristica: "Martial Arts",
      nivel: "A",
    },
    stats: {
      forca: 80,
      velocidade: 82,
      defesa: 78,
      energia: 85,
      habilidade: 88,
    },
  },

  {
    id: 172,
    name: "GODFREY, FIRST ELDEN LORD",
    category: "souls",
    image: "img/souls/Godfrey-First-Elden-Lord-1.png",
    description:
      "Godfrey, o Primeiro Elden Lord, é um lendário guerreiro de Elden Ring.",
    details: {
      universo: "Elden Ring",
      poder: "Força Sobre-Humana / Habilidade com Armas",
      status: "Imortal / Guerreiro Supremo",
      estreia: 2022,
      afiliacao: "Elden Lord",
      caracteristica: "Terra Crush",
      nivel: "SSS",
    },
    stats: {
      forca: 99,
      velocidade: 85,
      defesa: 97,
      energia: 96,
      habilidade: 90,
    },
  },

  {
    id: 173,
    name: "SENGOKU",
    category: "One-Piece",
    image: "img/One-Piece/Sengoku-1.png",
    description:
      "Sengoku, o antigo Almirante de Frota da Marinha, é um estrategista brilhante.",
    details: {
      universo: "One Piece",
      poder: "Hito Hito no Mi, Modelo: Daibutsu",
      status: "Ex-Almirante de Frota",
      estreia: 1997,
      afiliacao: "Marinha",
      caracteristica: "Gigante Buda",
      nivel: "SSS",
    },
    stats: {
      forca: 95,
      velocidade: 80,
      defesa: 94,
      energia: 92,
      habilidade: 93,
    },
  },

  {
    id: 174,
    name: "RUGAL BERNSTEIN",
    category: "The King of Fighters",
    image: "img/The-King-of-Fighters/Rugal-2.png",
    description:
      "Rugal Bernstein é um dos vilões mais icônicos da franquia The King of Fighters.",
    details: {
      universo: "The King of Fighters",
      poder: "Força Sobre-Humana / Energia Sombria",
      status: "Humano Aprimorado",
      estreia: 1994,
      afiliacao: "Organização Rugal",
      caracteristica: "Genocide Cutter",
      nivel: "SS",
    },
    stats: {
      forca: 94,
      velocidade: 88,
      defesa: 90,
      energia: 92,
      habilidade: 91,
    },
  },

  {
    id: 175,
    name: "GREGOR CLEGANE",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/montanha-1.png",
    description:
      "Gregor Clegane, conhecido como A Montanha, é um dos guerreiros mais temidos de Game of Thrones.",
    details: {
      universo: "Game of Thrones",
      poder: "Força Física Extrema / Resistência Anormal",
      status: "Humano / Cavaleiro",
      estreia: 2011,
      afiliacao: "Casa Lannister",
      caracteristica: "Combate Brutal",
      nivel: "A+",
    },
    stats: {
      forca: 96,
      velocidade: 70,
      defesa: 94,
      energia: 88,
      habilidade: 75,
    },
  },

  {
    id: 176,
    name: "TITÃ BESTIAL",
    category: "Shingeki-no-Kyojin",
    image: "img/Shingeki-no-Kyojin/titan-beast-1.png",
    description:
      "O Titã Bestial é um dos Nove Titãs de Shingeki no Kyojin, conhecido por sua aparência animalesca.",
    details: {
      universo: "Shingeki no Kyojin",
      poder: "Força Titânica / Arremesso de Longa Distância",
      status: "Titã Metamorfo",
      estreia: 2013,
      afiliacao: "Marley",
      caracteristica: "Arremesso Devastador",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 80,
      defesa: 88,
      energia: 90,
      habilidade: 85,
    },
  },

  {
    id: 177,
    name: "CHUN-LI",
    category: "Street-Fighter",
    image: "img/Street-Fighter/chun-li-1.png",
    description:
      "Chun-Li é uma das lutadoras mais icônicas de Street Fighter, agente da Interpol.",
    details: {
      universo: "Street Fighter",
      poder: "Velocidade Extrema / Técnicas de Chute",
      status: "Humana / Agente da Interpol",
      estreia: 1991,
      afiliacao: "Interpol",
      caracteristica: "Hyakuretsukyaku",
      nivel: "A+",
    },
    stats: {
      forca: 82,
      velocidade: 95,
      defesa: 80,
      energia: 85,
      habilidade: 92,
    },
  },

  {
    id: 178,
    name: "VEGETA",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/vegeta-1.png",
    description:
      "Orgulhoso príncipe dos Saiyajins, Vegeta é um guerreiro extremamente poderoso.",
    details: {
      universo: "Dragon Ball",
      poder: "Manipulação de Ki / Transformações Saiyajin",
      status: "Anti-herói - Saiyajin",
      estreia: 1988,
      afiliacao: "Forças Z",
      caracteristica: "Final Flash",
      nivel: "SS",
    },
    stats: {
      forca: 97,
      velocidade: 94,
      defesa: 92,
      energia: 96,
      habilidade: 93,
    },
  },

  {
    id: 179,
    name: "SASAKI KOJIRŌ",
    category: "Vagabond",
    image: "img/Vagabond/sasaki-kojiro-1.png",
    description:
      "Sasaki Kojirō é um dos espadachins mais talentosos e trágicos de Vagabond.",
    details: {
      universo: "Vagabond",
      poder: "Habilidade Suprema com Espada / Instinto de Combate",
      status: "Humano / Espadachim",
      estreia: 1998,
      afiliacao: "Samurai Errante",
      caracteristica: "Cortes Precisos",
      nivel: "A+",
    },
    stats: {
      forca: 85,
      velocidade: 90,
      defesa: 82,
      energia: 88,
      habilidade: 96,
    },
  },

  {
    id: 180,
    name: "ECLIPSA BUTTERFLY",
    category: "Star-vs.",
    image: "img/star-vs/Eclipsa-Butterfly-1.png",
    description:
      "Eclipsa Butterfly é uma das rainhas mais controversas do Reino de Mewni.",
    details: {
      universo: "Star vs. the Forces of Evil",
      poder: "Magia Negra Avançada / Feitiços de Alto Nível",
      status: "Rainha / Usuária de Magia",
      estreia: 2017,
      afiliacao: "Reino de Mewni",
      caracteristica: "Feitiços Proibidos",
      nivel: "S",
    },
    stats: {
      forca: 78,
      velocidade: 80,
      defesa: 82,
      energia: 92,
      habilidade: 94,
    },
  },

  {
    id: 181,
    name: "MONKEY D. DRAGON",
    category: "One-Piece",
    image: "img/One-Piece/dragon-1.png",
    description:
      "Monkey D. Dragon é o líder do Exército Revolucionário e o homem mais procurado do mundo.",
    details: {
      universo: "One Piece",
      poder: "Manipulação de Fenômenos Naturais / Liderança Estratégica",
      status: "Humano / Revolucionário",
      estreia: 1997,
      afiliacao: "Exército Revolucionário",
      caracteristica: "Habilidades Climáticas Desconhecidas",
      nivel: "SSS",
    },
    stats: {
      forca: 96,
      velocidade: 90,
      defesa: 92,
      energia: 98,
      habilidade: 95,
    },
  },

  {
    id: 182,
    name: "KIYOTAKA AYANOKŌJI",
    category: "Classroom of the Elite",
    image: "img/classroom-of-the-elite/Kiyotaka-Ayanokōji-1.png",
    description:
      "Kiyotaka Ayanokōji é um estudante que esconde uma mente genial moldada pelo White Room.",
    details: {
      universo: "Classroom of the Elite",
      poder: "Intelecto Supremo / Manipulação Estratégica",
      status: "Humano / Estudante",
      estreia: 2017,
      afiliacao: "Classe D",
      caracteristica: "Estratégia Psicológica",
      nivel: "A+",
    },
    stats: {
      forca: 85,
      velocidade: 88,
      defesa: 82,
      energia: 90,
      habilidade: 99,
    },
  },

  {
    id: 183,
    name: "GILGAMESH",
    category: "Fate",
    image: "img/Fate/gilgamesh-1.png",
    description:
      "O Rei dos Heróis, possuidor do tesouro supremo Gate of Babylon e da poderosa espada Ea.",
    details: {
      universo: "Fate",
      poder: "Gate of Babylon, Noble Phantasm Ea",
      status: "Servant - Rei dos Heróis",
      estreia: 2004,
      afiliacao: "Servant de Classe Archer",
      caracteristica: "Tesouros Heróicos",
      nivel: "SSS",
    },
    stats: {
      forca: 95,
      velocidade: 90,
      defesa: 92,
      energia: 98,
      habilidade: 96,
    },
  },

  {
    id: 184,
    name: "HIKIGAYA HACHIMAN",
    category: "OreGairu",
    image: "img/OreGairu/Hikigaya-Hachiman-1.png",
    description:
      "Protagonista cínico e observador de My Teen Romantic Comedy SNAFU.",
    details: {
      universo: "My Teen Romantic Comedy SNAFU",
      poder: "Inteligência Observacional, Pensamento Lógico",
      status: "Estudante - Clube de Serviço",
      estreia: 2011,
      afiliacao: "Clube de Serviço",
      caracteristica: "Solução de Problemas",
      nivel: "B",
    },
    stats: {
      forca: 70,
      velocidade: 75,
      defesa: 72,
      energia: 80,
      habilidade: 90,
    },
  },

  {
    id: 185,
    name: "RED",
    category: "Pokemon",
    image: "img/Pokemon/Red.png",
    description:
      "O lendário treinador Pokémon de Kanto, primeiro campeão da Liga Pokémon.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia de Batalha, Vínculo com Pokémon",
      status: "Campeão da Liga Pokémon",
      estreia: 1996,
      afiliacao: "Liga Pokémon de Kanto",
      caracteristica: "Liderança Pokémon",
      nivel: "S",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 80,
      energia: 88,
      habilidade: 95,
    },
  },

  {
    id: 186,
    name: "HOBBY",
    category: "Marvel-Comics",
    image: "img/Marvel-Comics/hobby-1.png",
    description: "Versão punk do Homem-Aranha de uma realidade alternativa.",
    details: {
      universo: "Marvel Comics",
      poder: "Poderes de Aranha, Sentido Aranha, Agilidade Sobre-Humana",
      status: "Herói Alternativo - Spider-Verse",
      estreia: 2014,
      afiliacao: "Spider-Verse",
      caracteristica: "Rebeldia",
      nivel: "A+",
    },
    stats: {
      forca: 85,
      velocidade: 92,
      defesa: 82,
      energia: 88,
      habilidade: 90,
    },
  },

  {
    id: 187,
    name: "GUNMAR",
    category: "Trollhunters",
    image: "img/Trollhunters/Gunmar-1.png",
    description:
      "O temível Troll Negro, antigo líder dos Gumm-Gumms e principal antagonista.",
    details: {
      universo: "Trollhunters",
      poder: "Força Sobre-Humana, Pele Indestrutível, Grito Sônico",
      status: "Vilão - Líder dos Gumm-Gumms",
      estreia: 2016,
      afiliacao: "Gumm-Gumms",
      caracteristica: "Guerra",
      nivel: "S",
    },
    stats: {
      forca: 94,
      velocidade: 75,
      defesa: 96,
      energia: 92,
      habilidade: 82,
    },
  },

  {
    id: 188,
    name: "RYUEN KAKERU",
    category: "Classroom of the Elite",
    image: "img/classroom-of-the-elite/ryuen-kakeru-1.png",
    description:
      "Líder agressivo e impiedoso da Classe C da Advanced Nurturing High School.",
    details: {
      universo: "Classroom of the Elite",
      poder: "Intimidação, Liderança Autoritária, Combate Físico",
      status: "Estudante - Líder da Classe C",
      estreia: 2017,
      afiliacao: "Classe C",
      caracteristica: "Confronto",
      nivel: "B+",
    },
    stats: {
      forca: 85,
      velocidade: 82,
      defesa: 84,
      energia: 88,
      habilidade: 86,
    },
  },

  {
    id: 189,
    name: "KORRA",
    category: "Avatar",
    image: "img/Avatar/korra-1.png",
    description: "A Avatar sucessora de Aang, nascida na Tribo da Água do Sul.",
    details: {
      universo: "Avatar: The Legend of Korra",
      poder: "Dobra dos Quatro Elementos, Estado Avatar, Dobra de Metal",
      status: "Avatar Ativa - Protetora do Mundo",
      estreia: 2012,
      afiliacao: "Tribo da Água do Sul",
      caracteristica: "Água (elemento nativo)",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 88,
      defesa: 90,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 190,
    name: "ARTORIA PENDRAGON",
    category: "Fate",
    image: "img/Fate/Artoria-Pendragon-1.png",
    description:
      "Servant da classe Saber, a lendária Rei Artoria Pendragon do reino de Camelot.",
    details: {
      universo: "Fate",
      poder: "Excalibur, Avalon, Instinto de Batalha",
      status: "Servant - Rei dos Cavaleiros",
      estreia: 2004,
      afiliacao: "Servant de Classe Saber",
      caracteristica: "Cavaleirismo",
      nivel: "SS",
    },
    stats: {
      forca: 94,
      velocidade: 92,
      defesa: 93,
      energia: 95,
      habilidade: 94,
    },
  },

  {
    id: 191,
    name: "YUKINO YUKINOSHITA",
    category: "OreGairu",
    image: "img/OreGairu/Yukino-Yukinoshita-1.png",
    description:
      "Estudante modelo da escola Sobu High, conhecida por sua inteligência excepcional.",
    details: {
      universo: "My Teen Romantic Comedy SNAFU",
      poder: "Inteligência Acadêmica, Habilidade Analítica",
      status: "Estudante - Clube de Serviço",
      estreia: 2011,
      afiliacao: "Clube de Serviço",
      caracteristica: "Análise",
      nivel: "B",
    },
    stats: {
      forca: 72,
      velocidade: 75,
      defesa: 70,
      energia: 78,
      habilidade: 92,
    },
  },

  {
    id: 192,
    name: "JIM LAKE JR.",
    category: "Trollhunters",
    image: "img/Trollhunters/Jim-Lake Jr.-1.png",
    description:
      "O primeiro Trollhunter humano, escolhido pelo Amuleto de Daylight.",
    details: {
      universo: "Trollhunters",
      poder: "Armadura Amuleto, Combate com Espadas, Liderança",
      status: "Herói - Trollhunter",
      estreia: 2016,
      afiliacao: "Trollhunters",
      caracteristica: "Coragem",
      nivel: "A+",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 90,
      energia: 92,
      habilidade: 89,
    },
  },

  {
    id: 193,
    name: "CHARLOTTE LINLIN",
    category: "One-Piece",
    image: "img/One-Piece/Charlotte-Linlin-1.png",
    description:
      "Uma das Yonko (Quatro Imperadores) do mar, conhecida como Big Mom.",
    details: {
      universo: "One Piece",
      poder: "Soru Soru no Mi (Fruta da Alma), Haki Conquistador",
      status: "Imperatriz - Yonko",
      estreia: 2011,
      afiliacao: "Piratas da Big Mom",
      caracteristica: "Alma",
      nivel: "S+",
    },
    stats: {
      forca: 98,
      velocidade: 75,
      defesa: 96,
      energia: 97,
      habilidade: 88,
    },
  },

  {
    id: 194,
    name: "TOPH BEIFONG",
    category: "Avatar",
    image: "img/Avatar/Toph-Beifong-1.png",
    description:
      "A maior dobradora de terra da história, apesar de ser cega desde o nascimento.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Terra, Dobra de Metal, Visão Sísmica",
      status: "Mestra de Dobra",
      estreia: 2006,
      afiliacao: "Beifong / Ordem do Lótus Branco",
      caracteristica: "Terra",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 80,
      defesa: 95,
      energia: 92,
      habilidade: 96,
    },
  },

  {
    id: 195,
    name: "SAVITAR",
    category: "Flash",
    image: "img/Flash/savitar-1.png",
    description:
      "O autoproclamado 'Deus da Velocidade', uma versão futura e corrompida de Barry Allen.",
    details: {
      universo: "DC Comics / The Flash",
      poder: "Força da Velocidade Avançada, Armadura Filosofal",
      status: "Velocista Corrompido",
      estreia: 2016,
      afiliacao: "Velocistas Corrompidos",
      caracteristica: "Time Remnant",
      nivel: "SSS",
    },
    stats: {
      forca: 90,
      velocidade: 100,
      defesa: 92,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 196,
    name: "ROCK LEE",
    category: "Naruto",
    image: "img/Naruto/rock-lee -1.png",
    description:
      "Ninja especializado exclusivamente em taijutsu, incapaz de usar ninjutsu ou genjutsu.",
    details: {
      universo: "Naruto",
      poder: "Taijutsu Supremo, Oito Portões",
      status: "Ninja de Konoha - Jounin",
      estreia: 2000,
      afiliacao: "Konohagakure",
      caracteristica: "Esforço",
      nivel: "S",
    },
    stats: {
      forca: 94,
      velocidade: 96,
      defesa: 85,
      energia: 92,
      habilidade: 88,
    },
  },

  {
    id: 197,
    name: "MAJIN BOO",
    category: "Dragon-Ball",
    image: "img/Dragon-Ball/majin-boo-1.png",
    description: "Entidade mágica criada pelo mago Bibidi há milhões de anos.",
    details: {
      universo: "Dragon Ball",
      poder: "Regeneração, Absorção, Transformação, Magia",
      status: "Antagonista - Entidade Mágica",
      estreia: 1994,
      afiliacao: "Forças do Mal",
      caracteristica: "Absorção",
      nivel: "SSS",
    },
    stats: {
      forca: 97,
      velocidade: 85,
      defesa: 94,
      energia: 99,
      habilidade: 82,
    },
  },

  {
    id: 198,
    name: "KAFKA HIBINO",
    category: "Kaiju-No-8",
    image: "img/Kaiju/kafka-1.png",
    description:
      "Homem de 32 anos que trabalha em limpeza de kaijus e sonha em se juntar à Força de Defesa.",
    details: {
      universo: "Kaiju No. 8",
      poder: "Transformação em Kaiju, Força Sobre-Humana, Regeneração",
      status: "Recruta da Força de Defesa",
      estreia: 2020,
      afiliacao: "Força de Defesa",
      caracteristica: "Transformação",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 88,
      defesa: 92,
      energia: 90,
      habilidade: 85,
    },
  },

  {
    id: 199,
    name: "CYNTHIA",
    category: "Pokemon",
    image: "img/Pokemon/cynthia-1.png",
    description:
      "A campeã da região de Sinnoh, conhecida como uma das treinadoras mais fortes do mundo Pokémon.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia de Batalha, Conhecimento Mitológico",
      status: "Campeã - Pesquisadora",
      estreia: 2006,
      afiliacao: "Liga Pokémon de Sinnoh",
      caracteristica: "Dragão",
      nivel: "SS",
    },
    stats: {
      forca: 84,
      velocidade: 86,
      defesa: 82,
      energia: 90,
      habilidade: 96,
    },
  },

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
      afiliacao: "Estalagem",
      caracteristica: "Paz e Determinação",
      nivel: "C",
    },
    stats: {
      forca: 60,
      velocidade: 65,
      defesa: 55,
      energia: 70,
      habilidade: 75,
    },
  },

  {
    id: 201,
    name: "EMIYA",
    category: "Fate",
    image: "img/Fate/Emiya-1.png",
    description:
      "Servant da classe Archer, verdadeira identidade de Shirou Emiya do futuro. Conhecido como o 'Guardian', utiliza a realidade mágica Unlimited Blade Works.",
    details: {
      universo: "Fate",
      poder: "Unlimited Blade Works, Projeção de Armas",
      status: "Servant - Counter Guardian",
      estreia: 2004,
      afiliacao: "Counter Force",
      caracteristica: "Projeção de Armas Ilimitadas",
      nivel: "SS",
    },
    stats: {
      forca: 88,
      velocidade: 90,
      defesa: 85,
      energia: 92,
      habilidade: 95,
    },
  },

  {
    id: 202,
    name: "ROCKS D. XEBEC",
    category: "One-Piece",
    image: "img/One-Piece/Rocks-D-Xebec-2.png",
    description:
      "Lendário capitão pirata da era anterior a Roger, líder dos Piratas Rocks. Tinha em sua tripulação futuros Yonko como Big Mom, Kaido e Barba Branca.",
    details: {
      universo: "One Piece",
      poder: "Força Inigualável, Liderança de Monstros",
      status: "Pirata Lendário - Capitão dos Rocks",
      estreia: 2018,
      recompensa: "Desconhecida (>฿5,000,000,000)",
      caracteristica: "Lenda das Lendas",
      nivel: "SSS",
    },
    stats: {
      forca: 99,
      velocidade: 88,
      defesa: 97,
      energia: 98,
      habilidade: 96,
    },
  },

  {
    id: 203,
    name: "NIGHT KING",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/Night-King-1.png",
    description:
      "Líder supremo dos Caminhantes Brancos, uma antiga raça de seres mágicos que ameaçam extinguir toda a vida em Westeros.",
    details: {
      universo: "Game of Thrones",
      poder:
        "Criação de Caminhantes Brancos, Ressurreição de Mortos, Imortalidade",
      status: "Antagonista - Rei dos Caminhantes Brancos",
      estreia: 2014,
      afiliacao: "Caminhantes Brancos",
      caracteristica: "Ameaça Existencial",
      nivel: "SS",
    },
    stats: {
      forca: 94,
      velocidade: 85,
      defesa: 96,
      energia: 95,
      habilidade: 88,
    },
  },

  {
    id: 204,
    name: "BULAR",
    category: "Trollhunters",
    image: "img/Trollhunters/burlar-1.png",
    description:
      "Troll Gumm-Gumm feroz e leal a Gunmar, determinado a libertar seu mestre do Submundo. Conhecido por sua força brutal.",
    details: {
      universo: "Trollhunters",
      poder: "Força Sobre-Humana, Combate com Espadas, Resistência",
      status: "Vilão - Líder Gumm-Gumm",
      estreia: 2016,
      afiliacao: "Gumm-Gumms",
      caracteristica: "Lealdade Brutal",
      nivel: "A+",
    },
    stats: {
      forca: 92,
      velocidade: 78,
      defesa: 90,
      energia: 88,
      habilidade: 80,
    },
  },

  {
    id: 205,
    name: "GIORNO GIOVANNA",
    category: "jojo",
    image: "img/Jojo/Giorno-Giovanna-1.png",
    description:
      "Protagonista da Parte 5: Vento Aureo, filho de Dio Brando. Líder da Passione que busca se tornar um 'Gang-Star'.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand Gold Experience → Gold Experience Requiem",
      status: "Líder da Passione - Gang-Star",
      estreia: 1995,
      afiliacao: "Passione",
      caracteristica: "Gold Experience Requiem",
      nivel: "SSS",
    },
    stats: {
      forca: 90,
      velocidade: 92,
      defesa: 88,
      energia: 96,
      habilidade: 98,
    },
  },

  {
    id: 206,
    name: "KUSHINA UZUMAKI",
    category: "Naruto",
    image: "img/Naruto/Kushina.png",
    description:
      "Mãe de Naruto Uzumaki e ex-jinchūriki do Nove-Caudas. Membro do clã Uzumaki conhecida por suas habilidades de selamento.",
    details: {
      universo: "Naruto",
      poder:
        "Chakra Uzumaki, Técnicas de Selamento, Cadeias de Chakra Adamantinas",
      status: "Ex-Jinchūriki - Falecida",
      estreia: 2005,
      afiliacao: "Clã Uzumaki",
      caracteristica: "Seladora Excepcional",
      nivel: "S",
    },
    stats: {
      forca: 85,
      velocidade: 82,
      defesa: 84,
      energia: 92,
      habilidade: 90,
    },
  },

  {
    id: 207,
    name: "STEVE",
    category: "Pokemon",
    image: "img/Pokemon/steve-1.png",
    description:
      "Treinador Pokémon determinado em sua jornada para se tornar um Mestre Pokémon.",
    details: {
      universo: "Pokémon",
      poder: "Treinamento Pokémon, Estratégia de Batalha",
      status: "Treinador Pokémon",
      estreia: 1996,
      afiliacao: "Treinador Independente",
      caracteristica: "Aventura Pokémon",
      nivel: "B",
    },
    stats: {
      forca: 70,
      velocidade: 75,
      defesa: 68,
      energia: 80,
      habilidade: 85,
    },
  },

  {
    id: 208,
    name: "GHOST",
    category: "Marvel-Comics",
    image: "img/Marvel-Comics/Ghost-1.png",
    description:
      "Hacker e sabotador corporativo que usa um traje tecnológico que concede intangibilidade e invisibilidade.",
    details: {
      universo: "Marvel Comics",
      poder: "Intangibilidade, Invisibilidade, Hacking Avançado",
      status: "Anti-herói - Hacker Corporativo",
      estreia: 1987,
      afiliacao: "Independente",
      caracteristica: "Sabotador Corporativo",
      nivel: "A",
    },
    stats: {
      forca: 78,
      velocidade: 88,
      defesa: 82,
      energia: 80,
      habilidade: 92,
    },
  },

  {
    id: 209,
    name: "HOZOIN INSHUN",
    category: "Vagabond",
    image: "img/Vagabond/hozoin-inshun-1.png",
    description:
      "Monge guerreiro do templo Hozoin e mestre da lança (sōjutsu). Um dos oponentes mais formidáveis enfrentados por Miyamoto Musashi.",
    details: {
      universo: "Vagabond",
      poder: "Sōjutsu (arte da lança), Técnicas de Hozoin-ryu",
      status: "Monge Guerreiro - Mestre de Lança",
      estreia: 1999,
      afiliacao: "Templo Hozoin",
      caracteristica: "Mestre de Lança",
      nivel: "A+",
    },
    stats: {
      forca: 85,
      velocidade: 82,
      defesa: 80,
      energia: 84,
      habilidade: 90,
    },
  },

  {
    id: 210,
    name: "YUTA OKKOTSU",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Yuta-Okkotsu-1.png",
    description:
      "Feiticeiro de grau especial e protagonista de Jujutsu Kaisen 0. Portador da poderosa maldição Rika.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Maldição Rika, Cópia de Técnicas Amaldiçoadas",
      status: "Feiticeiro de Grau Especial",
      estreia: 2017,
      afiliacao: "Jujutsu High",
      caracteristica: "Portador de Rika",
      nivel: "SS+",
    },
    stats: {
      forca: 92,
      velocidade: 90,
      defesa: 88,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 211,
    name: "AZULA",
    category: "Avatar",
    image: "img/Avatar/Azula-1.png",
    description:
      "Princesa da Nação do Fogo, irmã mais nova de Zuko. Gênio tático e prodígio na dobra de fogo, criadora do raro fogo azul.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Fogo Avançada, Fogo Azul, Eletrocondução",
      status: "Princesa da Nação do Fogo",
      estreia: 2005,
      afiliacao: "Nação do Fogo",
      caracteristica: "Prodígio do Fogo",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 90,
      defesa: 82,
      energia: 92,
      habilidade: 95,
    },
  },

  {
    id: 212,
    name: "MORDEKAISER",
    category: "League of Legend",
    image: "img/lol/Mordekaiser-1.png",
    description:
      "O Revenã de Ferro, um antigo imperador que retornou dos mortos através de necromancia. Constrói um reino dos mortos.",
    details: {
      universo: "League of Legends",
      poder: "Domínio da Morte, Criação do Reino da Morte, Magia Negra",
      status: "Revenã - Imperador dos Mortos",
      estreia: 2010,
      titulo: "O Revenã de Ferro",
      caracteristica: "Domínio da Morte",
      nivel: "SS",
    },
    stats: {
      forca: 96,
      velocidade: 75,
      defesa: 94,
      energia: 95,
      habilidade: 85,
    },
  },

  {
    id: 213,
    name: "KURAPIKA",
    category: "HXH",
    image: "img/hxh/Kurapika-1.png",
    description:
      "Último sobrevivente do clã Kurta, caçador especializado em recuperar os olhos escarlates de seu povo.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen - Conjurador, Correntes de Julgamento, Emperor Time",
      status: "Hunter - Caçador da Tropa Fantasma",
      estreia: 1998,
      afiliacao: "Clã Kurta",
      caracteristica: "Olhos Escarlates",
      nivel: "S+",
    },
    stats: {
      forca: 85,
      velocidade: 88,
      defesa: 82,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 214,
    name: "AAARRRGGHH!!!",
    category: "Trollhunters",
    image: "img/Trollhunters/AAARRRGGHH-2.png",
    description:
      "Troll Krubera gentil e pacífico, melhor amigo de Blinky. Apesar de seu tamanho, prefere a paz e protege seus amigos.",
    details: {
      universo: "Trollhunters",
      poder: "Força Sobre-Humana, Resistência, Lealdade",
      status: "Aliado - Troll Krubera",
      estreia: 2016,
      afiliacao: "Krubera",
      caracteristica: "Gigante Gentil",
      nivel: "A",
    },
    stats: {
      forca: 92,
      velocidade: 70,
      defesa: 94,
      energia: 88,
      habilidade: 75,
    },
  },

  {
    id: 215,
    name: "ROB LUCCI",
    category: "One-Piece",
    image: "img/One-Piece/Rob.png",
    description:
      "Agente do CP9 e posteriormente CP0, considerado o assassino mais letal do Governo Mundial.",
    details: {
      universo: "One Piece",
      poder: "Neko Neko no Mi (Fruta do Leopardo), Rokushiki, Haki",
      status: "Agente do CP0",
      estreia: 1999,
      afiliacao: "CP0",
      caracteristica: "Assassino Supremo",
      nivel: "S+",
    },
    stats: {
      forca: 92,
      velocidade: 95,
      defesa: 88,
      energia: 90,
      habilidade: 93,
    },
  },

  {
    id: 216,
    name: "KIKORU SHINOMIYA",
    category: "Kaiju-No-8",
    image: "img/Kaiju/Kikoru-Shinomiya-1.png",
    description:
      "Oficial prodígio da Força de Defesa contra Kaijus, filha do comandante Isao Shinomiya.",
    details: {
      universo: "Kaiju No. 8",
      poder: "Habilidades de Combate de Elite, Traje de Combate Avançado",
      status: "Oficial da Força de Defesa",
      estreia: 2020,
      afiliacao: "Força de Defesa",
      caracteristica: "Prodígio Militar",
      nivel: "A+",
    },
    stats: {
      forca: 85,
      velocidade: 88,
      defesa: 82,
      energia: 84,
      habilidade: 90,
    },
  },

  {
    id: 217,
    name: "LANCE",
    category: "Pokemon",
    image: "img/Pokemon/lance-1.png",
    description:
      "Membro da Elite Four das regiões Kanto e Johto, posteriormente promovido a Champion. Especialista em Pokémon Dragão.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia com Pokémon Dragão, Liderança",
      status: "Champion/Elite Four",
      estreia: 1999,
      afiliacao: "Elite Four",
      caracteristica: "Mestre Dragão",
      nivel: "S",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 80,
      energia: 88,
      habilidade: 92,
    },
  },

  {
    id: 218,
    name: "GOWTHER ORIGINAL",
    category: "Nanatsu",
    image: "img/Taizai/gowther-Original-1.png",
    description:
      "O grande mago que criou o autômato Gowther, mestre supremo da magia mental e emocional.",
    details: {
      universo: "Nanatsu no Taizai",
      poder: "Magia Mental Suprema, Criação de Autômatos, Manipulação de Almas",
      status: "Mago Lendário - Criador",
      estreia: 2018,
      afiliacao: "Criador",
      caracteristica: "Mago Supremo",
      nivel: "SS+",
    },
    stats: {
      forca: 85,
      velocidade: 82,
      defesa: 80,
      energia: 96,
      habilidade: 98,
    },
  },

  {
    id: 219,
    name: "GAARA",
    category: "Naruto",
    image: "img/Naruto/Gaara-1.png",
    description:
      "Quinto Kazekage da Vila Oculta da Areia e ex-jinchūriki da Shukaku (Uma-Cauda).",
    details: {
      universo: "Naruto",
      poder:
        "Controle de Areia, Defesa Automática da Areia, Jutsu de Selamento",
      status: "Kazekage - Líder da Vila da Areia",
      estreia: 2000,
      afiliacao: "Vila da Areia",
      caracteristica: "Kazekage da Areia",
      nivel: "S+",
    },
    stats: {
      forca: 88,
      velocidade: 82,
      defesa: 92,
      energia: 90,
      habilidade: 88,
    },
  },

  {
    id: 220,
    name: "TAMSY",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Tamsy-2.png",
    description:
      "Personagem do mundo distópico de Gachiakuta, envolvido no complexo sistema de castas e sobrevivência.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades Específicas do Mundo",
      status: "Ativo",
      estreia: 2022,
      afiliacao: "Mundo de Gachiakuta",
      caracteristica: "Sobrevivente Adaptado",
      nivel: "B",
    },
    stats: {
      forca: 75,
      velocidade: 78,
      defesa: 72,
      energia: 76,
      habilidade: 80,
    },
  },

  {
    id: 221,
    name: "ZUKO",
    category: "Avatar",
    image: "img/Avatar/Zuko-1.png",
    description:
      "Príncipe herdeiro da Nação do Fogo que passa por uma jornada de redenção. Conhecido por sua busca por honra.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Fogo, Eletrocondução, Dobra de Fogo dos Dragões",
      status: "Lorde do Fogo - Príncipe da Nação do Fogo",
      estreia: 2005,
      afiliacao: "Nação do Fogo",
      caracteristica: "Caminho da Redenção",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 86,
      defesa: 84,
      energia: 90,
      habilidade: 92,
    },
  },

  {
    id: 222,
    name: "GIYU TOMIOKA",
    category: "Kimetsu no Yaiba",
    image: "img/kimetsu/Giyu-Tomioka-1.png",
    description:
      "Pilar da Água da Corporação de Caçadores de Demônios, conhecido por sua personalidade reservada.",
    details: {
      universo: "Demon Slayer",
      poder: "Respiração da Água, 11ª Forma: Calmaria",
      status: "Pilar - Hashira da Água",
      estreia: 2016,
      afiliacao: "Corporação de Caçadores",
      caracteristica: "11ª Forma da Água",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 90,
      defesa: 85,
      energia: 92,
      habilidade: 94,
    },
  },

  {
    id: 223,
    name: "KAIJU NO. 9",
    category: "Kaiju-No-8",
    image: "img/Kaiju/Kaiju-No-9-1.png",
    description:
      "Kaiju humanoide inteligente e principal antagonista, capaz de absorver habilidades e evoluir constantemente.",
    details: {
      universo: "Kaiju No. 8",
      poder: "Absorção de Habilidades, Transformação, Evolução Rápida",
      status: "Antagonista Principal - Kaiju Evolutivo",
      estreia: 2020,
      afiliacao: "Kaiju",
      caracteristica: "Evolução Constante",
      nivel: "SS+",
    },
    stats: {
      forca: 94,
      velocidade: 92,
      defesa: 90,
      energia: 96,
      habilidade: 95,
    },
  },

  {
    id: 224,
    name: "ILLAOI",
    category: "League of Legend",
    image: "img/lol/illaoi-1.png",
    description:
      "Sacerdotisa do Grande Kraken de Bilgewater, que testa o espírito dos mortais.",
    details: {
      universo: "League of Legends",
      poder: "Invocações do Kraken, Teste do Espírito, Combate com Ídolo",
      status: "Sacerdotisa - Testadora de Espíritos",
      estreia: 2015,
      titulo: "O Teste do Kraken",
      caracteristica: "Teste Espiritual",
      nivel: "A+",
    },
    stats: {
      forca: 90,
      velocidade: 75,
      defesa: 88,
      energia: 85,
      habilidade: 82,
    },
  },

  {
    id: 225,
    name: "GRUNBELD",
    category: "Berserk",
    image: "img/Berserk/grunbeld-1.png",
    description:
      "Um dos apóstolos mais poderosos, comandante da nova Tropa do Falcão. Transforma-se em um dragão de cristal.",
    details: {
      universo: "Berserk",
      poder:
        "Transformação em Dragão de Cristal, Força Colossal, Defesa Absoluta",
      status: "Apóstolo - Comandante da Tropa do Falcão",
      estreia: 1999,
      afiliacao: "Tropa do Falcão",
      caracteristica: "Dragão de Cristal",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 80,
      defesa: 97,
      energia: 94,
      habilidade: 85,
    },
  },

  {
    id: 226,
    name: "SILVA ZOLDYCK",
    category: "HXH",
    image: "img/hxh/silva-zoldyck-1.png",
    description:
      "Chefe da Família Zoldyck, uma das famílias de assassinos mais temidas do mundo. Pai de Killua.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen - Emissor, Técnicas de Assassinato, Força Física",
      status: "Assassino - Chefe da Família Zoldyck",
      estreia: 1999,
      afiliacao: "Família Zoldyck",
      caracteristica: "Chefe dos Assassinos",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 92,
      defesa: 90,
      energia: 95,
      habilidade: 96,
    },
  },

  {
    id: 227,
    name: "EDDARD STARK",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/Ned-Stark-1.png",
    description:
      "Senhor de Winterfell, Protetor do Norte, conhecido por seu forte senso de honra e justiça.",
    details: {
      universo: "Game of Thrones",
      poder: "Liderança, Habilidade com Espada (Gelo), Honra Inabalável",
      status: "Senhor de Winterfell - Executado",
      estreia: 1996,
      afiliacao: "Casa Stark",
      caracteristica: "Honra do Norte",
      nivel: "A+",
    },
    stats: {
      forca: 88,
      velocidade: 82,
      defesa: 85,
      energia: 84,
      habilidade: 90,
    },
  },

  {
    id: 228,
    name: "KALGARA",
    category: "One-Piece",
    image: "img/One-Piece/Kalgara-1.png",
    description:
      "Lendário guerreiro chefe da tribo Shandia de Shandora, conhecido como 'Kalgara do Sul'.",
    details: {
      universo: "One Piece",
      poder: "Habilidades de Combate Tribal, Força Física, Liderança",
      status: "Chefe Guerreiro - Shandia Lendário",
      estreia: 2002,
      afiliacao: "Tribo Shandia",
      caracteristica: "Guerreiro Lendário",
      nivel: "A+",
    },
    stats: {
      forca: 90,
      velocidade: 82,
      defesa: 88,
      energia: 85,
      habilidade: 84,
    },
  },

  {
    id: 229,
    name: "FUNNY VALENTINE",
    category: "jojo",
    image: "img/Jojo/Funny-Valentine-1.png",
    description:
      "23º Presidente dos EUA e antagonista principal de Steel Ball Run. Portador do Stand D4C.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand D4C, Travel Between Dimensions, Love Train",
      status: "Antagonista - Presidente dos EUA",
      estreia: 2004,
      afiliacao: "Governo dos EUA",
      caracteristica: "Love Train",
      nivel: "SSS",
    },
    stats: {
      forca: 85,
      velocidade: 88,
      defesa: 90,
      energia: 94,
      habilidade: 96,
    },
  },

  {
    id: 230,
    name: "TORU RIKIISHI",
    category: "Ashita no Joe",
    image: "img/Ashita-no-Joe/TORU-RIKIISHI-2.png",
    description:
      "Boxeador profissional e primeiro grande rival de Joe Yabuki. Conhecido por seu estilo técnico e rigoroso.",
    details: {
      universo: "Ashita no Joe",
      poder: "Técnica de Boxe Refinada, Disciplina, Estratégia",
      status: "Boxeador Profissional - Rival de Joe",
      estreia: 1968,
      afiliacao: "Boxeador Profissional",
      caracteristica: "Estilo Técnico",
      nivel: "A+",
    },
    stats: {
      forca: 86,
      velocidade: 88,
      defesa: 85,
      energia: 84,
      habilidade: 90,
    },
  },

  {
    id: 231,
    name: "KINJI HAKARI",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Kinji-Hakari-1.png",
    description:
      "Feiticeiro de grau especial. Conhecido por sua técnica amaldiçoada baseada em cassino que concede imortalidade temporária.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Técnica Amaldiçoada: Idle Death Gamble, Imortalidade por Jackpot",
      status: "Feiticeiro de Grau Especial - Estudante",
      estreia: 2021,
      afiliacao: "Jujutsu High",
      caracteristica: "Modo Jackpot",
      nivel: "SS",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 86,
      energia: 92,
      habilidade: 90,
    },
  },

  {
    id: 232,
    name: "IROH",
    category: "Avatar",
    image: "img/Avatar/Iroh-1.png",
    description:
      "Conhecido como 'O Dragão do Oeste', ex-general da Nação do Fogo e tio de Zuko.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Fogo dos Dragões, Eletrocondução, Sabedoria Espiritual",
      status: "Ex-General - Dono da Loja de Chá",
      estreia: 2005,
      afiliacao: "Loja de Chá",
      caracteristica: "Sabedoria dos Dragões",
      nivel: "S+",
    },
    stats: {
      forca: 90,
      velocidade: 82,
      defesa: 88,
      energia: 92,
      habilidade: 95,
    },
  },

  {
    id: 233,
    name: "IRIS",
    category: "Pokemon",
    image: "img/Pokemon/Iris-1.png",
    description:
      "Campeã da região de Unova e especialista em Pokémon do tipo Dragão.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia com Pokémon Dragão, Liderança, Conexão com Pokémon",
      status: "Campeã - Região de Unova",
      estreia: 2010,
      afiliacao: "Liga Pokémon",
      caracteristica: "Campeã Dragon",
      nivel: "S",
    },
    stats: {
      forca: 84,
      velocidade: 86,
      defesa: 82,
      energia: 88,
      habilidade: 92,
    },
  },

  {
    id: 234,
    name: "SETT",
    category: "League of Legend",
    image: "img/lol/Sett-2.png",
    description:
      "Conhecido como 'O Chefe', meio-vastaya meio-humano que domina a cena underground de lutas de Ionia.",
    details: {
      universo: "League of Legends",
      poder: "Força Sobre-Humana, Regeneração Vastaya, Combate Corpo a Corpo",
      status: "Chefe Underground - Dono da Arena de Lutas",
      estreia: 2020,
      titulo: "O Chefe",
      caracteristica: "Força Bruta",
      nivel: "A+",
    },
    stats: {
      forca: 94,
      velocidade: 82,
      defesa: 90,
      energia: 88,
      habilidade: 84,
    },
  },

  {
    id: 235,
    name: "HASHIRAMA SENJU",
    category: "Naruto",
    image: "img/Naruto/Hashirama-1.png",
    description:
      "Primeiro Hokage da Vila Oculta da Folha, co-fundador de Konoha. Conhecido como 'Deus Shinobi'.",
    details: {
      universo: "Naruto",
      poder: "Mokuton (Estilo Madeira), Regeneração Celular, Senjutsu",
      status: "Primeiro Hokage - Lendário",
      estreia: 2002,
      afiliacao: "Vila da Folha",
      caracteristica: "Deus Shinobi",
      nivel: "SSS",
    },
    stats: {
      forca: 98,
      velocidade: 92,
      defesa: 96,
      energia: 99,
      habilidade: 95,
    },
  },

  {
    id: 236,
    name: "KEI KARUIZAWA",
    category: "Classroom of the Elite",
    image: "img/classroom-of-the-elite/Kei-Karuizawa-1.png",
    description:
      "Estudante popular da Classe D, conhecida por seu estilo fashion e influência social.",
    details: {
      universo: "Classroom of the Elite",
      poder: "Influência Social, Inteligência Emocional, Adaptação",
      status: "Estudante - Classe D",
      estreia: 2017,
      afiliacao: "ANHS Classe D",
      caracteristica: "Rainha Social",
      nivel: "B",
    },
    stats: {
      forca: 65,
      velocidade: 70,
      defesa: 68,
      energia: 72,
      habilidade: 85,
    },
  },

  {
    id: 237,
    name: "SCHIERKE",
    category: "Berserk",
    image: "img/Berserk/Schierke-1.png",
    description:
      "Jovem feiticeira aprendiz da maga Flora, que se junta ao grupo de Guts.",
    details: {
      universo: "Berserk",
      poder: "Magia Elemental, Invocação de Espíritos, Proteção Espiritual",
      status: "Feiticeira - Membro do Grupo de Guts",
      estreia: 1999,
      afiliacao: "Grupo de Guts",
      caracteristica: "Feiticeira Elemental",
      nivel: "A+",
    },
    stats: {
      forca: 70,
      velocidade: 75,
      defesa: 72,
      energia: 88,
      habilidade: 90,
    },
  },

  {
    id: 238,
    name: "FISHER TIGER",
    category: "One-Piece",
    image: "img/One-Piece/Fisher-Tiger-1.png",
    description:
      "Lendário fish-man que conquistou a liberdade sozinho. Fundador dos Piratas do Sol.",
    details: {
      universo: "One Piece",
      poder: "Fish-Man Karate, Força Sobre-Humana, Natação Excepcional",
      status: "Herói Lendário - Fundador dos Piratas do Sol",
      estreia: 2010,
      recompensa: "฿230,000,000 (estimada)",
      caracteristica: "Libertador dos Fish-Men",
      nivel: "S",
    },
    stats: {
      forca: 92,
      velocidade: 88,
      defesa: 90,
      energia: 92,
      habilidade: 88,
    },
  },

  {
    id: 239,
    name: "YONG-BI KIM",
    category: "Ashita no Joe",
    image: "img/Ashita-no-Joe/Yong-Bi-Kim-1.png",
    description:
      "Boxeador profissional coreano que enfrenta Joe Yabuki em uma luta internacional.",
    details: {
      universo: "Ashita no Joe",
      poder: "Técnica de Boxe Avançada, Experiência Internacional, Estratégia",
      status: "Boxeador Profissional - Internacional",
      estreia: 1970,
      afiliacao: "Boxeador Internacional",
      caracteristica: "Estilo Coreano",
      nivel: "A",
    },
    stats: {
      forca: 84,
      velocidade: 86,
      defesa: 82,
      energia: 85,
      habilidade: 88,
    },
  },

  {
    id: 240,
    name: "KITE",
    category: "HXH",
    image: "img/hxh/kite-1.png",
    description:
      "Hunter profissional e ex-aluno de Ging Freecss, que se torna mentor de Gon.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen - Crazy Slots (9 armas aleatórias), Habilidade de Caçador",
      status: "Hunter Profissional - Mentor",
      estreia: 1999,
      afiliacao: "Hunter Association",
      caracteristica: "Crazy Slots",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 86,
      defesa: 84,
      energia: 90,
      habilidade: 92,
    },
  },

  {
    id: 241,
    name: "TYRION LANNISTER",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/Tyrion-Lannister-1.png",
    description:
      "Membro da Casa Lannister, conhecido por sua inteligência afiada e habilidade política excepcional.",
    details: {
      universo: "Game of Thrones",
      poder: "Inteligência Estratégica, Habilidade Política, Oratória",
      status: "Mão do Rei - Conselheiro Real",
      estreia: 1996,
      afiliacao: "Casa Lannister",
      caracteristica: "Estrategista Supremo",
      nivel: "A+",
    },
    stats: {
      forca: 65,
      velocidade: 70,
      defesa: 68,
      energia: 80,
      habilidade: 95,
    },
  },

  {
    id: 242,
    name: "YUKI TSUKUMO",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Yuki-Tsukumo-1.png",
    description:
      "Uma das quatro feiticeiras de grau especial do mundo, ao lado de Satoru Gojo.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Técnica Amaldiçoada: Star Plasma, Manipulação de Massa",
      status: "Feiticeira de Grau Especial - Star Plasma Vessel",
      estreia: 2021,
      afiliacao: "Jujutsu Society",
      caracteristica: "Manipulação de Massa",
      nivel: "SS+",
    },
    stats: {
      forca: 92,
      velocidade: 88,
      defesa: 90,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 243,
    name: "ROKUSUKE KOENJI",
    category: "Classroom of the Elite",
    image: "img/classroom-of-the-elite/Rokusuke-Koenji-1.png",
    description:
      "Estudante extremamente confiante e excêntrico da Classe D, com habilidades físicas excepcionais.",
    details: {
      universo: "Classroom of the Elite",
      poder: "Habilidades Físicas Excepcionais, Inteligência, Autoconfiança",
      status: "Estudante - Classe D",
      estreia: 2017,
      afiliacao: "ANHS Classe D",
      caracteristica: "Perfeccionista Narcisista",
      nivel: "A",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 84,
      energia: 86,
      habilidade: 90,
    },
  },

  {
    id: 244,
    name: "MARK GRAYSON",
    category: "Invencível",
    image: "img/Invencível/Mark-Grayson-1.png",
    description:
      "Protagonista da série Invincible, filho de Omni-Man e herdeiro dos poderes Viltrumitas.",
    details: {
      universo: "Invincible",
      poder: "Força Viltrumita, Voo, Durabilidade, Velocidade Sobre-Humana",
      status: "Herói - Invencível",
      estreia: 2003,
      afiliacao: "Viltrumitas",
      caracteristica: "Herói em Desenvolvimento",
      nivel: "S+",
    },
    stats: {
      forca: 95,
      velocidade: 94,
      defesa: 92,
      energia: 96,
      habilidade: 88,
    },
  },

  {
    id: 245,
    name: "OZAI",
    category: "Avatar",
    image: "img/Avatar/Ozai.png",
    description:
      "Senhor do Fogo da Nação do Fogo durante a Guerra dos Cem Anos e principal antagonista.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Fogo Poderosa, Eletrocondução, Agilidade em Combate",
      status: "Antagonista - Senhor do Fogo",
      estreia: 2006,
      afiliacao: "Nação do Fogo",
      caracteristica: "Senhor do Fogo Supremo",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 88,
      defesa: 90,
      energia: 96,
      habilidade: 92,
    },
  },

  {
    id: 246,
    name: "YRUL",
    category: "Black Clover",
    image: "img/Black Clover/yrul-1.png",
    description:
      "Personagem do universo de Black Clover, envolvido nas batalhas mágicas do Reino do Trifolium.",
    details: {
      universo: "Black Clover",
      poder: "Magia Específica de Yrul",
      status: "Ativo - Usuário de Magia",
      estreia: 2015,
      afiliacao: "Reino do Trifolium",
      caracteristica: "Usuário de Magia",
      nivel: "A",
    },
    stats: {
      forca: 82,
      velocidade: 80,
      defesa: 78,
      energia: 85,
      habilidade: 84,
    },
  },

  {
    id: 247,
    name: "IRVINE",
    category: "Berserk",
    image: "img/Berserk/Irvine-1.png",
    description:
      "Apóstolo que serve a Griffith na nova Tropa do Falcão, conhecido como o 'Arqueiro Silencioso'.",
    details: {
      universo: "Berserk",
      poder: "Arqueiro Supremo, Transformação em Centauro, Sentidos Aguçados",
      status: "Apóstolo - Arqueiro da Tropa do Falcão",
      estreia: 1999,
      afiliacao: "Tropa do Falcão",
      caracteristica: "Arqueiro Centauro",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 82,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 248,
    name: "DIEGO BRANDO",
    category: "jojo",
    image: "img/Jojo/Diego-Brando-1.png",
    description:
      "Cavaleiro britânico que participa da Steel Ball Run, versão alternativa de Dio Brando.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand Scary Monsters, Transformação em Dinossauro",
      status: "Cavaleiro - Competidor da Steel Ball Run",
      estreia: 2004,
      afiliacao: "Competidor Steel Ball Run",
      caracteristica: "Transformação Dinossauro",
      nivel: "A+",
    },
    stats: {
      forca: 88,
      velocidade: 92,
      defesa: 85,
      energia: 90,
      habilidade: 88,
    },
  },

  {
    id: 249,
    name: "HIROMI HIGURUMA",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Hiromi-Higuruma-1.png",
    description:
      "Ex-advogado que se tornou um usuário de maldição. Conhecido como 'Juiz Amaldiçoado'.",
    details: {
      universo: "Jujutsu Kaisen",
      poder: "Técnica Amaldiçoada: Deadly Sentencing, Domínio Malevolente",
      status: "Usuário de Maldição - Ex-Advogado",
      estreia: 2021,
      afiliacao: "Jujutsu Society",
      caracteristica: "Domínio Judicial",
      nivel: "S",
    },
    stats: {
      forca: 82,
      velocidade: 84,
      defesa: 80,
      energia: 88,
      habilidade: 92,
    },
  },

  {
    id: 250,
    name: "HARIMAU",
    category: "Ashita no Joe",
    image: "img/Ashita-no-Joe/Harimau-1.png",
    description:
      "Boxeador indonésio que enfrenta Joe Yabuki em uma luta internacional.",
    details: {
      universo: "Ashita no Joe",
      poder: "Estilo de Boxe Agressivo, Força Física",
      status: "Boxeador Profissional - Internacional",
      estreia: 1971,
      afiliacao: "Boxeador Internacional",
      caracteristica: "Estilo Agressivo",
      nivel: "B+",
    },
    stats: {
      forca: 84,
      velocidade: 82,
      defesa: 80,
      energia: 82,
      habilidade: 85,
    },
  },

  {
    id: 251,
    name: "KING",
    category: "One-Piece",
    image: "img/One-Piece/king-1.png",
    description:
      "Calamidade mais forte dos Piratas das Feras e braço direito de Kaido. Último sobrevivente da raça Lunarian, possui habilidades únicas como geração de fogo, durabilidade extrema e capacidade de voo.",
    details: {
      universo: "One Piece",
      poder:
        "Habilidades Lunarian, Geração de Fogo, Forma de Pteranodon, Haki Avançado",
      status: "Calamidade - Braço Direito de Kaido",
      estreia: 2018,
      recompensa: "฿1,390,000,000",
      caracteristica: "Último Lunarian",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 88,
      defesa: 95,
      energia: 92,
      habilidade: 86,
    },
  },

  {
    id: 252,
    name: "POWER",
    category: "Chainsaw Man",
    image: "img/Chainsaw-Man/Power-1.png",
    description:
      "Demônio do Sangue que faz contrato com Denji. Conhecida por sua personalidade egoísta e obsessão por gatos, capaz de manipular sangue para criar armas.",
    details: {
      universo: "Chainsaw Man",
      poder:
        "Manipulação de Sangue, Transformação de Sangue em Armas, Contrato Demoníaco",
      status: "Ex-Membro da Divisão de Demônios Especiais",
      estreia: 2019,
      afiliacao: "Demônio do Sangue",
      caracteristica: "Personalidade Egoísta",
      nivel: "A+",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 78,
      energia: 88,
      habilidade: 84,
    },
  },

  {
    id: 253,
    name: "JULIUS NOVACHRONO",
    category: "Black Clover",
    image: "img/Black Clover/Julius-Novachrono-1.png",
    description:
      "28º Mago Imperador do Reino do Trifolium, conhecido como o mago mais forte do reino. Usuário da rara magia do tempo.",
    details: {
      universo: "Black Clover",
      poder:
        "Magia do Tempo, Aceleração/Desaceleração Temporal, Parada do Tempo",
      status: "Mago Imperador - Líder do Reino",
      estreia: 2015,
      titulo: "28º Mago Imperador",
      caracteristica: "Colecionador de Magias",
      nivel: "SSS",
    },
    stats: {
      forca: 85,
      velocidade: 90,
      defesa: 88,
      energia: 98,
      habilidade: 99,
    },
  },

  {
    id: 254,
    name: "RICHTER BELMONT",
    category: "Castlevania",
    image: "img/castlevania/Richter-Belmont-1.png",
    description:
      "Descendente da família Belmont e um dos caçadores de vampiros mais famosos da linhagem. Protagonista de Rondo of Blood e Symphony of the Night.",
    details: {
      universo: "Castlevania",
      poder: "Chicote Vampire Killer, Artes Marciais Belmont, Magias Sagradas",
      status: "Caçador de Vampiros - Descendente de Belmont",
      estreia: 1993,
      titulo: "Herdeiro Belmont",
      caracteristica: "Agilidade Excepcional",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 92,
      defesa: 85,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 255,
    name: "LEVI ACKERMAN",
    category: "Shingeki-no-Kyojin",
    image: "img/Shingeki-no-Kyojin/Levi-Ackerman-1.png",
    description:
      "Capitão do Esquadrão de Operações Especiais e considerado o soldado mais forte da humanidade. Membro da família Ackerman.",
    details: {
      universo: "Shingeki no Kyojin",
      poder:
        "Habilidades Ackerman, Agilidade Sobrenatural, Combate Tridimensional",
      status: "Capitão - Esquadrão de Operações Especiais",
      estreia: 2009,
      titulo: "Soldado Mais Forte",
      caracteristica: "Limpeza Obsessiva",
      nivel: "S+",
    },
    stats: {
      forca: 88,
      velocidade: 99,
      defesa: 85,
      energia: 90,
      habilidade: 98,
    },
  },

  {
    id: 256,
    name: "KHAL DROGO",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/Khal-Drogo-1.png",
    description:
      "Khal dos Dothraki, considerado o guerreiro mais forte entre seu povo. Marido de Daenerys Targaryen.",
    details: {
      universo: "Game of Thrones",
      poder: "Força Física Extrema, Habilidades de Combate Dothraki, Liderança",
      status: "Khal dos Dothraki - Falecido",
      estreia: 1996,
      titulo: "Grande Khal",
      caracteristica: "Líder Incontestável",
      nivel: "A+",
    },
    stats: {
      forca: 95,
      velocidade: 85,
      defesa: 88,
      energia: 90,
      habilidade: 86,
    },
  },

  {
    id: 257,
    name: "SUZUNE HORIKITA",
    category: "Classroom of the Elite",
    image: "img/classroom-of-the-elite/Suzune-Horikita-1.png",
    description:
      "Estudante da Classe D conhecida por sua personalidade fria, independente e altas habilidades acadêmicas.",
    details: {
      universo: "Classroom of the Elite",
      poder: "Inteligência Acadêmica, Independência, Habilidades Analíticas",
      status: "Estudante - Classe D",
      estreia: 2015,
      afiliacao: "Escola Tokyo Metropolitan Advanced Nurturing",
      caracteristica: "Personalidade Fria",
      nivel: "B+",
    },
    stats: {
      forca: 68,
      velocidade: 75,
      defesa: 70,
      energia: 78,
      habilidade: 88,
    },
  },

  {
    id: 258,
    name: "AANG",
    category: "Avatar",
    image: "img/Avatar/Aang-1.png",
    description:
      "O Avatar e último mestre do ar sobrevivente. Deve dominar os quatro elementos e restaurar o equilíbrio ao mundo.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra dos Quatro Elementos, Estado Avatar, Energia",
      status: "Avatar - O Último Mestre do Ar",
      estreia: 2005,
      titulo: "O Avatar",
      caracteristica: "Alegre e Pacifista",
      nivel: "SS",
    },
    stats: {
      forca: 85,
      velocidade: 92,
      defesa: 88,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 259,
    name: "JOSUKE HIGASHIKATA (JOJOLION)",
    category: "jojo",
    image: "img/Jojo/josuke-higashikata-part-8.png",
    description:
      "Protagonista de JoJo's Bizarre Adventure Part 8: JoJolion. Um amnésico encontrado enterrado em Morioh.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand Soft & Wet, Roubo de Propriedades, Bolhas Explosivas",
      status: "Protagonista - Amnésico / Fusão",
      estreia: 2011,
      titulo: "Portador do Soft & Wet",
      caracteristica: "Fusão de Dois Indivíduos",
      nivel: "S+",
    },
    stats: {
      forca: 84,
      velocidade: 86,
      defesa: 82,
      energia: 88,
      habilidade: 92,
    },
  },

  {
    id: 260,
    name: "UVOGIN",
    category: "HXH",
    image: "img/hxh/Uvogin-1.png",
    description:
      "Membro número 11 da Tropa Fantasma e especialista em Nen de Reforço. Conhecido por sua força física monstruosa.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen - Reforço Extremo, Força Física Colossal, Big Bang Impact",
      status: "Membro da Tropa Fantasma - Falecido",
      estreia: 1999,
      afiliacao: "Phantom Troupe",
      caracteristica: "Força Bruta Pura",
      nivel: "S",
    },
    stats: {
      forca: 98,
      velocidade: 75,
      defesa: 92,
      energia: 90,
      habilidade: 78,
    },
  },

  {
    id: 261,
    name: "SOSUKE AIZEN",
    category: "Bleach",
    image: "img/Bleach/Sosuke-Aizen-1.png",
    description:
      "Antagonista principal de Bleach, ex-capitão da 5ª Divisão. Usuário da Zanpakutō Kyōka Suigetsu com habilidade de ilusão perfeita.",
    details: {
      universo: "Bleach",
      poder:
        "Kyōka Suigetsu (Ilusão Completa), Reiatsu Monstruoso, Evolução Transcendente",
      status: "Antagonista - Prisioneiro",
      estreia: 2002,
      titulo: "Ex-Capitão da 5ª Divisão",
      caracteristica: "Mestre das Ilusões",
      nivel: "SSS",
    },
    stats: {
      forca: 95,
      velocidade: 92,
      defesa: 94,
      energia: 99,
      habilidade: 100,
    },
  },

  {
    id: 262,
    name: "JOSE MENDOZA",
    category: "Ashita no Joe",
    image: "img/Ashita-no-Joe/Jose-Mendosa-1.png",
    description:
      "Campeão mundial de boxe dos pesos-médios e oponente final de Joe Yabuki. Conhecido como 'O Imperador'.",
    details: {
      universo: "Ashita no Joe",
      poder: "Técnica de Boxe Perfeita, Experiência Mundial, Estratégia",
      status: "Campeão Mundial de Boxe",
      estreia: 1972,
      titulo: "O Imperador",
      caracteristica: "Boxe Técnico Perfeito",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 82,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 263,
    name: "SWAIN",
    category: "League of Legend",
    image: "img/lol/Swain-1.png",
    description:
      "Grande General de Noxus e líder do Trifarix. Após derrotar o demônio Raum, ganhou poderes demoníacos.",
    details: {
      universo: "League of Legends",
      poder:
        "Controle Demoníaco, Visão através de Corvos, Transformação Demoníaca",
      status: "Grande General - Líder de Noxus",
      estreia: 2010,
      titulo: "O Grande General",
      caracteristica: "Estrategista Implacável",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 75,
      defesa: 85,
      energia: 92,
      habilidade: 94,
    },
  },

  {
    id: 264,
    name: "VOID",
    category: "Berserk",
    image: "img/Berserk/Void-1.png",
    description:
      "Membro mais antigo e líder intelectual da Mão de Deus, conhecido como 'O Sábio'. Responsável por criar os apóstolos.",
    details: {
      universo: "Berserk",
      poder:
        "Conhecimento Cósmico, Criação de Apóstolos, Manipulação da Realidade",
      status: "Membro da Mão de Deus - O Sábio",
      estreia: 1992,
      titulo: "O Sábio",
      caracteristica: "Conhecimento Absoluto",
      nivel: "SSS",
    },
    stats: {
      forca: 90,
      velocidade: 85,
      defesa: 92,
      energia: 99,
      habilidade: 98,
    },
  },

  {
    id: 265,
    name: "MAHITO",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Mahito-1.png",
    description:
      "Maldição da Forma Humana nascida do ódio humano. Capaz de manipular a forma das almas, moldando corpos e transformando humanos.",
    details: {
      universo: "Jujutsu Kaisen",
      poder:
        "Manipulação de Alma, Transformação Corporal, Self-Embodiment of Perfection",
      status: "Maldição de Grau Especial",
      estreia: 2018,
      afiliacao: "Maldições",
      caracteristica: "Maldição da Forma Humana",
      nivel: "SS+",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 90,
      energia: 94,
      habilidade: 96,
    },
  },

  {
    id: 266,
    name: "BOA HANCOCK",
    category: "One-Piece",
    image: "img/One-Piece/Boa-Hancock-1.png",
    description:
      "Imperatriz das Amazonas Kuja, ex-Shichibukai e conhecida como a 'Mulher Mais Bela do Mundo'. Usuária da Mero Mero no Mi.",
    details: {
      universo: "One Piece",
      poder:
        "Mero Mero no Mi (Fruta do Amor), Haki dos Três Tipos, Combate com Chutes",
      status: "Imperatriz - Líder das Amazonas Kuja",
      estreia: 2008,
      recompensa: "฿1,659,000,000",
      caracteristica: "Mulher Mais Bela do Mundo",
      nivel: "S+",
    },
    stats: {
      forca: 86,
      velocidade: 92,
      defesa: 84,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 267,
    name: "HIMENO",
    category: "Chainsaw Man",
    image: "img/Chainsaw-Man/Himeno-1.png",
    description:
      "Caçadora de demônios da Divisão de Demônios Especiais e parceira de Aki Hayakawa. Possui contrato com o Demônio do Fantasma.",
    details: {
      universo: "Chainsaw Man",
      poder:
        "Contrato com Demônio do Fantasma, Olho Fantasma, Experiência em Combate",
      status: "Caçadora de Demônios - Divisão Especial",
      estreia: 2019,
      afiliacao: "Divisão de Demônios Especiais",
      caracteristica: "Parceira de Aki",
      nivel: "B+",
    },
    stats: {
      forca: 78,
      velocidade: 82,
      defesa: 75,
      energia: 80,
      habilidade: 85,
    },
  },

  {
    id: 268,
    name: "JESTER GARANDROS",
    category: "Black Clover",
    image: "img/Black Clover/Jester-Garandros-1.png",
    description:
      "Mago do Reino do Trifolium com habilidades mágicas únicas no universo de Black Clover.",
    details: {
      universo: "Black Clover",
      poder: "Magia Específica de Jester Garandros",
      status: "Mago - Reino do Trifolium",
      estreia: 2015,
      afiliacao: "Reino do Trifolium",
      caracteristica: "Mago Especializado",
      nivel: "A",
    },
    stats: {
      forca: 80,
      velocidade: 78,
      defesa: 75,
      energia: 85,
      habilidade: 82,
    },
  },

  {
    id: 269,
    name: "BANG",
    category: "One Punch Man",
    image: "img/One-Punch-Man/Bang-1.png",
    description:
      "Herói profissional Classe S Rank 3, conhecido como 'Silver Fang'. Mestre das artes marciais e fundador do dojo Bang.",
    details: {
      universo: "One Punch Man",
      poder:
        "Artes Marciais de Nível Divino, Velocidade Extrema, Técnica 'Abandonment'",
      status: "Herói Classe S Rank 3",
      estreia: 2012,
      titulo: "Silver Fang",
      caracteristica: "Mestre de Artes Marciais",
      nivel: "SS+",
    },
    stats: {
      forca: 92,
      velocidade: 95,
      defesa: 88,
      energia: 90,
      habilidade: 98,
    },
  },

  {
    id: 270,
    name: "JAIME LANNISTER",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/Jaime-Lannister-1.png",
    description:
      "Membro da Casa Lannister, conhecido como 'O Matador de Reis'. Considerado um dos melhores espadachins de Westeros.",
    details: {
      universo: "Game of Thrones",
      poder: "Espadachim Excepcional, Estratégia Militar, Coragem",
      status: "Lord Comandante da Guarda Real - Falecido",
      estreia: 1996,
      titulo: "O Matador de Reis",
      caracteristica: "Redenção Moral",
      nivel: "A+",
    },
    stats: {
      forca: 88,
      velocidade: 85,
      defesa: 82,
      energia: 84,
      habilidade: 94,
    },
  },

  {
    id: 271,
    name: "M. BISON",
    category: "Street-Fighter",
    image: "img/Street-Fighter/M-Bison-1.png",
    description:
      "Ditador e líder da organização criminosa Shadaloo, principal antagonista da série Street Fighter. Utiliza o Psycho Power.",
    details: {
      universo: "Street Fighter",
      poder: "Psycho Power, Telecinese, Voo, Projeção de Energia",
      status: "Antagonista - Líder da Shadaloo",
      estreia: 1991,
      titulo: "Ditador da Shadaloo",
      caracteristica: "Poder Psíquico Devastador",
      nivel: "SS",
    },
    stats: {
      forca: 94,
      velocidade: 88,
      defesa: 90,
      energia: 96,
      habilidade: 92,
    },
  },

  {
    id: 272,
    name: "MIKASA ACKERMAN",
    category: "Shingeki-no-Kyojin",
    image: "img/Shingeki-no-Kyojin/Mikasa-Ackerman-1.png",
    description:
      "Membro do Esquadrão de Operações Especiais e considerada a soldada mais forte após Levi. Última descendente do clã Ackerman asiático.",
    details: {
      universo: "Shingeki no Kyojin",
      poder:
        "Habilidades Ackerman, Agilidade Sobrenatural, Instinto de Batalha",
      status: "Soldada - Esquadrão de Operações Especiais",
      estreia: 2009,
      titulo: "Soldada Mais Forte",
      caracteristica: "Proteção a Eren",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 96,
      defesa: 86,
      energia: 88,
      habilidade: 94,
    },
  },

  {
    id: 273,
    name: "CASCA",
    category: "Berserk",
    image: "img/Berserk/Casca-1.png",
    description:
      "Única mulher no Bando do Falcão original e uma das melhores espadachins do grupo. Noiva de Guts e segunda em comando após Griffith.",
    details: {
      universo: "Berserk",
      poder: "Habilidades de Espada Excepcionais, Liderança, Resistência",
      status: "Ex-Membro do Bando do Falcão",
      estreia: 1990,
      titulo: "Espadachim do Falcão",
      caracteristica: "Trauma Pós-Eclipse",
      nivel: "A+",
    },
    stats: {
      forca: 84,
      velocidade: 88,
      defesa: 82,
      energia: 85,
      habilidade: 90,
    },
  },

  {
    id: 274,
    name: "KANICHI NISHI",
    category: "Ashita no Joe",
    image: "img/Ashita-no-Joe/Kanichi-Nishi-1.png",
    description:
      "Boxeador que faz parte do universo de Ashita no Joe, participando das competições e desafios do mundo do boxe.",
    details: {
      universo: "Ashita no Joe",
      poder: "Habilidades de Boxe",
      status: "Boxeador",
      estreia: 1968,
      afiliacao: "Mundo do Boxe",
      caracteristica: "Boxeador Competitivo",
      nivel: "B",
    },
    stats: {
      forca: 80,
      velocidade: 78,
      defesa: 75,
      energia: 82,
      habilidade: 80,
    },
  },

  {
    id: 275,
    name: "TREVOR BELMONT",
    category: "Castlevania",
    image: "img/castlevania/Trevor-Belmont-1.png",
    description:
      "Caçador de vampiros da família Belmont que vive durante o século 15, protagonista de Dracula's Curse.",
    details: {
      universo: "Castlevania",
      poder:
        "Chicote Vampire Killer, Artes Marciais Belmont, Armas Secundárias",
      status: "Caçador de Vampiros - Ancestral Belmont",
      estreia: 1989,
      titulo: "Caçador de Drácula",
      caracteristica: "Primeiro Belmont Contra Drácula",
      nivel: "S",
    },
    stats: {
      forca: 90,
      velocidade: 86,
      defesa: 88,
      energia: 85,
      habilidade: 92,
    },
  },

  {
    id: 276,
    name: "GERARD VALKYRIE",
    category: "Bleach",
    image: "img/Bleach/Gerard-Valkyrie-1.png",
    description:
      "Sternritter 'M' (The Miracle) do exército de Yhwach, conhecido como o 'Cavaleiro Milagroso'. Transforma fé e esperança em poder.",
    details: {
      universo: "Bleach",
      poder:
        "The Miracle (transformação divina), Crescimento com Fé, Força Divina",
      status: "Sternritter - Cavaleiro Milagroso",
      estreia: 2014,
      titulo: "O Milagre",
      caracteristica: "Crescimento com Cada Derrota",
      nivel: "SS+",
    },
    stats: {
      forca: 96,
      velocidade: 82,
      defesa: 94,
      energia: 95,
      habilidade: 85,
    },
  },

  {
    id: 277,
    name: "KILLUA ZOLDYCK",
    category: "HXH",
    image: "img/hxh/Killua-Zoldyck-1.png",
    description:
      "Herdeiro da família de assassinos Zoldyck e melhor amigo de Gon Freecss. Especialista em Nen com eletricidade.",
    details: {
      universo: "Hunter x Hunter",
      poder:
        "Nen - Eletricidade (Godspeed), Velocidade Extrema, Habilidades de Assassinato",
      status: "Assassino - Herdeiro dos Zoldyck",
      estreia: 1998,
      titulo: "Herdeiro Zoldyck",
      caracteristica: "Velocidade Relâmpago",
      nivel: "S+",
    },
    stats: {
      forca: 85,
      velocidade: 99,
      defesa: 82,
      energia: 88,
      habilidade: 94,
    },
  },

  {
    id: 278,
    name: "RYU ISHIGORI",
    category: "jujutsu kaisen",
    image: "img/Jujutsu/Ryu-Ishigori-1.png",
    description:
      "Feiticeiro jujutsu da Era de Ouro reencarnado. Conhecido por possuir quantidade colossal de energia amaldiçoada.",
    details: {
      universo: "Jujutsu Kaisen",
      poder:
        "Energia Amaldiçoada Colossal, Feixes de Energia Pura, Força Bruta",
      status: "Feiticeiro da Era de Ouro - Reencarnado",
      estreia: 2021,
      titulo: "Deus da Energia Pura",
      caracteristica: "Energia Amaldiçoada Massiva",
      nivel: "SS",
    },
    stats: {
      forca: 94,
      velocidade: 85,
      defesa: 90,
      energia: 98,
      habilidade: 88,
    },
  },

  {
    id: 279,
    name: "KATANA MAN",
    category: "Chainsaw Man",
    image: "img/Chainsaw-Man/Katana-Man-1.png",
    description:
      "Demônio-humano que pode transformar partes de seu corpo em katanas afiadas. Neto do Demônio da Katana.",
    details: {
      universo: "Chainsaw Man",
      poder:
        "Transformação em Katanas, Habilidades de Corte Afiadas, Híbrido Demônio-Humano",
      status: "Antagonista - Híbrido Demônio da Katana",
      estreia: 2019,
      titulo: "Híbrido Katana",
      caracteristica: "Vingança Contra Denji",
      nivel: "A+",
    },
    stats: {
      forca: 86,
      velocidade: 84,
      defesa: 80,
      energia: 85,
      habilidade: 88,
    },
  },

  {
    id: 280,
    name: "VOLIBEAR",
    category: "League of Legend",
    image: "img/lol/Volibear-1.png",
    description:
      "O Trovão Implacável, um antigo demiurgo Freljordiano e deus da guerra, tempestade e trovão. Irmão de Ornn.",
    details: {
      universo: "League of Legends",
      poder:
        "Controle de Tempestades e Trovões, Força Primordial, Imortalidade Divina",
      status: "Demiurgo - Deus Antigo do Freljord",
      estreia: 2011,
      titulo: "O Trovão Implacável",
      caracteristica: "Restaurador da Natureza Selvagem",
      nivel: "SS",
    },
    stats: {
      forca: 97,
      velocidade: 82,
      defesa: 96,
      energia: 95,
      habilidade: 85,
    },
  },

  {
    id: 281,
    name: "HARALD",
    category: "One-Piece",
    image: "img/One-Piece/Harald-1.png",
    description:
      "Personagem do universo de One Piece, envolvido nas aventuras e conflitos do mundo dos piratas.",
    details: {
      universo: "One Piece",
      poder: "Habilidades específicas de One Piece",
      status: "Ativo - Personagem de One Piece",
      estreia: 2026,
      afiliacao: "Mundo de One Piece",
      caracteristica: "Aventureiro",
      nivel: "B+",
    },
    stats: {
      forca: 96,
      velocidade: 75,
      defesa: 90,
      energia: 91,
      habilidade: 82,
    },
  },

  {
    id: 282,
    name: "OROCHI",
    category: "One Punch Man",
    image: "img/One-Punch-Man/Orochi-1.png",
    description:
      "Monstro Deus e líder da Associação de Monstros. Capaz de absorver outros monstros e adaptar suas habilidades.",
    details: {
      universo: "One Punch Man",
      poder: "Absorção de Monstros, Adaptação, Forma de Dragão, Regeneração",
      status: "Ex-Líder da Associação de Monstros",
      estreia: 2016,
      titulo: "Monstro Deus",
      caracteristica: "Evolução Constante",
      nivel: "SS+",
    },
    stats: {
      forca: 96,
      velocidade: 88,
      defesa: 94,
      energia: 95,
      habilidade: 90,
    },
  },

  {
    id: 283,
    name: "SOUTH TERANO",
    category: "tokyo",
    image: "img/tokyo-revengers/South-Terano-1.png",
    description:
      "Líder da gangue Rokuhara Tandai e um dos antagonistas mais fortes de Tokyo Revengers.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Força Física Extrema, Combate Brutal, Liderança Gangster",
      status: "Antagonista - Líder da Rokuhara Tandai",
      estreia: 2019,
      titulo: "Líder da Rokuhara",
      caracteristica: "Violência Extrema",
      nivel: "S",
    },
    stats: {
      forca: 95,
      velocidade: 80,
      defesa: 88,
      energia: 90,
      habilidade: 82,
    },
  },

  {
    id: 284,
    name: "ZENO ZOLDYCK",
    category: "HXH",
    image: "img/hxh/Zeno-Zoldyck-1.png",
    description:
      "Patriarca da família Zoldyck e avô de Killua. Considerado um dos assassinos mais experientes e perigosos.",
    details: {
      universo: "Hunter x Hunter",
      poder:
        "Nen - Emissão (Dragão), Experiência de Assassinato, Habilidades Zoldyck",
      status: "Assassino - Patriarca dos Zoldyck",
      estreia: 1999,
      titulo: "Patriarca Zoldyck",
      caracteristica: "Dragões de Energia",
      nivel: "S+",
    },
    stats: {
      forca: 88,
      velocidade: 90,
      defesa: 85,
      energia: 92,
      habilidade: 94,
    },
  },

  {
    id: 285,
    name: "AEGON TARGARYEN",
    category: "Game of Thrones",
    image: "img/Game-of-Thrones/Aegon-Targaryen-1.png",
    description:
      "Conhecido como Aegon, o Conquistador, fundador da Dinastia Targaryen e primeiro Rei dos Sete Reinos.",
    details: {
      universo: "Game of Thrones",
      poder: "Estratégia Militar, Liderança, Montaria de Dragão (Balerion)",
      status: "Rei - Fundador da Dinastia Targaryen",
      estreia: 1996,
      titulo: "O Conquistador",
      caracteristica: "Conquistador de Westeros",
      nivel: "SS",
    },
    stats: {
      forca: 90,
      velocidade: 82,
      defesa: 88,
      energia: 92,
      habilidade: 94,
    },
  },

  {
    id: 286,
    name: "MINA LOVEBERRY",
    category: "Star-vs.",
    image: "img/star-vs/Mina-Loveberry-1.png",
    description:
      "Guerreira de Mewni e líder das Guerreras do Arco-Íris. Extremamente poderosa e leal à causa de exterminar monstros.",
    details: {
      universo: "Star vs. the Forces of Evil",
      poder: "Força Sobre-Humana, Habilidades de Combate, Liderança Militar",
      status: "Guerreira - Líder das Guerreras do Arco-Íris",
      estreia: 2017,
      titulo: "Líder das Guerreras",
      caracteristica: "Preconceito Radical",
      nivel: "A+",
    },
    stats: {
      forca: 88,
      velocidade: 82,
      defesa: 85,
      energia: 84,
      habilidade: 80,
    },
  },

  {
    id: 287,
    name: "SISTER FRIEDE",
    category: "souls",
    image: "img/souls/Sister-Friede-1.png",
    description:
      "Chefe do DLC Ashes of Ariandel em Dark Souls III. Uma das Filhas das Cinzas que rejeitou ligar a Primeira Chama.",
    details: {
      universo: "Dark Souls III",
      poder:
        "Foice Gélida, Invisibilidade, Ressurreição (3 fases), Magia Negra",
      status: "Chefe - Filha das Cinzas",
      estreia: 2016,
      titulo: "A Filha das Cinzas",
      caracteristica: "Batalha de 3 Fases",
      nivel: "SS",
    },
    stats: {
      forca: 88,
      velocidade: 92,
      defesa: 85,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 288,
    name: "CARLOS RIVERA",
    category: "Ashita no Joe",
    image: "img/Ashita-no-Joe/Carlos-Rivera-2.png",
    description:
      "Boxeador profissional internacional que faz parte do universo competitivo de Ashita no Joe.",
    details: {
      universo: "Ashita no Joe",
      poder: "Habilidades de Boxe, Experiência Internacional",
      status: "Boxeador Profissional - Internacional",
      estreia: 1968,
      titulo: "Boxeador Internacional",
      caracteristica: "Experiência Global",
      nivel: "B+",
    },
    stats: {
      forca: 82,
      velocidade: 80,
      defesa: 78,
      energia: 85,
      habilidade: 84,
    },
  },

  {
    id: 289,
    name: "GOD SERENA",
    category: "Fairy Tail",
    image: "img/Fairy-Taill/God-Serena-1.png",
    description:
      "Ex-mago dos Dez Santos Sagrados e membro dos Spriggan 12. Conhecido como o 'Mago mais forte de Ishgar'.",
    details: {
      universo: "Fairy Tail",
      poder: "Oito Lacrimas de Dragão Slayer, Magia Multi-Elemental",
      status: "Mago dos Spriggan 12 - Ex-Mago dos Dez Santos",
      estreia: 2015,
      titulo: "Mago Mais Forte de Ishgar",
      caracteristica: "8 Elementos de Dragão",
      nivel: "SS+",
    },
    stats: {
      forca: 92,
      velocidade: 88,
      defesa: 90,
      energia: 96,
      habilidade: 94,
    },
  },

  {
    id: 290,
    name: "STRIGA",
    category: "Castlevania",
    image: "img/castlevania/striga-1.png",
    description:
      "Vampira poderosa da série Castlevania da Netflix, irmã de Morana e membro do conselho de vampiros.",
    details: {
      universo: "Castlevania",
      poder:
        "Força Vampírica, Habilidades de Combate, Transformação, Regeneração",
      status: "Vampira - Membro do Conselho",
      estreia: 2020,
      titulo: "Vampira do Conselho",
      caracteristica: "Irmã de Morana",
      nivel: "A+",
    },
    stats: {
      forca: 90,
      velocidade: 82,
      defesa: 88,
      energia: 85,
      habilidade: 80,
    },
  },

  {
    id: 291,
    name: "LUCIFERO",
    category: "Black Clover",
    image: "img/Black Clover/Lucifero-1.png",
    description:
      "Rei Demônio do mundo dos demônios e um dos seres mais poderosos do universo de Black Clover.",
    details: {
      universo: "Black Clover",
      poder:
        "Magia da Gravidade Absoluta, Distorção Espacial, Poder Demoníaco Supremo",
      status: "Rei Demônio - Antagonista Principal",
      estreia: 2020,
      titulo: "Rei Demônio",
      caracteristica: "Gravidade Absoluta",
      nivel: "SSS",
    },
    stats: {
      forca: 98,
      velocidade: 90,
      defesa: 97,
      energia: 99,
      habilidade: 95,
    },
  },

  {
    id: 292,
    name: "SMOLDER",
    category: "League of Legend",
    image: "img/lol/Smolder-1.png",
    description:
      "Filhote de dragão ambicioso e filho de uma poderosa mãe dragão em Camavor.",
    details: {
      universo: "League of Legends",
      poder: "Fogo de Dragão, Habilidades Dragônicas, Crescimento",
      status: "Filhote de Dragão - Herdeiro Dragônico",
      estreia: 2024,
      titulo: "O Filhote de Dragão",
      caracteristica: "Dragão Jovem e Ambicioso",
      nivel: "B+",
    },
    stats: {
      forca: 75,
      velocidade: 80,
      defesa: 72,
      energia: 85,
      habilidade: 78,
    },
  },

  {
    id: 293,
    name: "YORU",
    category: "Chainsaw Man",
    image: "img/Chainsaw-Man/Yoru-1.png",
    description:
      "Demônio da Guerra que toma posse do corpo de Asa Mitaka. Busca recuperar seu poder completo roubado pelo Chainsaw Man.",
    details: {
      universo: "Chainsaw Man",
      poder: "Criação de Armas Corporais, Manipulação de Memórias de Guerra",
      status: "Demônio da Guerra - Possuidora de Asa Mitaka",
      estreia: 2020,
      titulo: "Demônio da Guerra",
      caracteristica: "Posse Corporal",
      nivel: "S",
    },
    stats: {
      forca: 85,
      velocidade: 82,
      defesa: 80,
      energia: 90,
      habilidade: 88,
    },
  },

  {
    id: 294,
    name: "KUSANAGI",
    category: "The King of Fighters",
    image: "img/The-King-of-Fighters/Kusanagi-1.png",
    description:
      "Versão alternativa/corrompida de Kyo Kusanagi com poderes do Orochi e chamas vermelhas.",
    details: {
      universo: "The King of Fighters",
      poder: "Chamas do Orochi, Estilo Kusanagi Modificado, Poderes Orochi",
      status: "Personagem Alternativo - Versão Orochi",
      estreia: 2002,
      titulo: "Kyo Orochi",
      caracteristica: "Versão Corrompida",
      nivel: "SS",
    },
    stats: {
      forca: 92,
      velocidade: 90,
      defesa: 88,
      energia: 94,
      habilidade: 92,
    },
  },

  {
    id: 295,
    name: "HUGH",
    category: "Pokemon",
    image: "img/Pokemon/Hugh-1.png",
    description:
      "Rival principal em Pokémon Black 2 e White 2, amigo de infância do protagonista.",
    details: {
      universo: "Pokémon",
      poder: "Estratégia de Batalha, Determinação, Vínculo com Pokémon",
      status: "Treinador Pokémon - Rival",
      estreia: 2012,
      titulo: "Rival Determinado",
      caracteristica: "Busca por Justiça",
      nivel: "A",
    },
    stats: {
      forca: 75,
      velocidade: 78,
      defesa: 72,
      energia: 80,
      habilidade: 85,
    },
  },

  {
    id: 296,
    name: "EMPORIO ALNINO",
    category: "jojo",
    image: "img/Jojo/Emporio-Alnino-1.png",
    description:
      "Criança que vive na Prisão Green Dolphin Street e sobrevivente de Stone Ocean. Usuário do Stand Burning Down the House.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand Burning Down the House, Sobrevivência, Inteligência",
      status: "Sobrevivente - Usuário de Stand",
      estreia: 2000,
      titulo: "Portador do Burning Down the House",
      caracteristica: "Sobrevivente Final",
      nivel: "B+",
    },
    stats: {
      forca: 65,
      velocidade: 72,
      defesa: 68,
      energia: 75,
      habilidade: 82,
    },
  },

  {
    id: 297,
    name: "BUNDUS",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Bundus-1.png",
    description:
      "Personagem do mundo distópico de Gachiakuta, envolvido no complexo sistema de sobrevivência.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades de Sobrevivência",
      status: "Ativo",
      estreia: 2022,
      afiliacao: "Mundo de Gachiakuta",
      caracteristica: "Sobrevivente Adaptado",
      nivel: "B",
    },
    stats: {
      forca: 74,
      velocidade: 72,
      defesa: 70,
      energia: 76,
      habilidade: 78,
    },
  },

  {
    id: 298,
    name: "SCOPPER GABAN",
    category: "One-Piece",
    image: "img/One-Piece/Scopper-Gaban-1.png",
    description:
      "Terceiro imediato dos Piratas do Roger, conhecido como 'Gaban, o Demolidor'.",
    details: {
      universo: "One Piece",
      poder: "Haki Avançado, Combate com Machados, Força Física",
      status: "Ex-Pirata - Membro dos Piratas do Roger",
      estreia: 2000,
      recompensa: "Desconhecida",
      caracteristica: "Demolidor",
      nivel: "SS",
    },
    stats: {
      forca: 95,
      velocidade: 86,
      defesa: 92,
      energia: 94,
      habilidade: 90,
    },
  },

  {
    id: 299,
    name: "TITAN COLOSSAL",
    category: "Shingeki-no-Kyojin",
    image: "img/Shingeki-no-Kyojin/Titan-Colossal-1.png",
    description:
      "Um dos Nove Titãs, conhecido por seu tamanho massivo (60 metros) e liberação de vapor superaquecido.",
    details: {
      universo: "Shingeki no Kyojin",
      poder:
        "Tamanho Colossal (60m), Liberação de Vapor, Força Destrutiva Massiva",
      status: "Titã Shifter - Um dos Nove Titãs",
      estreia: 2009,
      titulo: "Titã Colossal",
      caracteristica: "Primeiro Titã Visto",
      nivel: "S+",
    },
    stats: {
      forca: 99,
      velocidade: 60,
      defesa: 95,
      energia: 98,
      habilidade: 75,
    },
  },

  {
    id: 300,
    name: "SUPERALLOY DARKSHINE",
    category: "One Punch Man",
    image: "img/One-Punch-Man/Superalloy-Darkshine-1.png",
    description:
      "Herói profissional Classe S Rank 11, conhecido por seu corpo musculoso brilhante e resistência extrema.",
    details: {
      universo: "One Punch Man",
      poder:
        "Corpo Indestrutível, Força Sobre-Humana, Defesa Absoluta, Brilho Metálico",
      status: "Herói Classe S Rank 11",
      estreia: 2012,
      titulo: "Superalloy Darkshine",
      caracteristica: "Defesa Absoluta",
      nivel: "S+",
    },
    stats: {
      forca: 94,
      velocidade: 80,
      defesa: 98,
      energia: 92,
      habilidade: 82,
    },
  },

  {
    id: 301,
    name: "GUARDIAN APE",
    category: "souls",
    image: "img/souls/guardian-ape-sekiro-1.png",
    description:
      "Chefe icônico de Sekiro: Shadows Die Twice, um macaco colossal e imortal que guarda a Flor Persimmon no Vale da Fonte.",
    details: {
      universo: "Sekiro: Shadows Die Twice",
      poder: "Imortalidade, Força Bruta, Espada Decapitada, Grito Sônico",
      status: "Chefe - Guardião do Vale da Fonte",
      estreia: 2019,
      titulo: "Macaco Imortal",
      caracteristica: "Combate em Duas Fases",
      nivel: "S+",
    },
    stats: {
      forca: 96,
      velocidade: 75,
      defesa: 94,
      energia: 95,
      habilidade: 82,
    },
  },

  {
    id: 302,
    name: "DANTE ZOGRATIS",
    category: "Black Clover",
    image: "img/Black Clover/Dante-Zogratis-1.png",
    description:
      "Membro mais velho da Tríade Negra, possui 100% de afinidade com um demônio que lhe concede manipulação de gravidade.",
    details: {
      universo: "Black Clover",
      poder: "Manipulação de Gravidade (100% Demônio), Corpo Regenerativo",
      status: "Antagonista - Líder da Tríade Negra",
      estreia: 2019,
      afiliacao: "Tríade Negra",
      caracteristica: "Poder Demoniaco Máximo",
      nivel: "SS+",
    },
    stats: {
      forca: 97,
      velocidade: 88,
      defesa: 92,
      energia: 98,
      habilidade: 90,
    },
  },

  {
    id: 303,
    name: "GEKI",
    category: "Street-Fighter",
    image: "img/Street-Fighter/Geki-1.png",
    description:
      "Ninja mestre de Street Fighter que usa shurikens e técnicas de furtividade, originalmente concebido para o primeiro jogo.",
    details: {
      universo: "Street Fighter",
      poder: "Técnicas Ninja, Shurikens, Furtividade, Artes Marciais",
      status: "Ninja - Personagem Beta/Cameo",
      estreia: 1987,
      titulo: "Ninja Mestre",
      caracteristica: "Estilo Ninja Clássico",
      nivel: "B",
    },
    stats: {
      forca: 78,
      velocidade: 85,
      defesa: 75,
      energia: 80,
      habilidade: 88,
    },
  },

  {
    id: 304,
    name: "HEKAPOO",
    category: "Star-vs.",
    image: "img/star-vs/Hekapoo-1.png",
    description:
      "Membro da Comissão Mágica, especialista em portais e dimensional travel, criadora das tesouras dimensionais.",
    details: {
      universo: "Star vs. the Forces of Evil",
      poder: "Criação de Portais, Tesouras Dimensionais, Magia Dimensional",
      status: "Membro da Comissão Mágica",
      estreia: 2015,
      afiliacao: "Comissão Mágica",
      caracteristica: "Mestra dos Portais",
      nivel: "A+",
    },
    stats: {
      forca: 80,
      velocidade: 88,
      defesa: 78,
      energia: 85,
      habilidade: 92,
    },
  },

  {
    id: 305,
    name: "MACHI KOMACINE",
    category: "HXH",
    image: "img/hxh/Machi-Komacine.png",
    description:
      "Membro número 3 da Tropa Fantasma, especialista em Nen de Transmutação que cria fios extremamente resistentes.",
    details: {
      universo: "Hunter x Hunter",
      poder:
        "Nen - Transmutação (Fios), Costura com Nen, Habilidades de Suporte",
      status: "Membro da Tropa Fantasma - Número 3",
      estreia: 1999,
      afiliacao: "Phantom Troupe",
      caracteristica: "Especialista em Fios",
      nivel: "A+",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 80,
      energia: 84,
      habilidade: 94,
    },
  },

  {
    id: 306,
    name: "SENJU KAWARAGI",
    category: "tokyo",
    image: "img/tokyo-revengers/Senju-Kawaragi-1.png",
    description:
      "Líder da gangue Brahman e única líder feminina entre as grandes gangues de Tokyo Revengers.",
    details: {
      universo: "Tokyo Revengers",
      poder: "Habilidades de Combate Excepcionais, Liderança, Força Física",
      status: "Líder - Brahman Gang",
      estreia: 2020,
      afiliacao: "Brahman Gang",
      caracteristica: "Líder Feminina Única",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 90,
      defesa: 84,
      energia: 86,
      habilidade: 92,
    },
  },

  {
    id: 307,
    name: "SHIZUKU MURASAKI",
    category: "HXH",
    image: "img/hxh/Shizuku-Murasaki-1.png",
    description:
      "Membro número 12 da Tropa Fantasma, especialista em Nen de Conjuração com o aspirador demoníaco 'Blinky'.",
    details: {
      universo: "Hunter x Hunter",
      poder: "Nen - Conjuração (Blinky), Aspiração de Objetos, Limpeza",
      status: "Membro da Tropa Fantasma - Número 12",
      estreia: 1999,
      afiliacao: "Phantom Troupe",
      caracteristica: "Memória Ruim, Poderosa",
      nivel: "A",
    },
    stats: {
      forca: 78,
      velocidade: 80,
      defesa: 76,
      energia: 82,
      habilidade: 88,
    },
  },

  {
    id: 308,
    name: "IORI YAGAMI",
    category: "The King of Fighters",
    image: "img/The-King-of-Fighters/Iori-Yagami-1.png",
    description:
      "Membro do clã Yagami e rival de Kyo Kusanagi, portador das Chamas Roxas e sangue do Orochi.",
    details: {
      universo: "The King of Fighters",
      poder: "Chamas Roxas, Sangue do Orochi, Modo Riot of the Blood",
      status: "Lutador - Membro do Clã Yagami",
      estreia: 1995,
      titulo: "Portador das Chamas Roxas",
      caracteristica: "Rival de Kyo Kusanagi",
      nivel: "SS",
    },
    stats: {
      forca: 92,
      velocidade: 94,
      defesa: 86,
      energia: 95,
      habilidade: 96,
    },
  },

  {
    id: 309,
    name: "SYPHA BELNADES",
    category: "Castlevania",
    image: "img/castlevania/Sypha-Belnades-1.png",
    description:
      "Maga da família Belnades, especialista em magia elemental e caçadora de vampiros, companheira de Trevor Belmont.",
    details: {
      universo: "Castlevania",
      poder: "Magia Elemental (Fogo, Gelo, Eletricidade), Feitiços Ofensivos",
      status: "Maga - Caçadora de Vampiros",
      estreia: 1989,
      afiliacao: "Família Belnades",
      caracteristica: "Magia Elemental Pura",
      nivel: "A+",
    },
    stats: {
      forca: 75,
      velocidade: 82,
      defesa: 78,
      energia: 90,
      habilidade: 94,
    },
  },

  {
    id: 310,
    name: "RIN TOHSAKA",
    category: "Fate",
    image: "img/Fate/Rin-Tohsaka-1.png",
    description:
      "Mestra de magia e herdeira da família Tohsaka, especialista em magia de pedras preciosas, participante da Guerra do Santo Graal.",
    details: {
      universo: "Fate",
      poder: "Jewel Magecraft, Magia de Pedras Preciosas, Gandr",
      status: "Mestra de Magia - Participante da Guerra",
      estreia: 2004,
      afiliacao: "Família Tohsaka",
      caracteristica: "Magia de Gemas",
      nivel: "A+",
    },
    stats: {
      forca: 78,
      velocidade: 84,
      defesa: 76,
      energia: 92,
      habilidade: 96,
    },
  },

  {
    id: 311,
    name: "BRUNO BUCCIARATI",
    category: "jojo",
    image: "img/Jojo/Bruno-Bucciarati-1.png",
    description:
      "Líder de um time da Passione, usuário do Stand Sticky Fingers que cria zíperes em qualquer superfície.",
    details: {
      universo: "JoJo's Bizarre Adventure",
      poder: "Stand Sticky Fingers, Criação de Zíperes, Combate Corporal",
      status: "Capo - Líder da Passione",
      estreia: 1995,
      afiliacao: "Passione",
      caracteristica: "Liderança Inspiradora",
      nivel: "S",
    },
    stats: {
      forca: 88,
      velocidade: 90,
      defesa: 85,
      energia: 92,
      habilidade: 94,
    },
  },

  {
    id: 312,
    name: "ANGEL DEVIL",
    category: "Chainsaw Man",
    image: "img/Chainsaw-Man/Angel-Devil-1.png",
    description:
      "Demônio que trabalha como caçador de demônios, pode drenar a vida útil das pessoas e criar armas angelicais.",
    details: {
      universo: "Chainsaw Man",
      poder: "Drenagem de Vida, Criação de Armas Angelicais, Asas",
      status: "Demônio - Caçador de Demônios",
      estreia: 2019,
      afiliacao: "Divisão Especial 4",
      caracteristica: "Aparência Andrógina",
      nivel: "A+",
    },
    stats: {
      forca: 80,
      velocidade: 85,
      defesa: 78,
      energia: 88,
      habilidade: 90,
    },
  },

  {
    id: 313,
    name: "DRACULE MIHAWK",
    category: "One-Piece",
    image: "img/One-Piece/Mihawk-1.png",
    description:
      "'Hawk Eyes', o maior espadachim do mundo e ex-Shichibukai, portador da espada negra Yoru.",
    details: {
      universo: "One Piece",
      poder: "Espadachim Supremo, Espada Yoru, Haki Avançado",
      status: "Ex-Shichibukai - Maior Espadachim",
      estreia: 1998,
      recompensa: "฿3,590,000,000",
      caracteristica: "Olhos de Falcão",
      nivel: "SS+",
    },
    stats: {
      forca: 96,
      velocidade: 94,
      defesa: 92,
      energia: 95,
      habilidade: 99,
    },
  },

  {
    id: 314,
    name: "ALAIN",
    category: "Pokemon",
    image: "img/Pokemon/Alain-1.png",
    description:
      "Pesquisador de Mega Evolução e rival de Ash Ketchum, treinador de um poderoso Charizard com Mega Evolução.",
    details: {
      universo: "Pokémon",
      poder: "Especialista em Mega Evolução, Estratégia de Batalha",
      status: "Treinador Pokémon - Pesquisador",
      estreia: 2015,
      afiliacao: "Liga de Kalos",
      caracteristica: "Vínculo com Charizard",
      nivel: "S",
    },
    stats: {
      forca: 85,
      velocidade: 88,
      defesa: 82,
      energia: 92,
      habilidade: 94,
    },
  },

  {
    id: 315,
    name: "ANAN KUROSE",
    category: "Boku no Hero",
    image: "img/Boku-no-Hero/Anan-Kurose-1.png",
    description:
      "Heroína profissional 'Ms. Joke', professora da Ketsubutsu Academy, possui a Quirk 'Outburst' de riso incontrolável.",
    details: {
      universo: "My Hero Academia",
      poder: "Quirk: Outburst (Riso Incontrolável), Experiência de Ensino",
      status: "Heroína Profissional - Professora",
      estreia: 2016,
      afiliacao: "Ketsubutsu Academy",
      caracteristica: "Rival de Aizawa",
      nivel: "A",
    },
    stats: {
      forca: 80,
      velocidade: 82,
      defesa: 78,
      energia: 85,
      habilidade: 88,
    },
  },

  {
    id: 316,
    name: "KING BRADLEY",
    category: "Fullmetal",
    image: "img/Fullmetal-Alchemist/King-Bradley-1.png",
    description:
      "'Wrath', Homúnculo e Führer presidente de Amestris, portador do Olho Último e espadachim mais forte.",
    details: {
      universo: "Fullmetal Alchemist",
      poder: "Olho Último, Espadachim Supremo, Reflexos Sobre-humanos",
      status: "Homúnculo - Führer de Amestris",
      estreia: 2003,
      titulo: "Führer Presidente",
      caracteristica: "Wrath - Ira",
      nivel: "SS",
    },
    stats: {
      forca: 94,
      velocidade: 98,
      defesa: 90,
      energia: 92,
      habilidade: 96,
    },
  },

  {
    id: 317,
    name: "RIYO",
    category: "Gachiakuta",
    image: "img/Gachiakuta/Riyo-1.png",
    description:
      "Personagem do mundo distópico de Gachiakuta, com habilidades adaptadas às condições extremas do ambiente hostil.",
    details: {
      universo: "Gachiakuta",
      poder: "Habilidades Específicas do Mundo",
      status: "Ativo",
      estreia: 2022,
      afiliacao: "Mundo de Gachiakuta",
      caracteristica: "Sobrevivente Adaptado",
      nivel: "B",
    },
    stats: {
      forca: 74,
      velocidade: 76,
      defesa: 72,
      energia: 78,
      habilidade: 80,
    },
  },

  {
    id: 318,
    name: "KATARA",
    category: "Avatar",
    image: "img/Avatar/Katara-1.png",
    description:
      "Última dobradora de água da Tribo da Água do Sul, aprende a dominar dobra de água, cura e dobra de sangue.",
    details: {
      universo: "Avatar: The Last Airbender",
      poder: "Dobra de Água, Cura, Dobra de Sangue, Liderança",
      status: "Mestra de Dobra - Protetora",
      estreia: 2005,
      afiliacao: "Templo do Ar",
      caracteristica: "Última Dobradora da Tribo",
      nivel: "S",
    },
    stats: {
      forca: 82,
      velocidade: 85,
      defesa: 80,
      energia: 94,
      habilidade: 96,
    },
  },

  {
    id: 319,
    name: "BLUE MARY",
    category: "The King of Fighters",
    image: "img/The-King-of-Fighters/Blue-Mary-1.png",
    description:
      "Agente especial e lutadora de KOF, especialista em artes marciais mistas, grappling e jiu-jitsu.",
    details: {
      universo: "The King of Fighters",
      poder: "Artes Marciais Mistas, Grappling, Jiu-Jitsu, Wrestling",
      status: "Agente Especial - Lutadora do KOF",
      estreia: 1995,
      titulo: "Agente Especial",
      caracteristica: "Estilo Grappling",
      nivel: "A",
    },
    stats: {
      forca: 84,
      velocidade: 86,
      defesa: 82,
      energia: 85,
      habilidade: 90,
    },
  },

  {
    id: 320,
    name: "TOM LUCITOR",
    category: "Star-vs.",
    image: "img/star-vs/Tom-Lucitor-1.png",
    description:
      "Príncipe do Submundo e ex-namorado de Star Butterfly, conhecido por seu temperamento quente e coração nobre.",
    details: {
      universo: "Star vs. the Forces of Evil",
      poder: "Chamas Demoníacas, Força Sobre-Humana, Voo, Magia do Submundo",
      status: "Príncipe do Submundo",
      estreia: 2015,
      afiliacao: "Submundo",
      caracteristica: "Temperamento Explosivo",
      nivel: "A",
    },
    stats: {
      forca: 86,
      velocidade: 84,
      defesa: 82,
      energia: 88,
      habilidade: 85,
    },
  },
];
