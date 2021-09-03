//Imports
import { Router } from 'express'
import { ListController } from '../controller/ListController'
import { checkJwt } from '../middlewares/jwt'

//create router
const router = Router()
//Routes

//obtain all lists
router.get('/',checkJwt, ListController.getAll)
//obtain lists by userId
router.get('/user/:userId',checkJwt, ListController.getByUserId)
//create a new list
router.post('/',checkJwt, ListController.newList)
//obtain a list by id
router.get('/:id',checkJwt, ListController.getById)
//delete a list
router.delete('/:id',checkJwt, ListController.deleteList)
//edit a list
router.put('/:id',checkJwt, ListController.editList)

//export router
export default router