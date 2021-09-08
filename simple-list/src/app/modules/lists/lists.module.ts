import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './components/lists/lists.component';
import { MaterialModule } from 'src/app/material.module'
import { HttpClientModule } from '@angular/common/http';
import { AddListDialogComponent } from './components/add-list-dialog/add-list-dialog.component'
import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';

import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

import { ListComponent } from './components/list/list.component';

import {SharedModule} from 'src/app/shared/shared.module';
import { EditListDialogComponent } from './components/edit-list-dialog/edit-list-dialog.component'

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
    SharedModule
  ]
})
export class ListsModule { }
