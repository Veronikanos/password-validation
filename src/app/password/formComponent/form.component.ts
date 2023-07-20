import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { PasswordStatus } from 'src/app/password/helpers/passwordStatus';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
})
export class FormComponent {
  hide = true;
  colorsForPasswordBar: Array<string> = PasswordStatus.Empty;

  constructor() {
    // detect changes of value
    this.passwordFormControl.valueChanges.subscribe(() => {
      this.updatePasswordStrength();
    });
  }

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  updatePasswordStrength(): void {
    let password: string | null = this.passwordFormControl.value;
    if (!password) {
      this.colorsForPasswordBar = PasswordStatus.Empty;
    } else {
      const passwordLength: number = password.length;

      if (passwordLength < 8) {
        this.colorsForPasswordBar = PasswordStatus.TooShort;
      } else if (
        /^[a-zA-Z]+$/.test(password) ||
        /^\d+$/.test(password) ||
        /^\W+$/.test(password)
      ) {
        this.colorsForPasswordBar = PasswordStatus.Easy;
      } else if (/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\W)/.test(password)) {
        this.colorsForPasswordBar = PasswordStatus.Strong;
      } else {
        this.colorsForPasswordBar = PasswordStatus.Medium;
      }
    }
  }
}
