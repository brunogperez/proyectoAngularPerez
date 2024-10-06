import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      //el primer elemento en el array es el valor por defecto y el segundo valor son las validaciones
      //el valor que se encuentra dentro de los corchetes es el valor por defecto del formulario por lo que se deja vacío
      //tener cuidado porque no es el valor del placeholder
    });
  }

  /* Se utilizan los getters para optimizar el codigo en el html y dejarlo lo mas limpio posible trayendo parte de la lógica al ts */

  //Getters del firstName
  get firstNameRequired() {
    return this.registerForm.get('firstName');
  }
  get firstNameHasReqError() {
    return this.registerForm.get('firstName')?.hasError('required');
  }
  get firstNamePatternError() {
    return this.registerForm.get('firstName')?.hasError('pattern');
  }

  //Getters del lastName
  get lastNameRequired() {
    return this.registerForm.get('lastName');
  }
  get lastNameHasReqError() {
    return this.registerForm.get('lastName')?.hasError('required');
  }
  get lastNamePatternError() {
    return this.registerForm.get('lastName')?.hasError('pattern');
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      console.log(this.registerForm.get('firstName')?.errors);
      this.registerForm.markAllAsTouched();
    } else {
      console.log(this.registerForm.value);
    }
  }
}
