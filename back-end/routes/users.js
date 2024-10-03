import express from "express"

import { signin, login, account } from '../controller/user.js'
import { getAllUsers, updateProfile } from '../controller/allusers.js'
import auth from '../middlewares/user.js'
import { loginValidation, signinValidation } from '../middlewares/Authvalidation.js'


const router = express.Router();

router.post('/signin', signin)
router.post('/login', login)
router.post('/account', account)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router;