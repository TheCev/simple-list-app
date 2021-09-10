import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-title-input',
  template: `
		<mat-form-field>
			<input matInput #title [formControl]="titleInput" (input)="sendTitle()" placeholder="Insert Title" />
		</mat-form-field>

		<mat-error *ngIf="checkTitleInput()">The title cannot be more than 40 characters</mat-error>
  `,
  styles: ['']
})
export class TitleInputComponent implements OnInit {

	@Output() title = new EventEmitter
	@Output() inputInvalid = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  sendTitle():void {
  	this.title.emit(this.titleInput.value)
  }

  titleInput = new FormControl('',[Validators.required, Validators.maxLength(40)])

 checkTitleInput():boolean {

 	if(this.titleInput.hasError('maxlength') && this.titleInput.dirty){
 		this.inputInvalid.emit(true)
  		return true
 	}else{
 		return false
 	}
 	
  }

}
