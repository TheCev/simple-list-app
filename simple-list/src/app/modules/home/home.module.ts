//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { HomeComponent } from './components/home/home.component';
//Modules
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material.module'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
