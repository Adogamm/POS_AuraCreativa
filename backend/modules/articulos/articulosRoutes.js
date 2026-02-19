const express = require('express');
const router = express.Router();

// Import dependencies
const ArticuloRepository = require('./articulosRepository');
const ArticuloService = require('./articulosService');
const ArticuloController = require('./articulosController');

// Instantiate dependencies
const articuloRepository = ArticuloRepository; // It's a singleton
const articuloService = new ArticuloService(articuloRepository);
const articuloController = new ArticuloController(articuloService);

// Define routes
router.get('/articulos', (req, res, next) => articuloController.getArticulos(req, res, next));

module.exports = router;
