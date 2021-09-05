//Imports
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';


export const checkJwt = (req: Request, res: Response, next:NextFunction) => {

	//obtain token from header
	const bearerToken = <string>req.headers['authorization'];
	let jwtPayload;

	const token:string = bearerToken.replace('Bearer ', '');

	//if there is'nt token notify
	if(!req.headers.authorization){
		return res.status(401).json({message:"Not authorization"}) 
	}
	//verify token, if occur an error notify
	try{

		jwtPayload = <any>jwt.verify(token, process.env.SECRET_KEY );
		res.locals.jwtPayload = jwtPayload;

	}catch(e){
		return res.status(401).json({message:'not authorized. If you have logged in, please refresh the page'})
	}

	//obtain data from jwtPayload
	const {userId, username} = jwtPayload;
	//create newToken for send on the headers the data
	const newToken = jwt.sign({userId, username}, process.env.SECRET_KEY, {expiresIn:'1h'})
	res.setHeader('token', newToken)
	//this is for receive the token header
	res.setHeader('access-control-expose-headers', 'token')
	//call next
	next()
}