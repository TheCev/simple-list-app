//Angular
import { Component, OnInit, OnDestroy } from '@angular/core';
//handles material components 
import { MatDialog } from '@angular/material/dialog' //import the material dialog
import {MatSnackBar} from '@angular/material/snack-bar'; // import the material snackbar
//services
import { ListService } from 'src/app/modules/lists/services/list.service'; //import the listSvc
///Interfaces
import { List } from 'src/app/modules/lists/interfaces/list.interface'; //import the List interface
//Components
import {DeleteDialogComponent} from 'src/app/modules/lists/components/delete-dialog/delete-dialog.component';
import {AddListDialogComponent} from 'src/app/modules/lists/components/add-list-dialog/add-list-dialog.component'
import {EditListDialogComponent} from 'src/app/modules/lists/components/edit-list-dialog/edit-list-dialog.component'
// rxjs
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit {

	//Properties

	private subscriptions = new Subscription() //array of all the component subscription
	public load:boolean //mean if the component is load,so if false active a spinner charger
	public items = [] //the lists

	//Dependencys Injection

  constructor(

  	private listSvc:ListService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar

  	) { 
  	this.load = false //load initialize in false, so active the spinner charger
  }


  //Open a snackBar method
  	openSnackBar(message) {

    this.snackBar.open(message,'', {
      duration: 3000
    })

  }
  
  // delete a list method
  deleteList(id):void {

  	//subscribe for the listSvc deleteList method
  	// add the subscription to the subscriptions array
    this.subscriptions
    .add(this.listSvc.deleteList(id).subscribe(() => {
  			this.getLists() //refresh and show
  		})
  	)    
    
  }

  //open the add list dialog method
  openAddListDialog():void {

  	//open the add list dialog component by the dialog open method
  	const dialogRef = this.dialog.open(AddListDialogComponent,{
    	width:'300px'
  	})

  	//get the new list after closed the dialog ref with the afterClosed method
  	//add the subscription to the subscription array
  	this.subscriptions
  	.add(dialogRef.afterClosed().subscribe((result:string) =>{

  			//if the value is valid
  			if(result){

  				//get the values
  				const listTitle = result
    			const userId = JSON.parse(localStorage.getItem('user')).userId //get the userId
    			//save through the listSvc sendList method
    			this.listSvc.sendList(userId, listTitle).subscribe(() => {
     				this.getLists()//refresh and show
    			})
  			}
   	 })
    )
  }

  	//open the delete dialog method
  	openDeleteDialog(id):void {

  		//open the delete dialog component by the dialog open method
    	const dialogRef = this.dialog.open(DeleteDialogComponent,{ width:'300px' })
    	// get the values after closed the dialog
    	// add the subscription to the subscriptions array
      	this.subscriptions
      	.add(dialogRef.afterClosed().subscribe((result) =>{
      			//verify the response
        		if(result === true) {
        			//delete list
            		this.deleteList(id)
        		}
      		})
      	)

  	}

  	//open the edit dialog method
  	openEditDialog(id):void {
  		//open the edit list dialog component by the dialog open method
  		const dialogRef = this.dialog.open(EditListDialogComponent, {
  			width:'300px'
  		})

  		//get the values after closed the edit list dialog component
  		this.subscriptions
  		.add(dialogRef.afterClosed().subscribe((newTitle:string) => {

  				//if the value is valid
  				if(newTitle){
  					//save through the listSvc EditList
  					this.editList(id,newTitle)
  				}	
  			})
  		)
  	}

  	//Edit list method
  	editList(id,newTitle):void{
  		this.subscriptions
  		.add(this.listSvc.editList(id,newTitle).subscribe(() =>{
  					this.getLists() //refresh and show
  					}))
  	}

  	//refresh and get lists then show them method
    getLists():void{
    	//get the userId
    	const userId = JSON.parse(localStorage.getItem('user')).userId
   	 	this.load = false //active the spinner charger
   	 	//subscribe for the listSvc getLists method, so get the lists
   	 	// add the subscription to the subscriptions array
    	this.subscriptions
    	.add(this.listSvc.getLists(userId).subscribe((lists) => {
      			this.items = lists //get the lists
      			this.load = true //desactive the spinner charger
    		})
		)
    }

	//Lifecycle hooks

  	ngOnInit():void{
  	//initialize loading the lists
  	this.getLists()
	}

	ngOnDestroy():void{
		//unsubscribe of all the component subscription
		this.subscriptions.unsubscribe()
	}
}
