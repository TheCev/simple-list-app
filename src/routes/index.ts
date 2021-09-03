//Imports
import { Router } from 'express'
import user from './user';
import auth  from './auth'
import list from './list'
import task from './task'

//create routes
const routes = Router()

//routes
routes.use('/users', user)
routes.use('/auth', auth)
routes.use('/lists', list)
routes.use('/tasks', task)

//export routes
export default routes; 