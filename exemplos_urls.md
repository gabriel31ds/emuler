# Exemplos de URLs para Testar

## 🎮 URLs de Exemplo

### NES
```
http://localhost:3000/?rom=/Nintendo/NES/Super Mario Bros.nes
http://localhost:3000/?rom=/Nintendo/NES/Zelda.nes
```

### SNES
```
http://localhost:3000/?rom=/Nintendo/SNES/Super Mario World.smc
```

### Sega Mega Drive
```
http://localhost:3000/?rom=/Sega/MegaDrive/Sonic the Hedgehog.md
```

### Atari 2600
```
http://localhost:3000/?rom=/Atari/2600/Pac-Man.a26
```

## 🔧 URLs com Parâmetros Adicionais

### Com Debug
```
http://localhost:3000/?rom=/Nintendo/NES/Super Mario Bros.nes&debug=true
```

### Com Threads
```
http://localhost:3000/?rom=/Nintendo/SNES/Super Mario World.smc&threads=true
```

### Com Browser Mode
```
http://localhost:3000/?rom=/Sega/MegaDrive/Sonic the Hedgehog.md&browserMode=fullscreen
```

## 📱 Como Testar

1. **Inicie o servidor**:
   ```bash
   npm run server
   ```

2. **Abra o navegador** e teste as URLs acima

3. **Ou navegue pela interface**:
   ```
   http://localhost:3000
   ```

## 🎯 URLs para Copiar e Colar

### Teste Rápido - NES
```
http://localhost:3000/?rom=/Nintendo/NES/Super Mario Bros.nes
```

### Teste Rápido - SNES
```
http://localhost:3000/?rom=/Nintendo/SNES/Super Mario World.smc
```

### Teste Rápido - Sega
```
http://localhost:3000/?rom=/Sega/MegaDrive/Sonic the Hedgehog.md
```

### Teste Rápido - Atari
```
http://localhost:3000/?rom=/Atari/2600/Pac-Man.a26
```

## 🔗 URLs com Encoding

Para caracteres especiais, use encoding:

### Com Espaços
```
http://localhost:3000/?rom=/Nintendo/NES/Super%20Mario%20Bros.nes
```

### Com Parênteses
```
http://localhost:3000/?rom=/Nintendo/NES/Super%20Mario%20Bros%20(E).nes
```

## 📋 Lista Completa de ROMs Disponíveis

### NES
- Super Mario Bros.nes
- Zelda.nes
- Super Mario Bros (E).nes

### SNES
- Super Mario World.smc

### Sega Mega Drive
- Sonic the Hedgehog.md

### Atari 2600
- Pac-Man.a26

## 🚀 Teste Automático

Você pode testar automaticamente abrindo estas URLs no navegador:

1. **Interface de Navegação**:
   ```
   http://localhost:3000
   ```

2. **ROM Direta - NES**:
   ```
   http://localhost:3000/?rom=/Nintendo/NES/Super Mario Bros.nes
   ```

3. **ROM Direta - SNES**:
   ```
   http://localhost:3000/?rom=/Nintendo/SNES/Super Mario World.smc
   ```

4. **ROM Direta - Sega**:
   ```
   http://localhost:3000/?rom=/Sega/MegaDrive/Sonic the Hedgehog.md
   ```

5. **ROM Direta - Atari**:
   ```
   http://localhost:3000/?rom=/Atari/2600/Pac-Man.a26
   ``` 