//Imports
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, Unique} from "typeorm";
import { IsEmail, MinLength, MaxLength,} from "class-validator";
import * as bcrypt from 'bcrypt';
import { List } from './List'
import { Task } from './Task'
//Create Entity and export it
//TODO generate foreigns keys and class-validator
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    
    @Column({unique:true})
    username: string;

    @Column()
    password: string;

    @Column({unique: true})
    @IsEmail()
    email: string;

    @OneToMany(type => List, list => list.user , 
        {
            onDelete:'CASCADE'
        }
    )
    lists: List[]

    @OneToMany(type => Task, task => task.user ,
        {
            onDelete:'CASCADE'
        }
    )
    tasks:Task[]

    hashPassword(){
    	const salt = bcrypt.genSaltSync(10);
    	this.password = bcrypt.hashSync(this.password, salt)
    }

    checkPassword(password){
       return bcrypt.compareSync(password, this.password) 
    }
}
