import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';

// Custom validator functions
function customValidator1(): ValidatorFn {
  return (control: AbstractControl) => {

    console.log(control);
    const valid = control.value.includes('5');
    return valid ? { first: true } : null;
  };
}

function customValidator2(): ValidatorFn {
  return (control: AbstractControl) => {
    const valid = control.value.includes('2');
    return valid ? { customValidation2: true } : null;
  };
}

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
})
export class FormComponent {
  passwordFormControl = new FormControl('', [
    customValidator1(),
    customValidator2(),
  ]);
}
