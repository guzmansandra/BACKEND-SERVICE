import { Router } from "express";
import {
    getAllProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productControllers";

const productRoutes = Router();

/**
 * @swagger
 * /api/products:
 *  get:
 *      summary: Obtener todos los Productos
 *      responses:
 *          200:
 *              descriptions: Lista de Productos
 */
productRoutes.get("products/", getAllProducts);
productRoutes.get("products/:id", getProductByID);
productRoutes.post("products/", createProduct);
productRoutes.put("products/:id", updateProduct);
productRoutes.delete("products/:id", deleteProduct);

export default productRoutes