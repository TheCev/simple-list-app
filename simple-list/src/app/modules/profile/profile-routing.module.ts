import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from 'src/app/modules/page-not-found/components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ 
		path: '', component: ProfileComponent
	},
	{
		path: '**', component:PageNotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
