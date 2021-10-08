import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import{ PageNotFoundComponent } from 'src/app/modules/page-not-found/components/page-not-found/page-not-found.component'

const routes: Routes = [
	{ 
		path: '', component: TasksComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
