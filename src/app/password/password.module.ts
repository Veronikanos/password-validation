import { NgModule } from '@angular/core';
import { CommonModule, NgIf} from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FormComponent } from 'src/app/password/formComponent/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgIf,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [FormComponent],
})
export class PasswordModule {}
