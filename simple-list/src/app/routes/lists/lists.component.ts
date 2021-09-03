import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';
import { List } from 'src/app/routes/lists/interfaces/task.interface'
import { MatDialog } from '@angular/material/dialog'
import { DeleteDialogComponent } from 'src/app/routes/lists/delete-dialog/delete-dialog.component'
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from '../../shared/services/auth.service'
import {JwtHelperService } from '@auth0/angular-jwt'
import { catchError} from 'rxjs/operators'
const helper = new JwtHelperService()

@Component({ 
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass']
})

export class ListsComponent implements OnInit{

  lists:any[] = []
  userId:number
  loading:boolean
  constructor(

    public authSvc: AuthService,
  	private listSvc:ListService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar

  	) { 
    this.userId = JSON.parse(localStorage.getItem("user")).userId
    this.loading = true
  }
  

  getLists():void{

    this.loading = true
    this.listSvc.getLists(this.userId)
    .subscribe((lists) => {
      this.loading = false
      this.lists = lists

    })
 

      

    }

    addNewList(listTitle:string):void{
      
      this.listSvc.sendList(this.userId,listTitle).subscribe((list) => {
        this.getLists()
        this.openSnackBar('A list has been added')
      })
     
    
    }

  openSnackBar(message){

    this.snackBar.open(message,'', {
      duration: 3000
    })

  }
  
  deleteList(id){

      this.listSvc.deleteList(id).subscribe(()=>{
        
        this.openSnackBar('A list has been deleted')
        this.getLists()
        })    
    
  }

  openDialog(id):void {

      const dialogRef = this.dialog.open(DeleteDialogComponent,{ width:'300px' })

      dialogRef.afterClosed().subscribe((result) =>{
        if(result === true) {
            this.deleteList(id)
        }
      })

  }

  	ngOnInit(){
     
      this.getLists()

    }

}
