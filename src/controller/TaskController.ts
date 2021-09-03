//Imports
import { Response, Request, NextFunction } from 'express';
import { Task } from '../entity/Task';
import { getRepository } from 'typeorm';


export class TaskController {
	//Method obtain all tasks
	static getAll = async( req:Request, res:Response, next:NextFunction) => {

		const taskRepository = getRepository(Task)
		const lists = await taskRepository.find()

		if(lists.length > 0 ){
			res.send(lists)
		}else{
			res.status(404).json({message:"not result"})
		}
	}
	//Method obtain by taskId
	static getById = async( req:Request, res:Response, next:NextFunction) => {
		//extract id from params
		const { id } = req.params

		const taskRepository = getRepository(Task)

		let task:Task
		//try to find list and send it, if occurr an error notify
		try{
			task = await taskRepository.findOneOrFail(id)
			res.send(task)
		}catch(e){
			res.status(404).json({message:"Not Found"})
		}
	}
	//Method create a new task
	static newTask = async(req:Request, res:Response, next:NextFunction) => {
		//extract data from body
		const { userId, listId, title, state } = req.body

		//verify if the data is complete
		if(!(title && userId && listId)){
			res.status(400).json({message:"the  whole data is required"})
		}else{
		//create a task and provide it the data
		const task = new Task()

		task.userId = userId
		task.listId = listId
		task.title = title
		task.state = state

		const taskRepository = getRepository(Task)

		//save the task
		await taskRepository.save(task)
		
		return res.status(200).json({message:'task created'})
		}
	}
	//Method delete a task
	static deleteTask = async(req:Request, res:Response, next:NextFunction) => {
		//extract id from params
		const { id } = req.params

		const taskRepository = getRepository(Task)

		let task:Task

		//verify if exist
		try{

			task = await taskRepository.findOneOrFail(id)
			//remove
			await taskRepository.delete(id)
			return res.status(200).json({message:'task deleted'})	

		}catch(e){
			res.status(404).json({message:"task not found"})	
		}
	}
	//Method obtain the list by ListId and UserId
	static getByListId = async(req:Request, res:Response, next:NextFunction) => {
		//extract userId and listId from params
		const { userId, listId } = req.params

		const taskRepository = getRepository(Task)

		//Create the query
		const tasks = await taskRepository.createQueryBuilder("task")
			.where("task.userId = :userId")
			.andWhere("task.listId = :listId")
			.setParameters({userId, listId})
			.getMany()

		res.send(tasks)	
	}
	//Method change task state
	static changeState = async(req:Request, res:Response, next:NextFunction) => {
		//extract if from params
		const { id } = req.params

		const taskRepository = getRepository(Task)

		let task:Task

		//verify exist
		try{
			task = await taskRepository.findOneOrFail(id)
		}catch(e){
			return res.status(200).json({message:"tasks not found"})
		}

		//change state
		switch (task.state) {
			case false:
				task.state = true
				break;
			
			default:
				task.state = false
				break;
		}

		//save changes
		await taskRepository.save(task)
		res.status(200).json({message:'task state changed'})
	}
}