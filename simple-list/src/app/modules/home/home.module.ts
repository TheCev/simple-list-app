//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { HomeComponent } from './components/home/home.component';
//Modules
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material.module'
//Routing
import { RouterModule, Routes } from '@angular/router';
//guards
import { CheckLoginGuard } from 'src/app/core/guards/check-login.guard'


const homeRoutes: Routes = [
	{
		path:'',
		component:HomeComponent,
		pathMatch:'full',
		canActivate:[CheckLoginGuard]
	}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
   	RouterModule.forChild(homeRoutes),
    MaterialModule
  ]
})
export class HomeModule { }
