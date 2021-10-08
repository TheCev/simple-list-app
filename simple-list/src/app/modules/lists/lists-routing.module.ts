import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { CheckUnLoginGuard } from 'src/app/core/guards/check-unlogin.guard'
import { PageNotFoundComponent } from 'src/app/modules/page-not-found/components/page-not-found/page-not-found.component';
import { TasksResolverService } from 'src/app/modules/tasks/services/tasks-resolver.service';
import {ListTitleResolverService } from 'src/app/modules/tasks/services/list-title-resolver.service'
import {ListsResolverService } from './services/lists-resolver.service'

const routes: Routes = [
	{ 
		path: '',
		component: ListsComponent,
		resolve: {
			lists:ListsResolverService
		} 
	},
	{ 
		path: 'tasks/:listId', loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule),
		canActivate:[CheckUnLoginGuard],
		resolve:{
			list: ListTitleResolverService,
			tasks: TasksResolverService
		}						 
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListsRoutingModule { }
