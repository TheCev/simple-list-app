import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

import { MaterialModule } from 'src/app/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import {RouterModule, Routes } from '@angular/router'

const loginRoutes: Routes = [
	{
		path:'login',
		component:LoginComponent
	}
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginModule { }
