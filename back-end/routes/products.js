import express from "express"
import { addProduct, listProducts, removeProduct, singleProduct } from '../controller/products.js'

const router = express.Router();

router.post('/add', addProduct)
router.post('/remove', removeProduct)
router.post('/single', singleProduct)
router.get('/list', listProducts)

export default router;