import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './core/guards/check-login.guard';
import { CheckUnLoginGuard } from './core/guards/check-unlogin.guard';

const routes: Routes = [
	{
		path: '',loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate:[CheckLoginGuard]
	},
	{ 
		path: 'lists', loadChildren: () => import('./modules/lists/lists.module').then(m => m.ListsModule),
		canActivate:[CheckUnLoginGuard]
	},
	{
		path: 'join', loadChildren: () => import('./modules/join/join.module').then(m => m.JoinModule),
		canActivate:[CheckLoginGuard] 
	},
	{ 
		path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
		canActivate:[CheckLoginGuard] 
	},
	{ 
		path: '**', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) 
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
