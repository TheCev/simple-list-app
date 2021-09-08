import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks.component';
import { ProgressBarComponent } from 'src/app/modules/tasks/components/progress-bar/progress-bar.component'
import { AddTaskDialogComponent } from 'src/app/modules/tasks/components/add-task-dialog/add-task-dialog.component';
import { AddTasksButtonComponent } from 'src/app/modules/tasks/components/add-tasks-button/add-tasks-button.component';
import { MaterialModule } from 'src/app/material.module'

import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './components/list/list.component'

@NgModule({
  declarations: [
    TasksComponent,
    ProgressBarComponent,
    AddTaskDialogComponent,
    AddTasksButtonComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    SharedModule
   ]
})

export class TasksModule { }
