import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CheckLoginGuard } from './core/guards/check-login.guard';
import { CheckUnLoginGuard } from './core/guards/check-unlogin.guard';
import { PageNotFoundComponent } from 'src/app/modules/page-not-found/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
	{
		path:'lists',
		loadChildren: () => import ('./modules/lists/lists.module').then(m => m.ListsModule),
		canActivate:[CheckUnLoginGuard],
		canLoad:[CheckUnLoginGuard]
	},
	/*{
		path:'profile',
		loadChildren: () => import ('./modules/profile/profile.module').then( m => m.ProfileModule),
		canActivate:[CheckUnLoginGuard],
		canLoad:[CheckUnLoginGuard]
	},*/
	{
		path:'join',
		loadChildren:() => import ('./modules/join/join.module').then(m => m.JoinModule),
		canActivate:[CheckLoginGuard]
	},
	{
		path:'**', component:PageNotFoundComponent
	}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
