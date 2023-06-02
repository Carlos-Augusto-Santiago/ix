import { Component } from '@angular/core';
import { clientesInterface } from './clientesInterface';
import { FormControl } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss'],
})
export class FormularioReactivoComponent {
  // title
  title = 'http-client';
  // constructor
  constructor(private httpService: HttpService) {}
  posts: any;

  // variable para la busqueda
  search: string = '';

  // variable para las opciones del select
  selectOptions = [
    { id: 0, name: 'Estatus - Todos' },
    { id: 1, name: 'Estatus - Actualizado' },
    { id: 2, name: 'Estatus - Por vencer' },
    { id: 3, name: 'Estatus - Notificado' },
    { id: 4, name: 'Estatus - Vencido' },
    { id: 5, name: 'Estatus - Espera Firma' },
  ];
  selectedValue: number = 0;

  // Data de usuarios
  data: Array<clientesInterface> = [
    {
      firstName: 'Enrique',
      lastName: 'Pena',
      status: 'Por vencer',
      lastUpdate: '15.07.2023',
      type: '',
      lastNotification: '12.07.2023',
      file: '',
    },
    {
      firstName: 'María',
      lastName: 'Sánchez',
      status: 'Actualizado',
      lastUpdate: '12.03.2023',
      type: 'con cambios',
      lastNotification: '12.07.2023',
      file: '',
    },
    {
      firstName: 'Juan',
      lastName: 'Escalona',
      status: 'Vencido',
      lastUpdate: '01.06.2023',
      type: '',
      lastNotification: '12.07.2023',
      file: '',
    },
    {
      firstName: 'Inversiones',
      lastName: 'Compass',
      status: 'Notificado',
      lastUpdate: '24.05.2023',
      type: '',
      lastNotification: '12.07.2023',
      file: '',
    },
    {
      firstName: 'Inversiones',
      lastName: 'Compass',
      status: 'Espera firma',
      lastUpdate: '24.05.2023',
      type: 'sin cambios',
      lastNotification: '12.07.2023',
      file: '',
    },
  ];

  // http service
  ngOnInit() {
    this.httpService.getPosts().subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
    });
  }
}
