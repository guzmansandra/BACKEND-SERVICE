import { Router } from "express";
import {
    getAllProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productControllers";

const productRoutes = Router();

productRoutes.get("products/", getAllProducts);
productRoutes.get("products/:id", getProductByID);
productRoutes.post("products/", createProduct);
productRoutes.put("products/:id", updateProduct);
productRoutes.delete("products/:id", deleteProduct);

export default productRoutes