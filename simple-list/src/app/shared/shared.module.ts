import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsButtonComponent } from 'src/app/shared/components/options-button/options-button.component'
import { MaterialModule } from 'src/app/material.module'

@NgModule({
  declarations: [
  	OptionsButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
  	OptionsButtonComponent
  ]
})
export class SharedModule { }
