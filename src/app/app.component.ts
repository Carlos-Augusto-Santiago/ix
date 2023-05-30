import { Component } from '@angular/core';
import { clientesInterface } from './formulario-reactivo/clientesInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Esta variable esta en el front al inicio, es lo que te mencionaba que aqui no hay un estado. son variables normales.
  title = 'beneficiarios-tabla-admin';
  constructor() {}
}
