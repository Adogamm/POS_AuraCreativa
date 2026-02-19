class ArticuloController {

    // Se recibe el servicio como dependencia
    constructor(articuloService) {
        this.articuloService = articuloService;
    }

    async getArticulos(req, res, next) {
        try {
            const articulos = await this.articuloService.getArticulos();
            res.json({
                message: 'Artículos obtenidos exitosamente',
                code: 200,
                data: articulos
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener los artículos',
                code: 500,
                error: error.message
            });
            next(error);
        }
    }
}

module.exports = ArticuloController;
module.exports.ArticuloController = ArticuloController;