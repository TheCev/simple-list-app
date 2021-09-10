//Imports
import { Router } from 'express'
import {TaskController} from '../controller/TaskController'
import { checkJwt } from '../middlewares/jwt'

//create router
const router = Router()

//Routes

//obtain all tasks
router.get('/',checkJwt, TaskController.getAll)
//obtain a task by id
router.get('/:id',checkJwt, TaskController.getById)
//create a new list
router.post('/',checkJwt, TaskController.newTask)
//obtain tasks by listId
router.get('/user/:userId/list/:listId',checkJwt,TaskController.getByListId)
//delete a task
router.delete('/:id',checkJwt, TaskController.deleteTask)
//change task state
router.put('/:id/state',checkJwt, TaskController.changeState)
//edit a task
router.put('/:id',checkJwt, TaskController.editTask)

//export router
export default router