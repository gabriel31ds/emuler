import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Configurar CORS para permitir requisições do frontend
app.use(cors());

// Servir arquivos estáticos
app.use(express.static('.'));

// Função para verificar se um arquivo é uma ROM válida
function isValidROM(filename) {
    const validExtensions = [
        // Nintendo
        'nes', 'fds', 'unif', 'unf', // NES
        'smc', 'fig', 'sfc', 'gd3', 'gd7', 'dx2', 'bsx', 'swc', // SNES
        'z64', 'n64', // N64
        'gb', 'gbc', // Game Boy
        'gba', // Game Boy Advance
        'nds', // Nintendo DS
        
        // Sega
        'md', 'gen', 'smd', // Mega Drive/Genesis
        'sms', // Master System
        'gg', // Game Gear
        '32x', // 32X
        'cd', 'iso', 'bin', // Sega CD
        
        // Atari
        'a26', // Atari 2600
        'a78', // Atari 7800
        'lynx', // Atari Lynx
        'jag', // Atari Jaguar
        
        // Outros
        'pce', // PC Engine/TurboGrafx-16
        'ngp', 'ngc', // Neo Geo Pocket
        'ws', 'wsc', // WonderSwan
        'col', 'cv', // ColecoVision
        'd64', // Commodore 64
        'vb', // Virtual Boy
        'psx', 'iso', 'bin', 'img', // PlayStation
        'arcade', 'zip' // Arcade
    ];
    
    const ext = filename.split('.').pop().toLowerCase();
    return validExtensions.includes(ext);
}

// Função para listar arquivos e pastas de um diretório
function listDirectory(dirPath) {
    try {
        const items = [];
        const files = fs.readdirSync(dirPath);
        
        // Separar pastas e arquivos
        const folders = [];
        const roms = [];
        
        files.forEach(file => {
            const fullPath = path.join(dirPath, file);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                folders.push({
                    name: file,
                    type: 'folder',
                    path: fullPath.replace(process.cwd(), '').replace(/\\/g, '/') || '/'
                });
            } else if (isValidROM(file)) {
                roms.push({
                    name: file,
                    type: 'rom',
                    path: fullPath.replace(process.cwd(), '').replace(/\\/g, '/') || '/',
                    size: stat.size
                });
            }
        });
        
        // Ordenar: pastas primeiro, depois ROMs
        return [...folders.sort(), ...roms.sort()];
    } catch (error) {
        console.error('Erro ao listar diretório:', error);
        return [];
    }
}

// API para listar ROMs de uma pasta
app.get('/api/roms', (req, res) => {
    const requestedPath = req.query.path || '/';
    let targetPath;
    
    if (requestedPath === '/') {
        targetPath = path.join(process.cwd(), 'roms');
    } else {
        targetPath = path.join(process.cwd(), 'roms', requestedPath);
    }
    
    // Verificar se o caminho é válido e está dentro da pasta roms
    const romsDir = path.resolve(process.cwd(), 'roms');
    const resolvedPath = path.resolve(targetPath);
    
    if (!resolvedPath.startsWith(romsDir)) {
        return res.status(403).json({ error: 'Acesso negado' });
    }
    
    // Verificar se o diretório existe
    if (!fs.existsSync(targetPath)) {
        return res.status(404).json({ error: 'Diretório não encontrado' });
    }
    
    const items = listDirectory(targetPath);
    res.json({
        path: requestedPath,
        items: items
    });
});

// Rota para servir ROMs
app.get('/roms/*', (req, res) => {
    const romPath = req.params[0];
    const fullPath = path.join(process.cwd(), 'roms', romPath);
    
    // Verificar se o arquivo existe e está dentro da pasta roms
    const romsDir = path.resolve(process.cwd(), 'roms');
    const resolvedPath = path.resolve(fullPath);
    
    if (!resolvedPath.startsWith(romsDir)) {
        return res.status(403).send('Acesso negado');
    }
    
    if (!fs.existsSync(fullPath)) {
        return res.status(404).send('ROM não encontrada');
    }
    
    res.sendFile(fullPath);
});

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('Pasta de ROMs: ./roms/');
    console.log('API de ROMs: http://localhost:3000/api/roms?path=/');
});

// Criar pasta roms se não existir
const romsDir = path.join(process.cwd(), 'roms');
if (!fs.existsSync(romsDir)) {
    fs.mkdirSync(romsDir, { recursive: true });
    console.log('Pasta roms criada. Adicione suas ROMs nesta pasta.');
} 