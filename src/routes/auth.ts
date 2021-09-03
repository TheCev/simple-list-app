//Imports
import { Router } from 'express'
import { AuthController } from '../controller/AuthController'
import { checkJwt } from '../middlewares/jwt'

//create router
const router = Router()

//Routes
router.post('/login', AuthController.login)

router.get('/', checkJwt, (req,res) => {
	return res.send(200).json({message:'OK'})
})

//export router
export default router