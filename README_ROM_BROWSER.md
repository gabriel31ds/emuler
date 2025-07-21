# EmulatorJS com Navegador de ROMs

Este é um fork modificado do EmulatorJS que adiciona um sistema de navegação de ROMs, permitindo listar e executar jogos diretamente de uma pasta.

## Funcionalidades

- **Navegação de Pastas**: Navegue pelas pastas de ROMs organizadas por sistema
- **Lista de ROMs**: Visualize todas as ROMs disponíveis em cada pasta
- **Execução Direta**: Clique em uma ROM para executá-la imediatamente
- **Interface Moderna**: Interface limpa e responsiva
- **Suporte a Múltiplos Sistemas**: Suporte para NES, SNES, N64, Game Boy, Sega, Atari e muito mais

## Instalação

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor**:
   ```bash
   npm run server
   # ou
   npm run dev
   ```

3. **Acessar o emulador**:
   Abra seu navegador e vá para `http://localhost:3000`

## Organização das ROMs

Crie a seguinte estrutura na pasta `roms/`:

```
roms/
├── Nintendo/
│   ├── NES/
│   │   ├── Super Mario Bros.nes
│   │   └── Zelda.nes
│   ├── SNES/
│   │   ├── Super Mario World.smc
│   │   └── Zelda A Link to the Past.smc
│   └── N64/
│       └── Super Mario 64.z64
├── Sega/
│   ├── Mega Drive/
│   │   ├── Sonic the Hedgehog.md
│   │   └── Streets of Rage.md
│   └── Master System/
│       └── Alex Kidd.sms
└── Atari/
    └── 2600/
        ├── Pac-Man.a26
        └── Space Invaders.a26
```

## Formatos Suportados

### Nintendo
- **NES**: `.nes`, `.fds`, `.unif`, `.unf`
- **SNES**: `.smc`, `.fig`, `.sfc`, `.gd3`, `.gd7`, `.dx2`, `.bsx`, `.swc`
- **N64**: `.z64`, `.n64`
- **Game Boy**: `.gb`, `.gbc`
- **Game Boy Advance**: `.gba`
- **Nintendo DS**: `.nds`

### Sega
- **Mega Drive/Genesis**: `.md`, `.gen`, `.smd`
- **Master System**: `.sms`
- **Game Gear**: `.gg`
- **32X**: `.32x`
- **Sega CD**: `.cd`, `.iso`, `.bin`

### Atari
- **Atari 2600**: `.a26`
- **Atari 7800**: `.a78`
- **Atari Lynx**: `.lynx`
- **Atari Jaguar**: `.jag`

### Outros Sistemas
- **PC Engine/TurboGrafx-16**: `.pce`
- **Neo Geo Pocket**: `.ngp`, `.ngc`
- **WonderSwan**: `.ws`, `.wsc`
- **ColecoVision**: `.col`, `.cv`
- **Commodore 64**: `.d64`
- **Virtual Boy**: `.vb`
- **PlayStation**: `.psx`, `.iso`, `.bin`, `.img`

## Como Usar

1. **Modo Upload** (padrão):
   - Arraste uma ROM para a área ou clique para selecionar
   - O emulador detectará automaticamente o sistema

2. **Modo Navegação**:
   - Clique no botão "Listar ROMs" no canto superior direito
   - Navegue pelas pastas clicando nelas
   - Clique em "▶ Jogar" para executar uma ROM
   - Use o breadcrumb para voltar às pastas anteriores

## API

O servidor fornece uma API REST para listar ROMs:

- **GET** `/api/roms?path=/` - Lista ROMs da pasta raiz
- **GET** `/api/roms?path=/nintendo` - Lista ROMs da pasta Nintendo
- **GET** `/roms/caminho/para/rom.nes` - Serve uma ROM específica

## Configuração

### Porta do Servidor
Para alterar a porta padrão (3000), edite o arquivo `server.js`:

```javascript
const PORT = 8080; // ou qualquer porta desejada
```

### Pasta de ROMs
A pasta padrão é `./roms/`. Para alterar, modifique em `server.js`:

```javascript
const romsDir = path.join(process.cwd(), 'sua-pasta-de-roms');
```

## Solução de Problemas

### ROMs não aparecem
- Verifique se os arquivos estão na pasta `roms/`
- Confirme se a extensão do arquivo é suportada
- Verifique as permissões da pasta

### Erro de CORS
- O servidor já está configurado com CORS habilitado
- Se ainda houver problemas, verifique se está acessando via `http://localhost:3000`

### ROM não carrega
- Verifique se o arquivo não está corrompido
- Confirme se o formato é suportado pelo EmulatorJS
- Verifique o console do navegador para erros

## Desenvolvimento

Para desenvolvimento, você pode usar:

```bash
npm run dev
```

Isso iniciará o servidor com recarregamento automático.

## Licença

Este projeto mantém a licença GPL-3.0 do EmulatorJS original. 