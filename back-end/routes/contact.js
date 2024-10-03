import express from "express"

import { postMessage, getAllMessages, deleteMessage } from '../controller/contactus.js'
import auth from '../middlewares/user.js'

const router = express.Router();

router.post('/post', postMessage)
router.get('/get', getAllMessages)
router.delete('/delete/:id', auth, deleteMessage)

export default router;