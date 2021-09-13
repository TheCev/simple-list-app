//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { EditListDialogComponent } from './components/edit-list-dialog/edit-list-dialog.component'
import { ListComponent } from './components/list/list.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { ListsComponent } from './components/lists/lists.component';
import { AddListDialogComponent } from './components/add-list-dialog/add-list-dialog.component'
import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';
//Modules
import { HttpClientModule } from '@angular/common/http';
import { ListsRoutingModule } from './lists-routing.module';
import { MaterialModule } from 'src/app/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import {SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListsComponent,
    AddListDialogComponent,
    AddButtonComponent,
    DeleteDialogComponent,
    ListComponent,
    EditListDialogComponent,

  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
  AddButtonComponent
  ]
})
export class ListsModule { }
