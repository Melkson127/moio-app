import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../api/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ],
    ],
    password: [
      Validators.required,
      Validators.minLength(8)
    ]
  });
  constructor(private auth: AuthService, public formBuilder: FormBuilder) { }
  
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password')
  }
  public errorMessages ={
    email: [
      {type: 'required', message: 'Email é obrigatório'},
      {type: 'pattern', message: 'Por favor insira um email válido'}
    ],
    password: [
      {type: 'required', message: 'Senha é obrigatória'},
      {type: 'minlength', message: 'Senha não poder ter menos que 8 caracteres'}
    ]
  }
  ngOnInit() {
  }
  login(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
    } else {
      console.log('não foi')
    }
  }

}
