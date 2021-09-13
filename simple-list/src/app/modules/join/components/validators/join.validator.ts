//forms
import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

//export method validator, validate if the two passwords fields has the same content
export const comparePasswords : ValidatorFn  = ( control: FormGroup ): ValidationErrors | null => {

	const password = control.get('password')
	const repeatedPassword = control.get('repeatedPassword')
	return password.value === repeatedPassword.value ? null : {notEqual: true};
}