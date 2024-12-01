import { Router } from "express";
import { listProducts, getProductById, createProduct, deleteProduct, updateProduct } from "../../controller/products/controller";

//route for products endpoints
const router = Router();

router.get('/',listProducts );
router.get('/:id',getProductById);
router.post('/',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

  
export default router;