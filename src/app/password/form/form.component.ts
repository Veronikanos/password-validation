import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';

// Custom validator functions
function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;
    const valid =
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password);
    return valid ? { strong: true } : null;
  };
}

function easyPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control);
    const password = control.value;
    const valid =
      /^[a-zA-Z]+$/.test(password) ||
      /^\d+$/.test(password) ||
      /^[!@#$%^&*]+$/.test(password);
    return valid ? { easy: true } : null;
  };
}


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
})
export class FormComponent {
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    strongPasswordValidator(),
    easyPasswordValidator(),
  ]);
}
