const { pool } = require('../../config/db');

class ArticuloRepository {
    
    /**
     * Obtiene todos los artículos activos de la base de datos con su información relacionada.
     * @returns {Promise<Array>} Una promesa que resuelve a un arreglo de artículos.
     */
    async findAll() {
        const query = `
            SELECT "IdArticulo", "CodArticulo", "NomArticulo", "StockActual", "PrecioVenta",
                   "IdProveedor", "IdCfgStock", "Categoria", "Talla", "Color", "DetallesTecnicos",
                   "NombreUnidad", "Imagen", "FechaCreacion"
            FROM "Articulos"
            WHERE "Activo" = true 
            ORDER BY "NomArticulo" ASC`;
        
        const client = await pool.connect();
        try {
            const result = await client.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error en ArticuloRepository.findAll:', error);
            throw error; // Propaga el error para que la capa de servicio lo maneje
        } finally {
            client.release();
        }
    }
}

// Exportamos una instancia única (Singleton) para ser usada en toda la app
module.exports = new ArticuloRepository();
