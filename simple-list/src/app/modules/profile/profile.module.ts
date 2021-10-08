//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modules
import { ProfileRoutingModule } from './profile-routing.module';
import { MaterialModule } from 'src/app/material.module'
import { ReactiveFormsModule } from '@angular/forms'
//Components
import { ProfileComponent } from './components/profile/profile.component';
import { ChangeUsernameDialogComponent } from './components/change-username-dialog/change-username-dialog.component';
import { ChangeEmailDialogComponent } from './components/change-email-dialog/change-email-dialog.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ChangeUsernameDialogComponent,
    ChangeEmailDialogComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
