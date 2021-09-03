//Imports
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import { ListController } from './ListController'

export class AuthController {

	static login = async (req:Request, res:Response,  next:NextFunction) => {
		//extract username and password from body
		const { username, password } = req.body

		//if aren't send message
		if(!(username && password)){
			res.status(404).json({message:"username & password are required"})
		}

		const userRepository = getRepository(User)
		let user:User;

		//try to find the user in db
		try{
			user = await userRepository.findOneOrFail({where:{username}})
		}catch(e){
			res.status(400).json({message:"Username or Password are incorrect"})
		}

		//verify the password
		if(!user.checkPassword(password)){
			res.status(400).json({message:"Username or Password are incorrect"})
		}else{

			//create token and send it to the user
			const token = jwt.sign({
				userId: user.id,
				username: user.username
			}, 'secret', { expiresIn: '1h'})

			return res.json({message:'OK', token})
		}
	}
}