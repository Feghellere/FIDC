graph TD;
    A[Início] --> B[Carregar arquivo de registro de combinações]
    B --> C{O arquivo de registro existe?}
    C -- Não --> D[Iniciar um registro vazio]
    C -- Sim --> E[Carregar o arquivo de registro existente]
    D --> F[Listar todos os arquivos de vídeo na pasta de entrada]
    E --> F
    F --> G[Listar todos os arquivos de áudio na pasta de áudios]
    G --> H[Listar todas as músicas de fundo na pasta de músicas de fundo]
    H --> I[Verificar quantidade de arquivos]
    I --> J{Há pelo menos 1 vídeo, 1 áudio e 1 música?}
    J -- Não --> K[Lançar um erro e sair]
    J -- Sim --> L[Gerar uma combinação única (1 a 4 vídeos, 1 áudio, 1 música)]
    L --> M{A combinação já foi usada?}
    M -- Não --> N[Salvar a combinação única]
    M -- Sim --> O[Repetir até encontrar uma combinação única ou atingir o limite de 1000 tentativas]
    N --> P[Selecionar 1 a 4 vídeos aleatórios]
    O --> L
    P --> Q[Garantir duração mínima de 1 minuto]
    Q --> R{Duração mínima garantida?}
    R -- Não --> S[Adicionar vídeos se necessário]
    R -- Sim --> T[Concatenar vídeos selecionados]
    S --> Q
    T --> U[Adicionar marca d'água]
    U --> V[Adicionar imagem da marca d'água no centro]
    V --> W[Carregar e ajustar áudio]
    W --> X[Carregar áudio selecionado para transcrição]
    X --> Y[Carregar música de fundo e ajustar volume]
    Y --> Z[Ajustar duração da música de fundo para corresponder à duração do vídeo]
    Z --> AA[Combinar trilhas de áudio]
    AA --> AB[Transcrever áudio selecionado]
    AB --> AC[Gerar legendas a partir da transcrição]
    AC --> AD[Adicionar legendas ao vídeo final]
    AD --> AE[Salvar vídeo final com todas as combinações]
    AE --> AF[Atualizar registro de combinações]
    AF --> AG[Fim]
