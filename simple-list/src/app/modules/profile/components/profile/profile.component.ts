//Angular
import { Component, OnInit, OnDestroy } from '@angular/core';
//Services
import { UserInfoService } from 'src/app/modules/profile/services/user-info.service'
//rxjs
import { Subscription } from 'rxjs'
//Components
import { ChangeUsernameDialogComponent  } from 'src/app/modules/profile/components/change-username-dialog/change-username-dialog.component'
import { ChangeEmailDialogComponent } from 'src/app/modules/profile/components/change-email-dialog/change-email-dialog.component'
//angular component
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit, OnDestroy {

	//Properties
	user = {
		username:'username',
		email:'email'
	}
	subscriptions = new Subscription();

	//Dependencies injection
  constructor(
    private userInfoSvc: UserInfoService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
  	 this.showUserInfo()
  }

  showUserInfo():void{
    this.subscriptions
    .add(this.userInfoSvc.getUserInfo().subscribe((user) => {
      this.user = user
    }))
  }

  openChangeEmailDialog():void{
    const dialogRef = this.dialog.open(ChangeEmailDialogComponent, {
     width:'300px'
    })

    dialogRef.afterClosed().subscribe((newEmail => {
      if(newEmail){
        const newUser = {
          username: this.user.username,
          email: newEmail,
        }
        this.editUser(newUser)
      }
    }))
  }



  openChangeUsernameDialog():void{
   const dialogRef = this.dialog.open(ChangeUsernameDialogComponent, {
      width: '300px'
    })

   dialogRef.afterClosed().subscribe((newUsername:string) => {
      if(newUsername){
        const newUser = {
        username:newUsername,
        email:this.user.email
        }
        this.editUser(newUser)
     }

   })

  }

  editUser(newUser):void{
    this.subscriptions
    .add(this.userInfoSvc.editUserInfo(newUser).subscribe(() => {
      this.showUserInfo()
    }))
  }




  ngOnDestroy():void {
  	this.subscriptions.unsubscribe()
  }

}
