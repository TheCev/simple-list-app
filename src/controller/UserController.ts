//Imports
import { User } from '../entity/User';
import {NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm'
import { validateOrReject }  from 'class-validator'


export class UserController {
	//Method obtain all users
	static getAll = async (req:Request, res:Response, next:NextFunction) => {
		const userRepository = getRepository(User)
		const users = await userRepository.find()

		if(users.length > 0){
			return res.send(users)
		}else{
			return res.status(404).json({message:"There are not users"})
		}
	}
	//Method create a new user
	static newUser = async (req:Request, res:Response, next:NextFunction) => {
		//extract data from body
		const {username, password, email } = req.body;
		//create a new user and provide it data
		const user = new User();

		user.username = username
		user.password = password
		user.email	= email

		//TODO validate
		validateOrReject(user)
		.catch(err =>{
			return res.status(400).json({message:"Please Enter Valid Values"})
		})

		const userRepository = getRepository(User)

		//try to hash the password and save user, if occurr an error notify
		try{
			user.hashPassword()
			await userRepository.save(user)
			return res.status(200).json({message:'user created'})
		}catch(e){
			
			res.status(401).json({message:'user already exist'})
		}
	}
	//Method obtain by id
	static getById = async (req:Request, res:Response, next:NextFunction) => {
		//extract id from params
		const { id } = req.params

		const userRepository = getRepository(User)
		//try to find it, if occurr an error notify
		try{
			const user = await userRepository.findOneOrFail(id)
				res.send(user)
		}catch(e){
			res.status(404).json({message: "not result"})
		}
	}
	//Method delete a user
	static deleteUser = async (req:Request, res:Response, next:NextFunction) => {
		//extract id from params
		const { id } = req.params

		const userRepository = getRepository(User)

		let user:User;

		//verify if exist, if occurr an error nofify
		try{

		  	user = await userRepository.findOneOrFail(id)
			//remove user
			userRepository.delete(id)
			res.status(201).json({message:"User deleted"})

		}catch(e){
			res.status(404).json({message:"User not found"})
		}	
	}

	//TODO EDIT USER
}