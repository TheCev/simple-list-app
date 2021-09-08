//Imports
import { Request, Response, NextFunction } from 'express'
import { List } from '../entity/List';
import {getRepository } from 'typeorm';

export class ListController {

	//Method obtain all users
	static getAll = async(req:Request, res:Response, next:NextFunction) => {

		const listRepository = getRepository(List)
		const lists = await listRepository.find()

		if(lists.length > 0 ){
			res.send(lists)
		}else{
			res.status(200).json({message:"not results"})
		}
	}
	//Method obtain by listId
	static getById = async(req:Request, res:Response, next:NextFunction) => {
		//extrac the id from params
		const {id} = req.params

		const listRepository = getRepository(List)
		let list:List

		//try to find the list, if occurr an error notify
		try{
			list = await listRepository.findOneOrFail(id)
			res.send(list)
		}catch(e){
			res.status(404).json({message:"trying to get a list that not exist"})
		}
	}
	//Method create a new list
	static newList = async(req:Request, res:Response, next:NextFunction) => {
		//extract userId and title from body
		const {userId , title } = req.body
		//create a new list and provide the data
		const list = new List()

		list.title = title
		list.userId = userId

		const listRepository = getRepository(List)

		//try to save the list, if occurr an error notify
		try{
			await listRepository.save(list)
			return res.status(200).json({message:'list created'})
		}catch(e){
			res.status(400).json({message: "Please insert Valid Values"})
		}
	}
	//Method delete a list
	static deleteList = async(req:Request, res:Response, next:NextFunction) => {
		//extrac id from params
		const { id } = req.params

		let list:List

		const listRepository = getRepository(List)

		//verify if the list exist,else nofify
		 try{

		 	list = await listRepository.findOneOrFail(id)
		 	listRepository.delete(id)
			return res.status(200).json({message:'list deleted'})

		 }catch(e){
		 	res.status(404).json({message:"the list not exist already"})
		 }
	}
	//Method edit a list
	static editList = async(req:Request, res: Response, next:NextFunction) => {
		//extract id from params and title from body
		const { id } = req.params

		const { title } = req.body

		let list:List
		const listRepository = getRepository(List)

		//try to get the list, if occurr an error notify
		try{
			list = await listRepository.findOneOrFail(id)
			//save the list
			list.title = title
			await listRepository.save(list)
			return res.status(200).json({message:'list edited'})

		}catch(e){
			return res.status(404).json({message:"list not found"})
		}
	}
	//Method obtain by userId
	static getByUserId = async (req:Request, res:Response, next:NextFunction) => {
		//extract the userId from params
		const { userId } = req.params

		const listRepository = getRepository(List)
		const lists = await listRepository.find({where:{userId}})


		res.send(lists)
	}
}