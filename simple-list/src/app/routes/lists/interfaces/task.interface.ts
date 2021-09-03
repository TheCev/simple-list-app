export interface Task {
	id:number;
	title:string;
	state:boolean;
	listId:string;
	userId:number;
}

export interface List {
	id:number,
	'list_title':string,
	userId:number
}

export interface UserResponse {
	message:string,
	token:string
}