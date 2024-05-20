graph TD;
    A[Inicio] --> B[Carregar arquivo de registro de combinacoes]
    B --> C{O arquivo de registro existe?}
    C -- Nao --> D[Iniciar um registro vazio]
    C -- Sim --> E[Carregar o arquivo de registro existente]
    D --> F[Listar todos os arquivos de video na pasta de entrada]
    E --> F
    F --> G[Listar todos os arquivos de audio na pasta de audios]
    G --> H[Listar todas as musicas de fundo na pasta de musicas de fundo]
    H --> I[Verificar quantidade de arquivos]
    I --> J{Ha pelo menos 1 video, 1 audio e 1 musica?}
    J -- Nao --> K[Lancar um erro e sair]
    J -- Sim --> L[Gerar uma combinacao unica (1 a 4 videos, 1 audio, 1 musica)]
    L --> M{A combinacao ja foi usada?}
    M -- Nao --> N[Salvar a combinacao unica]
    M -- Sim --> O[Repetir ate encontrar uma combinacao unica ou atingir o limite de 1000 tentativas]
    N --> P[Selecionar 1 a 4 videos aleatorios]
    O --> L
    P --> Q[Garantir duracao minima de 1 minuto]
    Q --> R{Duracao minima garantida?}
    R -- Nao --> S[Adicionar videos se necessario]
    R -- Sim --> T[Concatenar videos selecionados]
    S --> Q
    T --> U[Adicionar marca d'agua]
    U --> V[Adicionar imagem da marca d'agua no centro]
    V --> W[Carregar e ajustar audio]
    W --> X[Carregar audio selecionado para transcricao]
    X --> Y[Carregar musica de fundo e ajustar volume]
    Y --> Z[Ajustar duracao da musica de fundo para corresponder a duracao do video]
    Z --> AA[Combinar trilhas de audio]
    AA --> AB[Transcrever audio selecionado]
    AB --> AC[Gerar legendas a partir da transcricao]
    AC --> AD[Adicionar legendas ao video final]
    AD --> AE[Salvar video final com todas as combinacoes]
    AE --> AF[Atualizar registro de combinacoes]
    AF --> AG[Fim]
