//Imports
import { Router } from 'express'
import { UserController } from '../controller/UserController'
import { checkJwt } from '../middlewares/jwt'

//create router
const router = Router()

//Routes
//obtain all users
router.get('/',checkJwt,UserController.getAll);
//create a new user
router.post('/',UserController.newUser)
//obtain a user by id
router.get('/:id',checkJwt,UserController.getById)
//delete user
router.delete('/:id',checkJwt,UserController.deleteUser)
//edit user
router.put('/:id',checkJwt, UserController.editUser )
//export router
export default  router;