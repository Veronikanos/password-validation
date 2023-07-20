# Password validator - Angular

### This is a test task for USENSE

The essence of the assignment:
- Create a field for entering a password, under the field add 3 sections which will show the strength of the password;
- Changes in password strength must take place in real time;

How to calculate the strength of a password:
- Only letters/digits/symbols - the password is easy;
- Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
- Has letters, symbols and numbers - the password is strong;
  
The color of the sections will depend on the strength of the password:
- ✔ If the field is empty, all sections are gray;
- ✔ If the field has less than 8 characters, all sections are red;
- ✔ If the password is easy - the first section is red the rest are gray;
- ✔ If the password is medium - the first two sections are yellow the last one is gray;
- ✔ If the password is strong, all sections are green;


[Live page](https://veronikanos.github.io/password-validation/)


![image](https://github.com/Veronikanos/password-validation/assets/49239848/e8e71d19-b193-4f75-85db-a6abdf275432)
![r](https://github.com/Veronikanos/password-validation/assets/49239848/371401b0-701c-43a9-bc85-4e240dd866a8)

____
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
