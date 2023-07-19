import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';

// // Custom validator functions
// function strongPasswordValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const password = control.value;
//     const valid =
//       /[a-zA-Z]/.test(password) &&
//       /[0-9]/.test(password) &&
//       /[!@#$%^&*]/.test(password);
//     return valid ? { strong: true } : null;
//   };
// }

// function easyPasswordValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     console.log(control);
//     const password = control.value;
//     const valid =
//       /^[a-zA-Z]+$/.test(password) ||
//       /^\d+$/.test(password) ||
//       /^[!@#$%^&*]+$/.test(password);
//     return valid ? { easy: true } : null;
//   };
// }

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
})
export class FormComponent {
  hide = true;
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  getPasswordStrength(): Array<string> {
    let password: string; 
    if (this.passwordFormControl.value){
      password = this.passwordFormControl.value;
    } else return ['grey', 'grey', 'grey'];

    const passwordLength: number = password.length;

  if (passwordLength < 8) {
      return ['red', 'red', 'red'];
    } else if (
      /^[a-zA-Z]+$/.test(password) ||
      /^\d+$/.test(password) ||
      /^\W+$/.test(password)
    ) {
      return ['red', 'grey', 'grey'];
    } else if (/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\W)/.test(password)) {
      return ['green', 'green', 'green'];
    } else {
      return ['yellow', 'yellow', 'grey'];
    }
  }
}
