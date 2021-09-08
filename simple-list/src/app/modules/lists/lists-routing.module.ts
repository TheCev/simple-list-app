import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';

const routes: Routes = [
							{ path: '', component: ListsComponent },
							{ path: 'tasks/:listId', loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule) }
						];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListsRoutingModule { }
