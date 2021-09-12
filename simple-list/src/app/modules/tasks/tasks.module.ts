import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProgressBarComponent } from 'src/app/modules/tasks/components/progress-bar/progress-bar.component'
import { AddTaskDialogComponent } from 'src/app/modules/tasks/components/add-task-dialog/add-task-dialog.component';
import { MaterialModule } from 'src/app/material.module'
import { ListComponent } from './components/list/list.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { ListsModule} from 'src/app/modules/lists/lists.module';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component'
import {ReactiveFormsModule} from '@angular/forms';
import { ListItemComponent } from './components/list-item/list-item.component'

@NgModule({
  declarations: [
    TasksComponent,
    ProgressBarComponent,
    AddTaskDialogComponent,
    ListComponent,
    EditTaskDialogComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    SharedModule,
    ListsModule,
    ReactiveFormsModule
   ]
})

export class TasksModule { }
