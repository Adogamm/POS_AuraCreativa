const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function procesarImagen(file, { prefix = 'sq-', size = 500 } = {}) {
  if (!file) return null;

  try {
    const originalPath = file.path;
    const filename = file.filename;
    const outputFilename = `${prefix}${filename}`;
    const outputPath = path.join(file.destination, outputFilename);

    await sharp(originalPath)
      .resize(size, size, {
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .toFile(outputPath);

    fs.unlink(originalPath, () => {});
    return outputFilename;
  } catch (error) {
    console.error('Error procesando imagen:', error);
    return file.filename;
  }
}

// Soporta: const fn = require(...)  y  const { procesarImagen } = require(...)
module.exports = procesarImagen;
module.exports.procesarImagen = procesarImagen;