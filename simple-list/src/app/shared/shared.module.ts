import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsButtonComponent } from 'src/app/shared/components/options-button/options-button.component'
import { MaterialModule } from 'src/app/material.module';
import { TitleInputComponent } from './components/title-input/title-input.component'
import { ReactiveFormsModule } from '@angular/forms';
import { SuccesfullySnackbarComponent } from './components/succesfully-snackbar/succesfully-snackbar.component'

@NgModule({
  declarations: [
  	OptionsButtonComponent,
   TitleInputComponent,
   SuccesfullySnackbarComponent
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
