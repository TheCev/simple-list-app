import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-title-input',
  template: `
			<mat-form-field>
			<input matInput #title formControl="title" placeholder="Insert Title" />
			</mat-form-field>
		<!--<mat-error *ngIf="checkTitleInput()">The title cannot be more than 40 characters</mat-error>-->
  `,
  styles: ['']
})
export class TitleInputComponent implements OnInit {

	@Input() form:FormGroup
	title:FormControl = new FormControl('')
	//@Output() title = new EventEmitter
	//@Output() inputInvalid = new EventEmitter


	ngOnInit():void{
		this.form.addControl('title', this.title)
	}
  /*sendTitle():void {
  	this.title.emit(this.titleInput.value)
  }

  titleInput:FormControl = new FormControl('',[Validators.required, Validators.maxLength(40)])

 checkTitleInput():boolean {

 	if(this.titleInput.hasError('maxlength') && this.titleInput.dirty){
 		this.inputInvalid.emit(true)
  		return true
 	}else{
 		this.inputInvalid.emit(false)
 		return false
 	}
 	
  }*/

  //ngOnInit():void{
  	//this.title = this.formGroupRoot.control.get('title') as FormControl
 // }

}
