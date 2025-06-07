import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output()login= new EventEmitter<void>();
  formLogin:FormGroup;

  constructor(private fb: FormBuilder){
    this.formLogin = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }
  onSubmit(){
    if(this.formLogin.valid){
      console.log('Login simulado', this.formLogin.value);
      this.login.emit();
    }
  }
}
