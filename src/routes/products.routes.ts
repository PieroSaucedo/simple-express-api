import { Router } from 'express';
import { ProductController } from "../controllers/product.controller";

const router = Router();
const productController = new ProductController();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

export default router;

