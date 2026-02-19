const { pool } = require('../../config/db');
const { registrarAccion } = require('../../utils/logger');
const imageProcessor = require('../../utils/imageProcessor');

class ArticuloService {

    // El servicio recibe el repositorio como dependencia
    constructor(articulosRepository) {
        this.articulosRepository = articulosRepository;
    }
    
    async getArticulos() {
        return this.articulosRepository.findAll();
    }
}

module.exports = ArticuloService;
module.exports.ArticuloService = ArticuloService;