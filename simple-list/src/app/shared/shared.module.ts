import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsButtonComponent } from 'src/app/shared/components/options-button/options-button.component'
import { MaterialModule } from 'src/app/material.module';
import { TitleInputComponent } from './components/title-input/title-input.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
  	OptionsButtonComponent,
   TitleInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
  	OptionsButtonComponent,
    TitleInputComponent
  ]
})
export class SharedModule { }
