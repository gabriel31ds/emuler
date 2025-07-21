# EmulatorJS com Query Parameters

Este é um sistema modificado do EmulatorJS que permite carregar ROMs diretamente via query parameters na URL, eliminando a necessidade de upload de arquivos.

## 🎮 Como Usar

### 1. **Navegação por Interface**
- Acesse `http://localhost:3000`
- Navegue pelas pastas de ROMs
- Clique em "▶ Jogar" para executar uma ROM

### 2. **Carregamento Direto via URL**
Use query parameters para carregar ROMs diretamente:

```
http://localhost:3000/?rom=/Nintendo/NES/Super Mario Bros.nes
http://localhost:3000/?rom=/Sega/MegaDrive/Sonic the Hedgehog.md
http://localhost:3000/?rom=/Atari/2600/Pac-Man.a26
```

### 3. **Parâmetros Adicionais**
Você pode combinar com outros parâmetros do EmulatorJS:

```
http://localhost:3000/?rom=/Nintendo/NES/Zelda.nes&debug=true
http://localhost:3000/?rom=/Nintendo/SNES/Super Mario World.smc&threads=true
```

## 📁 Estrutura de Pastas

Organize suas ROMs na pasta `roms/`:

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

## 🔗 Exemplos de URLs

### NES
```
http://localhost:3000/?rom=/Nintendo/NES/Super Mario Bros.nes
http://localhost:3000/?rom=/Nintendo/NES/Zelda.nes
```

### SNES
```
http://localhost:3000/?rom=/Nintendo/SNES/Super Mario World.smc
http://localhost:3000/?rom=/Nintendo/SNES/Zelda A Link to the Past.smc
```

### Sega Mega Drive
```
http://localhost:3000/?rom=/Sega/Mega Drive/Sonic the Hedgehog.md
http://localhost:3000/?rom=/Sega/Mega Drive/Streets of Rage.md
```

### Atari 2600
```
http://localhost:3000/?rom=/Atari/2600/Pac-Man.a26
http://localhost:3000/?rom=/Atari/2600/Space Invaders.a26
```

## 🚀 Iniciar o Servidor

```bash
npm run server
```

Acesse: `http://localhost:3000`

## 📋 Formatos Suportados

- **NES**: `.nes`, `.fds`, `.unif`, `.unf`
- **SNES**: `.smc`, `.fig`, `.sfc`, `.gd3`, `.gd7`, `.dx2`, `.bsx`, `.swc`
- **N64**: `.z64`, `.n64`
- **Game Boy**: `.gb`, `.gbc`
- **Game Boy Advance**: `.gba`
- **Nintendo DS**: `.nds`
- **Sega Mega Drive**: `.md`, `.gen`, `.smd`
- **Sega Master System**: `.sms`
- **Atari 2600**: `.a26`
- **E muito mais!**

## 🎯 Vantagens do Sistema

1. **URLs Compartilháveis**: Você pode compartilhar links diretos para jogos específicos
2. **Sem Upload**: Não precisa fazer upload de arquivos
3. **Navegação Rápida**: Acesse jogos diretamente via URL
4. **Interface Limpa**: Foco na navegação de ROMs
5. **Compatibilidade**: Mantém todos os parâmetros do EmulatorJS original

## 🔧 Configuração

### Alterar Porta
Edite `server.js`:
```javascript
const PORT = 8080; // ou qualquer porta desejada
```

### Alterar Pasta de ROMs
Edite `server.js`:
```javascript
const romsDir = path.join(process.cwd(), 'sua-pasta-de-roms');
```

## 📱 Uso em Dispositivos Móveis

O sistema é totalmente responsivo e funciona em:
- Smartphones
- Tablets
- Computadores
- Smart TVs

## 🔗 Integração com Outros Sistemas

Você pode integrar este sistema com:
- Frontends personalizados
- Aplicativos móveis
- Sistemas de streaming
- Dashboards de jogos

## 🎮 Exemplo Completo

1. **Iniciar servidor**:
   ```bash
   npm run server
   ```

2. **Adicionar ROMs**:
   ```bash
   cp "sua-rom.nes" "roms/Nintendo/NES/"
   ```

3. **Acessar via URL**:
   ```
   http://localhost:3000/?rom=/Nintendo/NES/sua-rom.nes
   ```

4. **Ou navegar pela interface**:
   ```
   http://localhost:3000
   ```

## 🐛 Solução de Problemas

### ROM não carrega
- Verifique se o caminho está correto na URL
- Confirme se o arquivo existe na pasta `roms/`
- Verifique se a extensão é suportada

### Erro 404
- Verifique se o servidor está rodando
- Confirme se a pasta `roms/` existe
- Verifique as permissões dos arquivos

### Caracteres especiais na URL
Use encoding para caracteres especiais:
```
http://localhost:3000/?rom=/Nintendo/NES/Super%20Mario%20Bros.nes
``` 