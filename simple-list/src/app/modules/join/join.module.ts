//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { JoinComponent } from './components/join/join.component';
//Modules
import { JoinRoutingModule } from './join-routing.module';
import { MaterialModule } from 'src/app/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule,
    JoinRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class JoinModule { }
