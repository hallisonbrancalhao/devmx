import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender, SignUp } from '@devmx/shared-api-interfaces';
import { FormOption, TypedForm } from '../../../shared';


export class SignUpForm extends FormGroup<TypedForm<SignUp>> {
  genders: FormOption<Gender>[] = [
    { value: 'female', viewValue: 'Feminino' },
    { value: 'male', viewValue: 'Masculino' },
    { value: 'non-binary', viewValue: 'Não binário' },
    { value: 'gender-fluid', viewValue: 'Gênero fluído' },
    { value: 'agender', viewValue: 'Agênero' },
    { value: 'prefer-not-to-say', viewValue: 'Prefiro não dizer' },
    { value: '', viewValue: 'Outro' },
  ];

  get gender() {
    return this.controls.gender;
  }

  constructor() {
    super({
      name: new FormGroup({
        first: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        last: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
      }),
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      gender: new FormControl('female', {
        nonNullable: true,
      }),
      minibio: new FormControl('', {
        nonNullable: true,
      }),
      birthday: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
