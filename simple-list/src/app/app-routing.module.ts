import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/routes/page-not-found/page-not-found.component'
import { CheckLoginGuard } from './shared/check-login.guard';
import { CheckUnLoginGuard } from './shared/check-unlogin.guard'
import { HomeComponent } from './routes/home/home.component'
const routes: Routes = [
	{
		path: '', component: HomeComponent, canActivate:[CheckLoginGuard]
	},
	{ 
		path: 'lists', loadChildren: () => import('./routes/lists/lists.module').then(m => m.ListsModule),
		canActivate:[CheckUnLoginGuard]
	},
	{
		path: 'join', loadChildren: () => import('./routes/join/join.module').then(m => m.JoinModule),
		canActivate:[CheckLoginGuard] 
	},
	{ 
		path: 'login', loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule),
		canActivate:[CheckLoginGuard] 
	},
	{
		path:"**", component:PageNotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
