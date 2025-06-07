import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConsultaCriptoComponent} from './consulta-cripto/consulta-cripto.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsultaCriptoComponent, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'consulta-cripto';
  usuarioLogado=false;

  aologar(){
    this.usuarioLogado = true;
  }
}
