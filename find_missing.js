
const fs = require('fs');
const path = require('path');

const filePath = 'src/data/characters-data.js';
const content = fs.readFileSync(filePath, 'utf8');

// Extract existing images
const existingImages = new Set();
const imageRegex = /image:\s*"([^"]+)"/g;
let match;
while ((match = imageRegex.exec(content)) !== null) {
    existingImages.add(match[1]);
}

// Find last ID
const idRegex = /id:\s*(\d+)/g;
let lastId = 0;
while ((match = idRegex.exec(content)) !== null) {
    lastId = Math.max(lastId, parseInt(match[1]));
}

const imagesDir = 'assets/images';
const missingCharacters = [];

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
            const relativePath = fullPath.replace(/\\/g, '/');
            if (!existingImages.has(relativePath)) {
                const category = path.basename(dir);
                const name = file.replace(/-\d+.*$/, '').replace(/\.(png|jpg|jpeg)$/i, '').replace(/-/g, ' ').toUpperCase();
                missingCharacters.push({
                    id: ++lastId,
                    name: name,
                    category: category,
                    image: relativePath,
                    description: `${name} description.`,
                    details: {
                        universo: category,
                        poder: "TBD",
                        status: "Ativo",
                        estreia: 0,
                        nivel: "A"
                    },
                    stats: {
                        forca: 80,
                        velocidade: 80,
                        defesa: 80,
                        energia: 80,
                        habilidade: 80
                    }
                });
            }
        }
    }
}

walk(imagesDir);

console.log(JSON.stringify(missingCharacters, null, 2));
