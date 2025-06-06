import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConsultaCriptoComponent} from './consulta-cripto/consulta-cripto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsultaCriptoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'consulta-cripto';
}
