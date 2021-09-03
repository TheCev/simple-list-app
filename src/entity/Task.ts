//Imports
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'
import { List } from './List'
//Create Entity and export it
//TODO generate foreign keys and class-validation
@Entity()
export class Task {

	@PrimaryGeneratedColumn()
	id:number;

	@Column()
	userId:number

	@Column()
	listId:number
	
	@Column()
	title:string;

	@Column()
	state:boolean

	@ManyToOne(type => List, list => list.tasks,
		{
            onDelete:'CASCADE'
        }
	)
	list:List

	@ManyToOne(type => User, user => user.tasks,
		{
            onDelete:'CASCADE'
        }
	)
	user:User
}