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
                data: articulos
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ArticuloController;
module.exports.ArticuloController = ArticuloController;