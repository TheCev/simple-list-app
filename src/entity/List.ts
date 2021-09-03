//Imports
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { User } from './User'
import { Task } from './Task'
//Create entity
//TODO generate foreign keys and class-validation
@Entity()
export class List {
	@PrimaryGeneratedColumn()
	id:number;

	@Column()
	userId:number

	@Column()
	title:string;

	@ManyToOne(type => User, user => user.lists,
		{
            onDelete:'CASCADE'
        }
	) 
	user:User

	@OneToMany(type => Task, task => task.list , {
		onDelete:'CASCADE'
	})
	tasks:Task[]
}